import { commands, Selection, SnippetString, window } from "vscode";
import { ClassReflection, getClassReflection } from "../utils/bloc-state-parser";


export async function addStatePropertyCommand() {
    let editor = window.activeTextEditor;
    if (!editor) {return;}

    const line = editor.document.lineAt(editor.selection.end);
    const classReflection = getClassReflection(editor.document.getText(), line.lineNumber);
    if (classReflection === null) {
        return;
    }

    const classTextOffset = editor.document.getText().indexOf(classReflection.text);
    const anchor = editor.document.positionAt(classTextOffset);
    const active = editor.document.positionAt(classTextOffset + classReflection.text.length);

    const snippet = getStatePropertySnippet(classReflection);
    await editor.insertSnippet(snippet, new Selection(anchor,active));
    await commands.executeCommand("editor.action.formatDocument");
} 

function getStatePropertySnippet(classReflection: ClassReflection): SnippetString {
    let snippetText = classReflection.text;
    snippetText = insertConstructorArgument(classReflection.name, snippetText);
    snippetText = insertClassPropertySnippet(classReflection.name, snippetText);
    snippetText = insertCopyWithArgument(classReflection.name, snippetText);
    snippetText = insertCopyWithBody(classReflection.name, snippetText);
    snippetText = insertEquatableField(snippetText);
    return new SnippetString(snippetText);
}

function insertConstructorArgument(className: string, snippetText: string) {
    const errorPattern = new RegExp(
        `(?<before>${className}\\(\s*{\.+)(?<after>this\\.error,?\.+?)}\\)`,
        's'
    );
    if (snippetText.match(errorPattern)) {
        return snippetText.replace(errorPattern, (_, before, after) => {
            const insert = 'this.\${2:propertyName},';
            return before + insert + after + '})';
        });
    }
    const statusPattern = new RegExp(
        `(?<before>${className}\\(\.+required this\\.status,?)(?<after>\.+?)\\)`,
        's'
    );
    return snippetText.replace(statusPattern, (_, before, after) => {
        const insert = (before.slice(-1) !== ',' ? ',' : '') + 'this.\${2:propertyName},';
        return before + insert + after + ')';
    });    
}

function insertClassPropertySnippet(className: string, snippetText: string) {
    const errorPattern = new RegExp(
        `(?<after>final String\\?? error;)`,
    );
    if (snippetText.match(errorPattern)) {
        return snippetText.replace(errorPattern, (_, after) => {
            return 'final \${1:PropertyType}? \${2:propertyName};' + after;
        });
    }    
    const statusPattern = new RegExp(
        `(?<before>final ${className.replace('State','Status')} status;)`,
    );
    return snippetText.replace(statusPattern, (_, before) => {
        return before + 'final \${1:PropertyType}? \${2:propertyName};';
    });
}

function insertCopyWithArgument(className: string, snippetText: string) {
    const errorPattern = new RegExp(
        `(?<before>${className} copyWith\\(.+)(?<after>String\\? error(,|\\s|}))`,
        's'
    );
    if (snippetText.match(errorPattern)) {
        return snippetText.replace(errorPattern, (_, before, after) => {
            const insert = '\${1:propertyType}? \${2:propetyName},';
            return before + insert + after;
        });
    }    
    const statusClassName = className.replace('State','Status');
    const statusPattern = new RegExp(
        `(?<before>${className} copyWith\\(\.+${statusClassName}\\? status,?)(?<after>\.+?)\\)`,
        's'
    );
    return snippetText.replace(statusPattern, (_, before, after) => {
        const insert = (before.slice(-1) !== ',' ? ',' : '') + '\${1:propertyType}? \${2:propetyName},';
        return before + insert + after + ')';
    });
}

function insertCopyWithBody(className: string, snippetText: string) {
    const errorPattern = new RegExp(
        `(?<before>return ${className}\\(.+)(?<after>error: error)`,
        's'
    );
    if (snippetText.match(errorPattern)) {
        return snippetText.replace(errorPattern, (_, before, after) => {
            const insert = '\${2:propertyName}: \${2:propertyName} ?? this.\${2:propetyName},';
            return before + insert + after;
        });
    }
    const statusPattern = new RegExp(
        `(?<before>status: status \\?\\? this\\.status,?)`,
    );
    return snippetText.replace(statusPattern, (_, before) => {
        const insert = (before.slice(-1) !== ',' ? ',' : '') + '\${2:propertyName}: \${2:propertyName} ?? this.\${2:propetyName},';
        return before + insert;
    });
}

function insertEquatableField(snippetText: string) {
    const propsPattern = new RegExp(
        `(?<before>List<Object\\??> get props =>\\s*)\\[(?<props>.*?)\\]`,
        's'
    );
    return snippetText.replace(propsPattern, (_, before, props) => {
        const propsList = props.split(',').map((s: string) => s.trim());
        for (let i = 0; i < propsList.length; i++) {
            if (propsList[i] === 'error') {
                propsList.splice(i, 0, '${2:propetyName}');
                return before + '[' + propsList.join(', ') + ']';
            }
        }
        for (let i = 0; i < propsList.length; i++) {
            if (propsList[i] === 'status') {
                propsList.splice(i+1, 0, '${2:propetyName}').join(', ');
                return before + '[' + propsList.join(', ') + ']';
            }
        }
        return snippetText;
    });
}


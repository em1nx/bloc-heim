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
    snippetText = insertPropertySnippet(classReflection.name, snippetText);
    snippetText = insertCopyWithArgument(classReflection.name, snippetText);
    snippetText = insertCopyWithBody(snippetText);
    snippetText = insertEquatableField(snippetText);
    return new SnippetString(snippetText);
}

function insertConstructorArgument(className: string, snippetText: string) {
    const pattern = new RegExp(
        `(?<before>${className}\\(\.+required this\\.status,?)(?<after>\.+?)\\)`,
        's'
    );
    return snippetText.replace(pattern, (_, before, after) => {
        const insert = (before.slice(-1) !== ',' ? ',' : '') + 'required this.\${2:propertyName},';
        return before + insert + after + ')';
    });
}

function insertPropertySnippet(className: string, snippetText: string) {
    const pattern = new RegExp(
        `(?<before>final ${className.replace('State','Status')} status;)`,
    );
    return snippetText.replace(pattern, (_, before) => {
        return before + 'final \${1:PropertyType} \${2:propertyName};';
    });
}

function insertCopyWithArgument(className: string, snippetText: string) {
    const statusClassName = className.replace('State','Status');
    const pattern = new RegExp(
        `(?<before>${className} copyWith\\(\.+${statusClassName}\\? status,?)(?<after>\.+?)\\)`,
        's'
    );
    return snippetText.replace(pattern, (_, before, after) => {
        const insert = (before.slice(-1) !== ',' ? ',' : '') + '\${1:propertyType}? \${2:propetyName},';
        return before + insert + after + ')';
    });
}

function insertCopyWithBody(snippetText: string) {
    const pattern = new RegExp(
        `(?<before>status: status \\?\\? this\\.status,?)`,
    );
    return snippetText.replace(pattern, (_, before) => {
        const insert = (before.slice(-1) !== ',' ? ',' : '') + '\${2:propertyName}: \${2:propertyName} ?? this.\${2:propetyName},';
        return before + insert;
    });
}

function insertEquatableField(snippetText: string) {
    const pattern = new RegExp(
        `(?<before>List<Object\\?> get props => \\[.*?status,)(?<after>.*?)\\]`,
        's'
    );
    return snippetText.replace(pattern, (_, before, after) => {
        const insert = (before.slice(-1) !== ',' ? ',' : '') + '\${2:propetyName},';
        return before + insert + after + ']';
    });
}


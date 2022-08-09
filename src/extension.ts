import { window, commands, ExtensionContext } from 'vscode';
import { createBlocCommand, wrapWithBlocProvider } from './commands';
import { getSelectedText } from './utils';

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        commands.registerCommand('bloc-heim.createBloc', createBlocCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocProvider', wrapWithBlocProvider)
    );


    context.subscriptions.push(
        commands.registerCommand('bloc-heim.testBloc', async () => {
            const editor = window.activeTextEditor;
            if (!editor) {
                return; 
            }
            const selection = getSelectedText(editor);
            const widget = editor.document.getText(selection).replace("$", "\\$");

                

            await window.showInformationMessage(widget);
        })
    );

}





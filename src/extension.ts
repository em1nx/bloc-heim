import { window, commands, ExtensionContext } from 'vscode';
import { createBlocCommand, wrapWithBlocProvider } from './commands';
import { wrapWithBlocBuilder } from './commands/wrapWithBlocBuilder';
import { getSelectedText } from './utils';

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        commands.registerCommand('bloc-heim.createBloc', createBlocCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocProvider', wrapWithBlocProvider)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocBuilder', wrapWithBlocBuilder)
    );

}





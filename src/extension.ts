import { commands, ExtensionContext } from 'vscode';
import { createBlocCommand, wrapWithBlocProvider } from './commands';
import { wrapWithBlocBuilder } from './commands/wrapWithBlocBuilder';
import { wrapWithBlocSelector } from './commands/wrapWithBlocSelector';

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

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocSelector', wrapWithBlocSelector)
    );

}





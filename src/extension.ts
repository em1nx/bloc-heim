import { commands, ExtensionContext } from 'vscode';
import { createBlocCommand } from './commands/createBlocCommand';
import { wrapWithBlocBuilderCommand } from './commands/wrapWithBlocBuilderCommand';
import { wrapWithBlocProviderCommand } from './commands/wrapWithBlocProviderCommand';
import { wrapWithBlocSelectorCommand } from './commands/wrapWithBlocSelectorCommand';

export function activate(context: ExtensionContext) {
    context.subscriptions.push(
        commands.registerCommand('bloc-heim.createBloc', createBlocCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocProvider', wrapWithBlocProviderCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocBuilder', wrapWithBlocBuilderCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocSelector', wrapWithBlocSelectorCommand)
    );

}





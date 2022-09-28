import { commands, ExtensionContext, languages } from 'vscode';
import { BlocCodeActionProvider } from './code-actions/blocCodeActionsProvider';
import { createBlocCommand } from './commands/createBlocCommand';
import { wrapWithBlocBuilderCommand } from './commands/wrapWithBlocBuilderCommand';
import { wrapWithBlocConsumerCommand } from './commands/wrapWithBlocConsumerCommand';
import { wrapWithBlocListenerCommand } from './commands/wrapWithBlocListenerCommand';
import { wrapWithBlocProviderCommand } from './commands/wrapWithBlocProviderCommand';
import { wrapWithBlocSelectorCommand } from './commands/wrapWithBlocSelectorCommand';
import { wrapWithMultiBlocListenerCommand } from './commands/wrapWithMultiBlocListenerCommand';
import { wrapWithMultiBlocProviderCommand } from './commands/wrapWithMultiBlocProviderCommand';
import { wrapWithMultiRepositoryProviderCommand } from './commands/wrapWithMultiRepositoryProviderCommand';
import { wrapWithRepositoryProviderCommand } from './commands/wrapWithRepositoryProviderCommand';

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

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithMultiBlocProvider', wrapWithMultiBlocProviderCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocListener', wrapWithBlocListenerCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithMultiBlocListener', wrapWithMultiBlocListenerCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithBlocConsumer', wrapWithBlocConsumerCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithRepositoryProvider', wrapWithRepositoryProviderCommand)
    );

    context.subscriptions.push(
        commands.registerCommand('bloc-heim.wrapWithMultiRepositoryProvider', wrapWithMultiRepositoryProviderCommand)
    );

    languages.registerCodeActionsProvider(
        { language: "dart", scheme: "file" },
        new BlocCodeActionProvider(),
    );
}





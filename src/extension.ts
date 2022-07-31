import * as vscode from 'vscode';
import { createBlocCommand } from './commands';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('bloc-heim.createBloc', createBlocCommand)
	);

}





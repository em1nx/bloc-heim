import { window } from "vscode";
import { getSelectedText } from "../utils";


export async function addStatePropertyCommand() {
    let editor = window.activeTextEditor;
    if (!editor) {return;}

    const line = editor.document.lineAt(editor.selection.end);
    



} 
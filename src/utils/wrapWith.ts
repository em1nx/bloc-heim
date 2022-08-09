// Forked from https://github.com/felangel/bloc/blob/313e963d9374871395a6099f753975498c037267/extensions/vscode/src/utils/wrap-with.ts

import { commands, SnippetString, window } from "vscode";
import { getSelectedText } from "./getSelectedText";

type SnippetWrapper = (child: string) => string;

export const wrapWith = async (snippetWrapper: SnippetWrapper) => {
    let editor = window.activeTextEditor;
    if (!editor) {return;}
    const selection = getSelectedText(editor);
    const child = editor.document.getText(selection).replace("$", "\\$");
    const snippet = new SnippetString(snippetWrapper(child));
    editor.insertSnippet(snippet, selection);
    await commands.executeCommand("editor.action.formatDocument");
  };
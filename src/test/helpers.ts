import { Position, Range, TextDocument, window, workspace } from "vscode";

export async function openDocument(content: string, position: Position = new Position(0,0)): Promise<TextDocument> {
    const document = await createDocument(content, 'dart');
    await window.showTextDocument(document, {
        selection: new Range(position.line, position.character, position.line, position.character)
    });
    return document;
}

async function createDocument(content: string, language?: string) {
    return await workspace.openTextDocument({
        language,
        content,
    });
}

export function clearSpaces(content: string) {
    return content.replace(/\s+/g,'');
}
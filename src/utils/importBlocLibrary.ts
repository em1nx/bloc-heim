import { commands, Position, window } from "vscode";

const importFlutterBloc = "import 'package:flutter_bloc/flutter_bloc.dart';\n";
const importFlutterBlocReg = /^import\s+(?:'|")package:flutter_bloc\/flutter_bloc\.dart(?:'|");/gm;

export async function importBlocLibrary() {
    let editor = window.activeTextEditor;
    if (!editor) {return;}
    const text = editor.document.getText();
    if (text.match(importFlutterBlocReg)) {
        return;
    }
    await editor.edit((editBuilder) => {
        editBuilder.insert(new Position(0,0), importFlutterBloc);
    });
    await commands.executeCommand("editor.action.organizeImports");
}


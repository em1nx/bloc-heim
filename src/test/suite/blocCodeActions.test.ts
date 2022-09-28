import { CodeActionKind, commands, Position } from "vscode";
import { flutterWidgetFixture } from "../fixtures";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";
import { wrapWith } from "../../utils";

suite('blocCodeActions Test Suite', () => {

  afterEach(async() => {
    await commands.executeCommand('workbench.action.closeActiveEditor');
  });

  test('wrapWith-const check', async () => {
    const doc = await openDocument(flutterWidgetFixture(), new Position(10,17));

    let a = await commands.executeCommand('editor.action.codeAction', CodeActionKind.Refactor);

    await commands.executeCommand("editor.action.codeAction", {
        kind: CodeActionKind.Refactor,
      });
  });

});


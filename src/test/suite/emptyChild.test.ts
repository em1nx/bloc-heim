import { commands, Position, Selection, window } from "vscode";
import { flutterWidgetFixture } from "../fixtures";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";

suite('emptyChild Test Suite', () => {

  afterEach(async() => {
      await commands.executeCommand('workbench.action.closeActiveEditor');
  });
    
	test('emptyChild check', async () => {
    const doc = await openDocument('', new Position(0,0));
    await commands.executeCommand('bloc-heim.wrapWithBlocBuilder');
		const expectedContent = `
import 'package:flutter_bloc/flutter_bloc.dart';
BlocBuilder<Bloc,State>(
    builder: (context, state) {
        return Container();
    },
)
`.trim();
        assert.strictEqual(doc.getText(), expectedContent);
    });

});


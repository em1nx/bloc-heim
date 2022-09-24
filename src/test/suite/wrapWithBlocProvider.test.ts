import { commands, Position, Selection, window } from "vscode";
import { flutterWidgetFixture } from "../fixtures";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";

suite('wrapWithBlocProvider Test Suite', () => {

    afterEach(async() => {
        await commands.executeCommand('workbench.action.closeActiveEditor');
    });
    
	test('wrapWithBlocProvider check', async () => {
        const doc = await openDocument(flutterWidgetFixture(), new Position(10,17));
        await commands.executeCommand('bloc-heim.wrapWithBlocProvider');
		const expectedContent = `
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart';

class FlutterWidget extends StatelessWidget {
  const FlutterWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: const Center(
        child: BlocProvider(
          create: (context) => BlocClassname.fromContext(context),
          child: Text('this is my test text'),
        ),
      ),
    );
  }
}                
`.trim();
        assert.strictEqual(doc.getText(), expectedContent);
    });

    test('wrapWithBlocProvider selection check', async () => {
      const doc = await openDocument(flutterWidgetFixture(), new Position(10,17));
      const editor = window.activeTextEditor!;
      await commands.executeCommand('bloc-heim.wrapWithBlocProvider');
      assert.deepEqual (
        editor.selections, 
        [new Selection(12,31,12,44)]);
  });

});


import { commands, Position, Selection, window } from "vscode";
import { flutterWidgetFixture } from "../fixtures";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";

suite.skip('wrapWithMultiRepositoryProvider Test Suite', () => {

    afterEach(async() => {
        await commands.executeCommand('workbench.action.closeActiveEditor');
    });
    
	test('wrapWithMultiRepositoryProvider check', async () => {
        const doc = await openDocument(flutterWidgetFixture(), new Position(10,17));
        await commands.executeCommand('bloc-heim.wrapWithMultiRepositoryProvider');
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
        child: MultiRepositoryProvider(
          providers: [
            RepositoryProvider(
              create: (context) => Repository(),
            ),
            // TODO: you can add additional repositories here
          ],
          child: Text('this is my test text'),
        ),
      ),
    );
  }
}                
`.trim();
        assert.strictEqual(doc.getText(), expectedContent);
    });

});


import { commands, Position, Selection, window } from "vscode";
import { flutterWidgetFixture } from "../fixtures";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";
import { flutterWidgetEmptyBuildFixture } from "../fixtures/flutterWidgetEmptyBuildFixture";

suite.skip('emptyChild Test Suite', () => {

  afterEach(async() => {
      await commands.executeCommand('workbench.action.closeActiveEditor');
  });
    
	test('emptyChild check', async () => {
    const doc = await openDocument(flutterWidgetEmptyBuildFixture(), new Position(7,11));
    await commands.executeCommand('bloc-heim.wrapWithBlocBuilder');
		const expectedContent = `
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter/material.dart';

class FlutterWidget extends StatelessWidget {
  const FlutterWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    BlocBuilder<Bloc,State>(
      builder: (context, state) {
        return Container();
      },
    )
  }
} 
`.trim();
        assert.strictEqual(doc.getText(), expectedContent);
    });

});


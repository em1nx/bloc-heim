import { commands, Position } from "vscode";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";
import { wrapWith } from "../../utils";
import { flutterWidgetFixture } from "../fixtures/flutterWidgetFixture";

suite('wrapWith Test Suite', () => {

  const wrapper = (child: String) => `(${child})`;

  afterEach(async() => {
    await commands.executeCommand('workbench.action.closeActiveEditor');
  });

	test('wrapWith-const check', async () => {
    const doc = await openDocument(flutterWidgetFixture(), new Position(10,17));
    await wrapWith(wrapper);
		const expectedContent = `
import 'package:flutter/material.dart';

class FlutterWidget extends StatelessWidget {
  const FlutterWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: const Center(
        child: (Text('this is my test text')),
      ),
    );
  }
}                
`.trim();
        assert.strictEqual(doc.getText(), expectedContent);
  });


	test('wrapWith+const check', async () => {
    const doc = await openDocument(flutterWidgetFixture(), new Position(9,15));
    await wrapWith(wrapper);
		const expectedContent = `
import 'package:flutter/material.dart';

class FlutterWidget extends StatelessWidget {
  const FlutterWidget({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: (const Center(
              child: Text('this is my test text'),
            )),
    );
  }
}                
`.trim();
        assert.strictEqual(doc.getText(), expectedContent);
  });


});


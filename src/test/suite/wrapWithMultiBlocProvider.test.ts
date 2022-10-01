import { commands, Position, Selection, window } from "vscode";
import { flutterWidgetFixture } from "../fixtures";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";

suite.skip('wrapWithMultiBlocProvider Test Suite', () => {

    afterEach(async() => {
        await commands.executeCommand('workbench.action.closeActiveEditor');
    });
    
	test('wrapWithMultiBlocProvider check', async () => {
        const doc = await openDocument(flutterWidgetFixture(), new Position(10,17));
        await commands.executeCommand('bloc-heim.wrapWithMultiBlocProvider');
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
        child: MultiBlocProvider(
          providers: [
            BlocProvider<Bloc>(
              create: (context) => Bloc.fromContext(context),
            ),
            // TODO: you can add additional providers here
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


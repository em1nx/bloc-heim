import { commands, Position, Selection, window } from "vscode";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";
import { blocStateFixture } from "../fixtures/blocStateFixture";

suite.skip('addStateProperty Test Suite', () => {

    afterEach(async() => {
        await commands.executeCommand('workbench.action.closeActiveEditor');
    });
    
	test('addStateProperty for class check', async () => {
        const positions = [
            new Position(16,2), // Between lines in class
            new Position(10,2), // In constructor
            new Position(26,6), // In copyWith 
        ];

        for (const position of positions) {
            const doc = await openDocument(blocStateFixture(), position);
            await commands.executeCommand('bloc-heim.addStateProperty');
            const expectedContent = `
part of 'add_order_bloc.dart';

enum AddOrderStatus { initial, loading, success, failure }

class RandomClass1 {
  const RandomClass1();
}

class AddOrderState extends Equatable {
  const AddOrderState({
    required this.status,
    this.error = '',
    this.newProperty,
  });

  final AddOrderStatus status;
  final String error;
  final String newProperty;
    
  @override
  List<Object?> get props => [status, error, newProperty];

  AddOrderState copyWith({
    AddOrderStatus? status,
    String? error,
    String? newProperty,
  }) {
    return AddOrderState(
      status: status ?? this.status,
      error: error ?? this.error,
      newProperty: newProperty ?? this.newProperty,
    );
  }
}  

class RandomClass2 {
  const RandomClass2();
}
            `.trim();
            assert.strictEqual(doc.getText(), expectedContent, `${position.line}:${position.character}`);
        }        
    });

});


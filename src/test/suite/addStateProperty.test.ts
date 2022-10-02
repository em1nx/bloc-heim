import { commands, Position, Selection, window } from "vscode";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";
import { blocStateCleanFixture } from "../fixtures/blocStateCleanFixture";

suite('addStateProperty Test Suite', () => {

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
            const doc = await openDocument(blocStateCleanFixture(), position);
            await commands.executeCommand('bloc-heim.addStateProperty');
            const expectedContent = `
part of 'add_order_bloc.dart';

enum AddOrderStatus { initial, loading, success, failure }

class AddOrderState extends Equatable {
  const AddOrderState({
    required this.status,
    this.propertyName,
    this.error = '',
  });

  final AddOrderStatus status;
  final PropertyType? propertyName;
  final String error;
    
  @override
  List<Object?> get props => [status, propertyName, error];

  AddOrderState copyWith({
    AddOrderStatus? status,
    PropertyType? propertyName,
    String? error,
  }) {
    return AddOrderState(
      status: status ?? this.status,
      propertyName: propertyName ?? this.propertyName,
      error: error ?? this.error,
    );
  }
}  
            `.trim();
            assert.strictEqual(doc.getText(), expectedContent, `${position.line}:${position.character}`);
        }        
    });

});


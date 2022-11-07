import { commands, Position, Selection, window } from "vscode";
import { openDocument } from "../helpers";
import * as assert from 'assert';
import { afterEach } from "mocha";
import { blocStateFixture } from "../fixtures/blocStateFixture";

suite('addStateProperty Test Suite', () => {

    afterEach(async() => {
        await commands.executeCommand('workbench.action.closeActiveEditor');
    });
    
	test('addStateProperty for class check', async () => {
        const positions = [
            new Position(12,2), // Between lines in class
            new Position(7,2), // In constructor
            new Position(20,6), // In copyWith 
        ];

        for (const position of positions) {
            const doc = await openDocument(blocStateFixture({randomClasses: false}), position);
            await commands.executeCommand('bloc-heim.addStateProperty');
            const expectedContent = `
part of 'add_order_bloc.dart';

enum TestStatus { initial, loading, success, failure }

class TestState extends Equatable {
  const TestState({
    required this.status,
    this.innerProp1,
    this.propertyName,this.error,
  });
  
  final TestStatus status;
  final String? innerProp1;
  final PropertyType? propertyName;final String? error;
  
  @override
  List<Object?> get props => [status, innerProp1, propertyName, error];
  
  TestState copyWith({
    TestStatus? status,
    String? innerProp1,
    PropertyType? propertyName,String? error,
  }) {
    return TestState(
      status: status ?? this.status,
      innerProp1: innerProp1 ?? this.innerProp1,
      propertyName: propertyName ?? this.propertyName,error: error,
    );
  }
}  
            `.trim();
            assert.strictEqual(doc.getText(), expectedContent, `${position.line}:${position.character}`);
        }        
    });

    test('addStateProperty for class check (no error field)', async () => {
      const positions = [
          new Position(12,2), // Between lines in class
          new Position(7,2), // In constructor
          new Position(20,6), // In copyWith 
      ];

      for (const position of positions) {
          const doc = await openDocument(blocStateFixture({randomClasses: false, errorField: false}), position);
          await commands.executeCommand('bloc-heim.addStateProperty');
          const expectedContent = `
part of 'add_order_bloc.dart';

enum TestStatus { initial, loading, success, failure }

class TestState extends Equatable {
  const TestState({
    required this.status,this.propertyName,
    this.innerProp1,
    this.innerProp2,
  });
  
  final TestStatus status;final PropertyType? propertyName;
  final String? innerProp1;
  final String? innerProp2;
  
  @override
  List<Object?> get props => [status, propertyName, innerProp1, innerProp2];
  
  TestState copyWith({
    TestStatus? status,PropertyType? propertyName,
    String? innerProp1,
    String? innerProp2,
  }) {
    return TestState(
      status: status ?? this.status,propertyName: propertyName ?? this.propertyName,
      innerProp1: innerProp1 ?? this.innerProp1,
      innerProp2: innerProp2 ?? this.innerProp2,
    );
  }
}  
          `.trim();
          assert.strictEqual(doc.getText(), expectedContent, `${position.line}:${position.character}`);
      }        
  });

    test('addStateProperty for class check (not null state)', async () => {
          const doc = await openDocument(blocStateFixture({nullableProps: false, randomClasses: false}), new Position(10,2));
          await commands.executeCommand('bloc-heim.addStateProperty');
          const expectedContent = `
part of 'add_order_bloc.dart';

enum TestStatus { initial, loading, success, failure }

class TestState extends Equatable {
  const TestState({
    required this.status,
    this.innerProp1,
    this.propertyName,this.error,
  });
  
  final TestStatus status;
  final String? innerProp1;
  final PropertyType? propertyName;final String? error;
  
  @override
  List<Object> get props => [status, innerProp1, propertyName, error];
  
  TestState copyWith({
    TestStatus? status,
    String? innerProp1,
    PropertyType? propertyName,String? error,
  }) {
    return TestState(
      status: status ?? this.status,
      innerProp1: innerProp1 ?? this.innerProp1,
      propertyName: propertyName ?? this.propertyName,error: error,
    );
  }
}  
      `.trim();
      assert.strictEqual(doc.getText(), expectedContent);
  });

  test('addStateProperty for class check (table props)', async () => {
    const doc = await openDocument(blocStateFixture({propsAsTable: true, randomClasses: false}), new Position(10,2));
    await commands.executeCommand('bloc-heim.addStateProperty');
    const expectedContent = `
part of 'add_order_bloc.dart';

enum TestStatus { initial, loading, success, failure }

class TestState extends Equatable {
  const TestState({
    required this.status,
    this.innerProp1,
    this.propertyName,this.error,
  });
  
  final TestStatus status;
  final String? innerProp1;
  final PropertyType? propertyName;final String? error;
  
  @override
  List<Object?> get props => [status, innerProp1, propertyName, error, ];
  
  TestState copyWith({
    TestStatus? status,
    String? innerProp1,
    PropertyType? propertyName,String? error,
  }) {
    return TestState(
      status: status ?? this.status,
      innerProp1: innerProp1 ?? this.innerProp1,
      propertyName: propertyName ?? this.propertyName,error: error,
    );
  }
}  
`.trim();
    assert.strictEqual(doc.getText(), expectedContent);
});

});


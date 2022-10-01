import { getClassReflection } from "../../../utils/bloc-state-parser";
import { blocStateFixture } from "../../fixtures/blocStateFixture";
import * as assert from 'assert';

suite('getClassReflection Test Suite', () => {

	test('getClassReflection check 1', async () => {
        const classCode = getClassReflection(
            blocStateFixture(),
            16,
        );

		const expectedContent = `
class AddOrderState extends Equatable {
  const AddOrderState({
    required this.status,
    this.error = '',
  });
  
  final AddOrderStatus status;
  final String error;
  
  @override
  List<Object?> get props => [status, error];
  
  AddOrderState copyWith({
    AddOrderStatus? status,
    String? error,
  }) {
    return AddOrderState(
      status: status ?? this.status,
      error: error ?? this.error,
    );
  }
}           
`.trim();
        assert.ok(classCode !== undefined);
        assert.strictEqual(classCode!.source, expectedContent);
    });

	test('getClassReflection check 2', async () => {
        const classCode = getClassReflection(
            blocStateFixture(),
            5,
        );

		const expectedContent = `
class RandomClass1 {
  const RandomClass1();
}          
`.trim();
        assert.ok(classCode !== undefined);
        assert.strictEqual(classCode!.source, expectedContent);
    });

	test('getClassReflection check 3', async () => {
        const classCode = getClassReflection(
            blocStateFixture(),
            33,
        );

		const expectedContent = `
class RandomClass2 {
  const RandomClass2();
}          
`.trim();
        assert.ok(classCode !== undefined);
        assert.strictEqual(classCode!.source, expectedContent);
    });

});


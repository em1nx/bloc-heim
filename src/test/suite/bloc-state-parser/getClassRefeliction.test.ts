import { getClassReflection } from "../../../utils/bloc-state-parser";
import { blocStateFixture } from "../../fixtures/blocStateFixture";
import * as assert from 'assert';

suite('getClassReflection Test Suite', () => {

	test('getClassReflection check 1', async () => {
        const classRefelection = getClassReflection(
            blocStateFixture(),
            16,
        );

		const expectedContent = `
class TestState extends Equatable {
  const TestState({
    required this.status,
    this.innerProp1,
    this.error,
  });
  
  final TestStatus status;
  final String? innerProp1;
  final String? error;
  
  @override
  List<Object?> get props => [status, innerProp1, error];
  
  TestState copyWith({
    TestStatus? status,
    String? innerProp1,
    String? error,
  }) {
    return TestState(
      status: status ?? this.status,
      innerProp1: innerProp1 ?? this.innerProp1,
      error: error,
    );
  }
}           
`.trim();
        assert.ok(classRefelection !== undefined);
        assert.strictEqual(classRefelection!.text, expectedContent);
    });

	test('getClassReflection check 2', async () => {
        const classRefelection = getClassReflection(
            blocStateFixture(),
            5,
        );

		const expectedContent = `
class RandomClass1 {
  const RandomClass1();
}          
`.trim();
        assert.ok(classRefelection !== undefined);
        assert.strictEqual(classRefelection!.text, expectedContent);
    });

	test('getClassReflection check 3', async () => {
        const classRefelection = getClassReflection(
            blocStateFixture(),
            35,
        );

		const expectedContent = `
class RandomClass2 {
  const RandomClass2();
}          
`.trim();
        assert.ok(classRefelection !== undefined);
        assert.strictEqual(classRefelection!.text, expectedContent);
    });

    test('getClassReflection null reflection check', async () => {
      const classRefelection = getClassReflection(
          blocStateFixture(),
          3,
      );
      assert.ok(classRefelection === null);
  });

});


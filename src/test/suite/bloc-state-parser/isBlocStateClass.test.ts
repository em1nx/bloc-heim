import { getClassReflection, isBlocStateClass } from "../../../utils/bloc-state-parser";
import { blocStateFixture } from "../../fixtures/blocStateFixture";
import * as assert from 'assert';

suite('isBlocStateClass Test Suite', () => {

	test('isBlocStateClass check valid state class', async () => {
        const classRefelection = getClassReflection(blocStateFixture(), 16);
        if (classRefelection === null) {
            assert.fail('invalid class reflection');
        }
        const isStateClass = isBlocStateClass(classRefelection);
        assert.ok(isStateClass);
    });

	test('isBlocStateClass check invalid state class 1', async () => {
        const classRefelection = getClassReflection(blocStateFixture(), 5);
        if (classRefelection === null) {
            assert.fail('invalid class reflection');
        }
        const isStateClass = isBlocStateClass(classRefelection);
        assert.ok(isStateClass === false);
    });

	test('isBlocStateClass check invalid state class 2', async () => {
        const classRefelection = getClassReflection(blocStateFixture(), 35);
        if (classRefelection === null) {
            assert.fail('invalid class reflection');
        }
        const isStateClass = isBlocStateClass(classRefelection);
        assert.ok(isStateClass === false);
    });

      test('isBlocStateClass check table Equatable props', async () => {
        const classRefelection = getClassReflection(blocStateFixture({propsAsTable: true}), 10);
        if (classRefelection === null) {
            assert.fail('invalid class reflection');
        }
        const isStateClass = isBlocStateClass(classRefelection);
        assert.ok(isStateClass);
      });

      test('isBlocStateClass check not null Equatable props', async () => {
        const classRefelection = getClassReflection((blocStateFixture({nullableProps: false})), 10);
        if (classRefelection === null) {
            assert.fail('invalid class reflection');
        }
        const isStateClass = isBlocStateClass(classRefelection);
        assert.ok(isStateClass);
      });
      
});


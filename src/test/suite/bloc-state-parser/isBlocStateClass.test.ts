import { getClassReflection, isBlocStateClass } from "../../../utils/bloc-state-parser";
import { blocStateFixture } from "../../fixtures/blocStateFixture";
import * as assert from 'assert';
import { blocStateStatusLastFixture } from "../../fixtures/blocStateStatusLastFixture";
import { blocStateStatusMiddleFixture } from "../../fixtures/blocStateStatusMiddleFixture";

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
        const classRefelection = getClassReflection(blocStateFixture(), 33);
        if (classRefelection === null) {
            assert.fail('invalid class reflection');
        }
        const isStateClass = isBlocStateClass(classRefelection);
        assert.ok(isStateClass === false);
    });

    test('isBlocStateClass check blocStateStatusLastFixture', async () => {
        const classRefelection = getClassReflection(blocStateStatusLastFixture(), 0);
        if (classRefelection === null) {
            assert.fail('invalid class reflection');
        }
        const isStateClass = isBlocStateClass(classRefelection);
        assert.ok(isStateClass);
    });

    test('isBlocStateClass check blocStateStatusMiddleFixture', async () => {
        const classRefelection = getClassReflection(blocStateStatusMiddleFixture(), 0);
        if (classRefelection === null) {
            assert.fail('invalid class reflection');
        }
        const isStateClass = isBlocStateClass(classRefelection);
        assert.ok(isStateClass);
      });
  
});


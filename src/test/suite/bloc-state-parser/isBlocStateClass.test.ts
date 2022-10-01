import { isBlocStateClass } from "../../../utils/bloc-state-parser";
import { blocStateFixture } from "../../fixtures/blocStateFixture";
import * as assert from 'assert';
import { blocStateStatusLastFixture } from "../../fixtures/blocStateStatusLastFixture";
import { blocStateStatusMiddleFixture } from "../../fixtures/blocStateStatusMiddleFixture";

suite('isBlocStateClass Test Suite', () => {

	test('isBlocStateClass check valid state class', async () => {
        const isStateClass = isBlocStateClass(
            blocStateFixture(),
            16,
        );

        assert.ok(isStateClass);
    });

	test('isBlocStateClass check invalid state class 1', async () => {
        const isStateClass = isBlocStateClass(
            blocStateFixture(),
            5,
        );

        assert.ok(isStateClass === false);
    });

	test('isBlocStateClass check invalid state class 2', async () => {
        const isStateClass = isBlocStateClass(
            blocStateFixture(),
            33,
        );

        assert.ok(isStateClass === false);
    });

    test('isBlocStateClass check blocStateStatusLastFixture', async () => {
      const isStateClass = isBlocStateClass(
          blocStateStatusLastFixture(),
          0,
      );
      assert.ok(isStateClass);
    });

    test('isBlocStateClass check blocStateStatusMiddleFixture', async () => {
        const isStateClass = isBlocStateClass(
            blocStateStatusMiddleFixture(),
            0,
        );
        assert.ok(isStateClass);
      });
  
});


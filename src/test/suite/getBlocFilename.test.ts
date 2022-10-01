import * as assert from 'assert';
import { getBlocFilename } from '../../utils';


suite.skip('getBlocFilename Test Suite', () => {

    const samples = [
        // One word
        ["counter", "counter"],
        ["Counter", "counter"],
        ["COUNTER", "counter"],
        
        // Trim
        ["  counter  ", "counter"],
        [" counter", "counter"],
        ["counter ", "counter"],
        
        // Words space separated
        ["my counter", "my_counter"],
        ["My Counter", "my_counter"],
        ["my  counter", "my_counter"],
        ["My  Counter", "my_counter"],

        // Words underscore separated
        ["my_counter", "my_counter"],
        ["My_Counter", "my_counter"],
        ["my__counter", "my_counter"],
        ["My__Counter", "my_counter"],

        // Words mix separated
        ["my_ new _counter", "my_new_counter"],
        ["My_ new _Counter", "my_new_counter"],
        ["my_ new ___counter", "my_new_counter"],
        ["My_ new ___Counter", "my_new_counter"],

        // CamelCase separated words
        ["myCounter", "my_counter"],
        ["MyCounter", "my_counter"],
        ["myNewCounter", "my_new_counter"],
        ["MyNewCounter", "my_new_counter"],

        // Non-alphanumeric charactes
        ["%!counter$&-", "counter"],
        ["!counter", "counter"],
        ["counter# ", "counter"],
        ["%!my&counter$&-", "my_counter"],
        ["!!my_(_counter", "my_counter"],
        ["my^^counter#% ", "my_counter"],
    ];

    for (let sample of samples) {
        test('"' + sample[0] + '" check', () => {
            let filename = getBlocFilename(sample[0]);
            assert.strictEqual(filename, sample[1], sample[0]);
        });
    
    }





});

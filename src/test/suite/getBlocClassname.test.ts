import * as assert from 'assert';
import { getBlocClassname } from '../../utils';


suite.skip('getBlocClassname Test Suite', () => {

    const samples = [
        // One word
        ["counter", "Counter"],
        ["Counter", "Counter"],
        ["COUNTER", "COUNTER"],
        
        // Trim
        ["  counter  ", "Counter"],
        [" counter", "Counter"],
        ["counter ", "Counter"],
        
        // Words space separated
        ["my counter", "MyCounter"],
        ["My Counter", "MyCounter"],
        ["my  counter", "MyCounter"],
        ["My  Counter", "MyCounter"],

        // Words underscore separated
        ["my_counter", "MyCounter"],
        ["My_Counter", "MyCounter"],
        ["my__counter", "MyCounter"],
        ["My__Counter", "MyCounter"],

        // Words mix separated
        ["my_ new _counter", "MyNewCounter"],
        ["My_ new _Counter", "MyNewCounter"],
        ["my_ new ___counter", "MyNewCounter"],
        ["My_ new ___Counter", "MyNewCounter"],

        // CamelCase separated words
        ["myCounter", "MyCounter"],
        ["MyCounter", "MyCounter"],
        ["myNewCounter", "MyNewCounter"],
        ["MyNewCounter", "MyNewCounter"],

        // Non-alphanumeric charactes
        ["%!counter$&-", "Counter"],
        ["!counter", "Counter"],
        ["counter# ", "Counter"],
        ["%!my&counter$&-", "MyCounter"],
        ["!!my_(_counter", "MyCounter"],
        ["my^^counter#% ", "MyCounter"],
    ];

    for (let sample of samples) {
        test('"' + sample[0] + '" check', () => {
            let classname = getBlocClassname(sample[0]);
            assert.strictEqual(classname, sample[1], sample[0]);
        });
    
    }





});

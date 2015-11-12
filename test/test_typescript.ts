/**
 * Created by tteogi on 2015. 11. 11..
 */
"use strict"
/// <reference path="../src/typescript_test"/>

import Class from "../src/typescript_test"

describe('Calculator', () => {
    let subject: Class
    beforeEach(function () {
        subject = new Class()
    });

    describe('#add', () => {
        it('should add two numbers together', () => {
            let result: number = subject.ss
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        })
    })
})

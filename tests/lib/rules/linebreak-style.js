/**
 * @fileoverview No mixed linebreaks
 * @author Erik Mueller
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/linebreak-style"),
    RuleTester = require("../../../lib/testers/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("linebreak-style", rule, {

    valid: [],

    invalid: []
});

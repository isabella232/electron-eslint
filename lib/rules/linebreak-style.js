/**
 * @fileoverview Rule to enforce a single linebreak style.
 * @author Erik Mueller
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "enforce no-op rule maintained for legacy purposes",
            category: "Stylistic Issues",
            recommended: false
        },

        schema: [
            {
                enum: ["unix", "windows"]
            }
        ]
    },

    create() {

        //--------------------------------------------------------------------------
        // Public
        //--------------------------------------------------------------------------

        return {
            Program: function checkForlinebreakStyle() { }
        };
    }
};

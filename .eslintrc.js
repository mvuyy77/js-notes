module.exports = {
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "strict": ["error", "global"],
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "indent": ["error", 4],
        "semi-style": ["error", "last"],
        "space-in-parens": ["error", "always", {"exceptions": ["{}"]}],
        "no-extra-semi": "error",
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }],
        "no-var": "error",
        "no-unused-vars": "error",
        "prefer-const": "error",
        "no-const-assign": "error",
        "object-shorthand": "error",
        "arrow-body-style": ["error", "as-needed"],
        "arrow-spacing": "error",
        "template-tag-spacing": ["error", "always"],
        "prefer-template": "error",
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true,
                "afterBlockComment": true,
                "beforeLineComment": true,
                "afterLineComment": true,
                "allowBlockStart": true,
                "allowBlockEnd": true,
                "allowObjectStart": true,
                "allowObjectEnd": true,
                "allowArrayStart": true,
                "allowArrayEnd": true
            }
        ],
        "prefer-destructuring": ["error", {
            "array": true,
            "object": true
        }, {
            "enforceForRenamedProperties": false
        }
        ],
        "template-curly-spacing": ["error", "never"],
        "no-multi-spaces": ["error", { ignoreEOLComments: false }],
        "no-return-await": "error",
        "no-useless-return": "error",
        "no-self-compare": "error",
        "require-await": "error",
        "padding-line-between-statements": ["error", { 
            "blankLine": "always", 
            "prev": ["const", "let", "var"], 
            "next": "*" 
        },{ "blankLine": "any", 
            "prev": ["const", "let", "var"], 
            "next": ["const", "let", "var"]
        }, { "blankLine": "always", 
            "prev": "directive", "next": "*" 
        }, { "blankLine": "any", "prev": "directive", "next": "directive" 
        }], 
        "spaced-comment": ["error", "always", { "markers": ["/"] }]
    }
};

module.exports = {

    'semi'                      : 'off',
    
    'indent'                    : ['error', 4],
    
    // only dangle comments with multiline objs
    'comma-dangle'              : ['warn', 'always-multiline'],
    
    // Errs if you need to use quotes, but ignores other cases.
    'quote-props'               : ['error', 'as-needed', { 
        'keywords' : false, 
        unnecessary: false, 
    }],
    
    // generous use of spaces is nice. 
    // finer grained control gets weird
    'key-spacing'               : ['off', {
        beforeColon: false, 
        afterColon : true, 
        mode       : 'minimum',
    }],
    
    'no-trailing-spaces'        : 'off',
    
    // generous object formatting {sometimes works best}
    'object-curly-spacing'      : 'off',
    
    // allows var for backwards compatibility
    'no-var'                    : 'off',
    
    // allows anon functions
    'func-names'                : 'off',
    
    // allows string concat
    'prefer-template'           : 'off',

    // allows '///'
    'spaced-comment'            : ['warn', 'always', {exceptions: ['/']}],

    // allows more empty lines
    'no-multiple-empty-lines': ['warn', {'max': 4}],



    ////////////////////////
    // REACT CUSTOM RULES //
    ////////////////////////
    
    // allow React.createClass()
    'react/prefer-es6-class'    : 'off',
    
    // allow import { x } from 'react'
    'react/react-in-jsx-scope'  : 'off',

    // warn for prop-types
    'react/prop-types'          : 'warn',


}

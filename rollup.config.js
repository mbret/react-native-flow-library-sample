/**
 * @flow
 */
import babel from 'rollup-plugin-babel';

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
        interop: false,
        esModule: false,
        strict: false,
        sourcemap: true
    },
    plugins: [
        babel({
            babelrc: false,
            "presets": [
                "@babel/preset-react",
                [
                    "@babel/preset-env",
                    {
                        "useBuiltIns": "entry",
                        "targets": {
                            "browsers": [
                                "last 1 chrome versions",
                            ]
                        }
                    },
                ]
            ],
            plugins: [
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-transform-flow-strip-types",
            ],
        })
    ]
};
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'dist/UltraDate.min.js',
            'dist/UltraDate.ja.min.js',
            'test/*.js'
        ],
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: true,
        preprocessors: {
            'dist/UltraDate.min.js': ['coverage'],
            'dist/UltraDate.ja.min.js': ['coverage']
        },
        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },
        plugins: [
            'karma-cli',
            'karma-coverage',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ]
    });
};
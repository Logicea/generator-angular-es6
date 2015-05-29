// Karma configuration

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jspm', 'jasmine', 'fixture'],

    browsers: ['Chrome'],

    reporters: ['verbose'],

    singleRun: true,

    colors: true,

    files: [
      {
        pattern: 'app/fixtures/*'
      }
    ],

    jspm: {
      config: 'config.js',
      loadFiles: [
        'app/*.js',
        'app/**/*.js',
        'app/modules/**/tests/*.js'
	  ],
      serveFiles: [
        'dist/**/**',
        'app/modules/**/*.html'
	  ]
    },

    proxies: {
      '/base/app': '/base/dist/app',
      '/jspm_packages': '/base/jspm_packages'
    },

    exclude: [],

    logLevel: config.LOG_INFO,

    jsonFixturesPreprocessor: {
      variableName: '__json__'
    },

    preprocessors: {
      'app/modules/**/tests/*.js': ['babel'],
      '**/*.json' : ['json_fixtures']
    },

	'babelPreprocessor': {
	  options: {
		  sourceMap: 'inline',
		  modules: 'system'
	  }
	},

  coverageReporter: {
    type : 'html',
    dir : 'coverage/'
  }

  });
};

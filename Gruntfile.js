module.exports = function (grunt) {
	'use strict';

	var port = grunt.option('port') || 9001,
		lrPort = grunt.option('lr-port') || 35731,
		hostname = 'localhost',
		baseFolder = '.';

	// Display the elapsed execution time of grunt tasks
	require('time-grunt')(grunt);
	// Load all grunt-* packages from package.json
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		// Read settings from package.json
		pkg: grunt.file.readJSON('package.json'),
		// Paths settings
		dirs: {
			src: {
				src: '',
				css: 'css',
				js: 'js'
			},
			dest: {
				dest: 'public',
				css: 'public/css',
				js: 'public/js'
			}
		},
		// Check that all JS files conform to our `.jshintrc` files
		jshint: {
			options: {
				jshintrc: true
			},
			target: {
				src: '<%= dirs.src.js %>/**/*.js'
			}
		},

		// Trigger relevant tasks when the files they watch has been changed
		// This includes adding/deleting files/folders as well
		watch: {
			// Will try to connect to a LiveReload script
			options: {
				livereload: lrPort
			},
			configs: {
				options: {
					reload: true
				},
				files: ['Gruntfile.js', 'package.json']
			}
		},
		// Setup a local server (using Node) with LiveReload enabled
		connect: {
			server: {
				options: {
					port: port,
					base: baseFolder,
					hostname: hostname,
					livereload: lrPort,
					open: true
				}
			}
		}
	});


	// Open local server and watch for file changes
	grunt.registerTask('serve', ['connect', 'watch']);

	// Default task(s).
	grunt.registerTask('default', ['serve']);
};

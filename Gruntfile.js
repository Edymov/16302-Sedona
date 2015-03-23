module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Lint Spaces in code
		lintspaces: {
			all: {
				src: [
					'src/*.html'
				],
				options: {
					newline: true,
					newlineMaximum: 2,
					trailingspaces: true,
					indentationGuess: true,
					editorconfig: '.editorconfig',
					ignores: [
						'html-comments',
						'js-comments'
					],
					showTypes: true,
					showCodes: true
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'dev/css/style.css': 'dev/scss/style.scss'
				}
			}
		},

		connect: {
			server: {
				options: {
					base: "dev/",
					port: 9004,
					open: true,
					hostname: 'localhost'
				}
			}
		},

		watch: {
			css: {
				files: 'dev/sass/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true
				},
			}
		}

	});


	grunt.loadNpmTasks('grunt-lintspaces');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('lint', ['lintspaces']);
	grunt.registerTask('default', ["sass", "connect", "watch"]);
};

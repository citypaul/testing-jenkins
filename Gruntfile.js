module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        jshint: {
            options: {jshintrc: true},
            all: ['Gruntfile.js', 'test/**/*.js', 'src/js/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('hint', ['jshint']);
};


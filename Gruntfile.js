module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            options: {jshintrc: true},
            all: ['Gruntfile.js', 'test/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('hint', ['jshint']);
};


'use strict';
 
module.exports = function (grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: [ './jquery-1.9.1.min.js',
                        'jquery.slides.min.js', 
                        'initSlide.js'],
                dest: './js/main.js',
            }
        },
        uglify: {
          build: {
            files: [{
                expand: true,
                src: './js/main.js',
                dest: './js/min/main.min.js',
            }]
          }
        }
    });
 
    // Where we tell Grunt we plan to use some plug-ins.
    grunt.loadNpmTasks('grunt-contrib-concat');
 
    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat']);

    grunt.loadNpmTasks('grunt-contrib-unglify');
 
    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['unglify']);

};
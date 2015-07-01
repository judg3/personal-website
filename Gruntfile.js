module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        concat: {
            javascript: {
                src: ['node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/jquery.easing/dist/jquery.easing.1.3.umd.min.js'],
                dest: 'src/dist/built.js',
            },
            css: {
                src: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
                dest: 'src/dist/built.css',
            }
        }
    });
    grunt.loadNpmTasks('grunt-serve');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['jshint']);

};
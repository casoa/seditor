"use strict";

module.exports = function (grunt) {
  const pkg = grunt.file.readJSON('package.json');
  const releasedir = "dist/";
  const banner = '/*!\n * seditor version: <%= pkg.version %>\n * build: <%= new Date() %>\n */\n\n';

  grunt.initConfig({
    pkg: pkg,
    concat: {
      js: {
        options: {
          banner: banner + '(function($){\n\n',
          footer: '\n\n})(jQuery)'
        },
        src: [
          '_src/editor.js',
          '_src/core/browser.js',
          '_src/core/utils.js',
          '_src/core/EventBase.js',
          '_src/core/dtd.js',
          '_src/core/domUtils.js',
          '_src/core/Range.js',
          '_src/core/Selection.js',
          '_src/core/Editor.js',
          '_src/core/filterword.js',
          '_src/core/node.js',
          '_src/core/htmlparser.js',
          '_src/core/filternode.js',
          '_src/plugins/inserthtml.js',
          '_src/plugins/image.js',
          '_src/plugins/justify.js',
          '_src/plugins/font.js',
          '_src/plugins/link.js',
          '_src/plugins/print.js',
          '_src/plugins/paragraph.js',
          '_src/plugins/horizontal.js',
          '_src/plugins/cleardoc.js',
          '_src/plugins/undo.js',
          '_src/plugins/paste.js',
          '_src/plugins/list.js',
          '_src/plugins/source.js',
          '_src/plugins/enterkey.js',
          '_src/plugins/preview.js',
          '_src/plugins/basestyle.js',
          '_src/plugins/video.js',
          '_src/plugins/selectall.js',
          '_src/plugins/removeformat.js',
          '_src/plugins/keystrokes.js',
          '_src/plugins/autosave.js',
          '_src/plugins/autoupload.js',
          '_src/plugins/formula.js',
          '_src/plugins/xssFilter.js',
          '_src/ui/widget.js',
          '_src/ui/button.js',
          '_src/ui/toolbar.js',
          '_src/ui/menu.js',
          '_src/ui/dropmenu.js',
          '_src/ui/splitbutton.js',
          '_src/ui/colorsplitbutton.js',
          '_src/ui/popup.js',
          '_src/ui/scale.js',
          '_src/ui/colorpicker.js',
          '_src/ui/combobox.js',
          '_src/ui/buttoncombobox.js',
          '_src/ui/modal.js',
          '_src/ui/tooltip.js',
          '_src/ui/tab.js',
          '_src/ui/separator.js',
          '_src/ui/scale.js',
          '_src/adapter/adapter.js',
          '_src/adapter/button.js',
          '_src/adapter/fullscreen.js',
          '_src/adapter/dialog.js',
          '_src/adapter/popup.js',
          '_src/adapter/imagescale.js',
          '_src/adapter/autofloat.js',
          '_src/adapter/source.js',
          '_src/adapter/combobox.js'
        ],
        dest: releasedir + '<%= pkg.name %>.js'
      },
      css: {
        src: [
          'themes/default/_css/editor.css',
          'themes/default/_css/button.css',
          'themes/default/_css/buttonicon.css',
          'themes/default/_css/splitbutton.css',
          'themes/default/_css/combobox.css',
          'themes/default/_css/comboboxmenu.css',
          'themes/default/_css/dialog.css',
          'themes/default/_css/dialogsize.css',
          'themes/default/_css/popup.css',
          'themes/default/_css/tab.css',
          'themes/default/_css/tooltip.css',
          'themes/default/_css/colorpicker.css',
          'themes/default/_css/separator.css'
        ],
        dest: releasedir + 'themes/default/css/umeditor.css'
      }
    },
    cssmin: {
      options: {
        banner: banner
      },
      files: {
        expand: true,
        cwd: releasedir + 'themes/default/css/',
        src: ['*.css', '!*.min.css'],
        dest: releasedir + 'themes/default/css/',
        ext: '.min.css'
      }
    },
    closurecompiler: {
      dist: {
        src: releasedir + '<%= pkg.name %>.js',
        dest: releasedir + '<%= pkg.name %>.min.js'
      }
    },
    copy: {
      base: {
        files: [
          {
            src: [
              'themes/default/images/**',
              'dialogs/**',
              'third-party/**',
              'lang/**'
            ],
            dest: releasedir
          }
        ]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-closurecompiler');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', 'seditor build', function () {
    grunt.task.run([
      'concat',
      'cssmin',
      'closurecompiler',
      'copy:base'
    ]);
  });
};

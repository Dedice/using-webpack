# Webpack + ECMAScript6

How to use webpack with ECMAScript6 (ES6) for client-side fronend applications.


# Webpack is a flexible module bundler

If you are new to webpack, you may want to start by reading [this page](http://webpack.github.io/docs/).

In real-world webpack projects, we’ll separate the source files from the 
bundled files by organizing them in folders. For example, we’ll put the 
source files in "source" and bundled files in "build".


# Web Technology For Developers

Documentation: [English](https://developer.mozilla.org/en-US/docs/Web) || [Russian](https://developer.mozilla.org/ru/docs/Web)


# JavaScript (ECMAScript6) / Statements & Declarations

* The [export](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Statements/export) 
statement is used to export functions, objects or primitives from a given file (or module).
* The [import](https://developer.mozilla.org/en-us/docs/Web/JavaScript/Reference/Statements/import) 
statement is used to import functions, objects or primitives that have been exported from an external module, another script, etc.


# Brief Overview of ES6 Module Syntax

There are a few other variations of module syntax, the full list of all supported statements 
you can check [here](https://github.com/ModuleLoader/es6-module-loader/wiki/Brief-Overview-of-ES6-Module-syntax#user-content-all-supported-syntax).

Note that any valid declaration can be exported. In ES6, this includes class, const and let.


# How to use git for your next commit

$ git add .   # add to index only files created/modified and not those deleted
$ git add -u  # add to index only files deleted/modified and not those created
$ git add -A  # do both operation at once, add to index all files

$ git commit -m "Commit message..."
$ git push -u origin master
"use strict";
var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");
var libpath = require("path");
var simplegit = require("simple-git");

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require("../package.json");
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      "Welcome to the world-class " + chalk.red("Lxjs") + " generator!"
    ));

    var prompts = [{
      type    : "input",
      name    : "projectname",
      message : "Your project name",
      default : libpath.basename(this.env.cwd)
    }, {
      type    : "input",
      name    : "githubuser",
      message : "Input github username",
      default : "lexich"
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.copy(
        this.templatePath("_package.json"),
        this.destinationPath("package.json")
      );
      this.copy(
        this.templatePath("_bower.json"),
        this.destinationPath("bower.json")
      );
    },

    projectfiles: function () {
      this.copy(
        this.templatePath("_gitignore"),
        this.destinationPath(".gitignore")
      );
      this.copy(
        this.templatePath("_travis.yml"),
        this.destinationPath(".travis.yml")
      );
      this.copy(
        this.templatePath("appveyor.yml"),
        this.destinationPath("appveyor.yml")
      );
      this.fs.copy(
        this.templatePath("editorconfig"),
        this.destinationPath(".editorconfig")
      );
      this.fs.copy(
        this.templatePath("eslintrc"),
        this.destinationPath(".eslintrc")
      );
      this.fs.copy(
        this.templatePath("gulpfile.js"),
        this.destinationPath("gulpfile.js")
      );
      this.fs.copy(
        this.templatePath("jscsrc"),
        this.destinationPath(".jscsrc")
      );
      this.fs.copy(
        this.templatePath("index.js"),
        this.destinationPath("index.js")
      );
      this.copy(
        this.templatePath("README.md"),
        this.destinationPath("README.md")
      );
      this.fs.copy(
        this.templatePath("test.js"),
        this.destinationPath("test.js")
      );
      this.directory(
       this.templatePath("lib"), 
       this.destinationPath("lib") 
      );
    }
  },

  install: function () {
    simplegit().init();
    this.installDependencies();
  }
});

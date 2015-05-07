"use strict";
var yeoman = require("yeoman-generator");
var chalk = require("chalk");
var yosay = require("yosay");
var libpath = require("path");

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
      this.fs.copy(
        this.templatePath("editorconfig"),
        this.destinationPath(".editorconfig")
      );
      this.fs.copy(
        this.templatePath("eslintrc"),
        this.destinationPath(".eslintrc")
      );
      this.fs.copy(
        this.templatePath("jscsrc"),
        this.destinationPath(".jscsrc")
      );
      this.fs.copy(
        this.templatePath("index.js"),
        this.destinationPath("index.js")
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});

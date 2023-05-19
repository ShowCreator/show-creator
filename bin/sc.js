#!/usr/bin/env node
const program = require('commander');
const packageInfo = require('../package.json');
const build = require('./build.js');


(async () => {
  console.log(packageInfo.name, packageInfo.version);
  program.version(packageInfo.version).usage('<command> [options]');
  // finish check before run command

  program
    .command('build')
    .description('build project')
    .action(build);
    
  program.parse(process.argv)
})();

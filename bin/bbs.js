#!/usr/bin/env node
const program = require('commander');
const packageInfo = require('../package.json');
const build = require('./build.js');
const start = require('./start.js')


// (async () => {
  console.log(packageInfo.name, packageInfo.version);
  program.version(packageInfo.version).usage('<command> [options]');
  // finish check before run command

  program
    .command('build')
    .description('build project')
    .allowUnknownOption()
    .option('--config <config>', 'use custom config')
    .action(build);

  program
    .command('start')
    .description('start project')
    .allowUnknownOption()
    .option('--config <config>', 'use custom config')
    .action(start);
    
  program.parse(process.argv)
// })();

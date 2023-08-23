#!/usr/bin/env node
const parse = require('yargs-parser');
const build = require('../lib/command/build');

module.exports = async () => {
  const parseArg = parse(process.argv.slice(2), {
    configuration: { 'strip-dashed': true },
  })
  // ignore _ in parseArg
  delete parseArg._;
  try {
    console.log('sam-ttttest');
    await build({
      args: { ...parseArg },
    });
  } catch (err) {
    log.error(err.message);
    console.error(err);
    process.exit(1);
  }
};

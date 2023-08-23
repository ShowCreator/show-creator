#!/usr/bin/env node
const parse = require('yargs-parser');
// const start = require('../lib/command/start');

module.exports = async () => {
  const parseArg = parse(process.argv.slice(2), {
    configuration: { 'strip-dashed': true },
  })
  // ignore _ in parseArg
  delete parseArg._;
  try {
    require('../lib/command/start')
    // await start({
    //   args: { ...parseArg },
    // });
    // console.log('ttt')
  } catch (err) {
    // log.error(err.message);
    console.error(err);
    process.exit(1);
  }
};

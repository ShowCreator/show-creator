#!/usr/bin/env node
const build = require('../lib/index.js');

module.exports = async () => {

  try {
    console.log('sam-ttttest');
    await build({
      args: {  },
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

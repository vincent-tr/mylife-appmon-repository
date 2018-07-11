'use strict';

const { service } = require('mylife-appmon');
const config = require('../conf/config');

const debug = require('debug')('mylife:appmon:repository');

let repository;

function start() {
  debug('Repository setup');
  repository = service.setupRepository(config);
}

function stop() {
  try {
    repository.close();
    repository = null;
  } catch(err) {
    console.error('Error closing server', err); // eslint-disable-line no-console
  }

  process.exit();
}

process.on('SIGINT', stop);
process.on('SIGTERM', stop);

start();

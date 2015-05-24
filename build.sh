#!/usr/bin/env bash
rm -rf node_modules && npm cache clean && npm install

node_modules/jasmine-node/bin/jasmine-node test/
./node_modules/grunt-cli/bin/grunt hint
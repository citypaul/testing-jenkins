#!/usr/bin/env bash
rm -rf node_modules && npm cache clean && npm install

node_modules/jasmine-node/bin/jasmine-node --junitreport test-results.xml test/
./node_modules/grunt-cli/bin/grunt hint
#!/usr/bin/env bash
rm -rf node_modules
npm install
./node_modules/karma/bin/karma start
./node_modules/grunt-cli/bin/grunt hint
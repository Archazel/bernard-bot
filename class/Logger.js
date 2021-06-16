'use strict';

const {red, black, green, blueBright} = require('chalk');
const moment = require('moment');

/**
 * Log
 */
class Logger {
    /**
     * Log
     * @static
     * @param {...any} args
     * @return{*} 
     */
    static log(...args) {
        return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] : ${
          blueBright('log')} ${args}`);
      };
      /**
        * Log type error
        * @static
        * @param  {...any} args
        * @return {*}
        */
      static error(...args) {
        return console.error(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${
          red('error')} ${args}`);
      };
      /**
        * Log type error
        * @static
        * @param  {...any} args
        * @return {*}
        */
      static warn(...args) {
        return console.warn(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${
          black.bgYellow('warn')} ${args}`);
      };
      /**
        * Log type error
        * @static
        * @param  {...any} args
        * @return {*}
        */
      static debug(...args) {
        return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]: ${
          green('debug')} ${args}`);
      };
    };
    
    module.exports = Logger;
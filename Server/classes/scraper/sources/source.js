const puppeteer = require('puppeteer');
const looksSame = require("looks-same");


class Source {
  /**
   * @override
   */
  poster;
  baseUrl = null;
  constructor(poster) {
    this.puppeteer = puppeteer;
  }
  /**
   * @override
   * 
   */
  
  looksSame(result_poster) {
    return looksSame(result_poster, this.poster);
  }
  
}

module.exports = Source;

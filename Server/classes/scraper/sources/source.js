const puppeteer = require('puppeteer');

class Source {
  /**
   * @override
   */
  baseUrl = null;
  constructor(_baseUrl) {

    console.log("super running");
  }
  /**
   * @override
   * 
   */
  getList(query) {
    puppeteer.launch().then(async browser => {
      const page = await browser.newPage();
      await page.goto(this.baseUrl);
      page.screenshot({ path: "captured.png" });
      // other actions...

      await browser.close();
    });
  }
}

module.exports = { Source };

const Source = require("./source");
console.log(Source);
//search url example https://vidcloud9.com/search.html?keyword=the%20craft
//get document.querySelector(".play-video iframe").src.split("?")[1].split("&")[0].split("=")[1];
class Vidcloud extends Source {
    baseUrl = "https://vidcloud9.com/";
    searchPath = "search.html?keyword=";
    playerPath = "https://vidcloud9.com/streaming.php";

    constructor() {
        super();
    }

    async getCandidates({ search }) {
        console.log(this.baseUrl + this.searchPath + search);
        // This is where we'll put the code to get around the tests.

        const browser = await this.puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(this.baseUrl + this.searchPath + search);

        const textContent = await page.evaluate(() => document.querySelector('p').textContent);
        const innerText = await page.evaluate(() => document.querySelector('p').innerText);

        return await page.evaluate(() => {
            return (
                Array.from(document.querySelectorAll(".listing.items .video-block")).map((res) => {
                    return {
                        link: res.querySelector("a").href,
                        poster: res.querySelector("img").src
                    }
                })
            );
        });

        browser.close();

    }
}

module.exports = Vidcloud;
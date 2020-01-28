const Source = require("./source");
//search url example https://vidcloud9.com/search.html?keyword=the%20craft
//get document.querySelector(".play-video iframe").src.split("?")[1].split("&")[0].split("=")[1];
class Vidcloud extends Source {
    baseUrl = "https://vidcloud9.com/";
    searchPath = "search.html?keyword=";
    playerPath = "https://vidcloud9.com/streaming.php";

    constructor() {
        super();
    }

    getCandidates = ({ search }) => {

    return async () => {
    const browser = await this.puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(this.baseUrl+this.searchPath+search);

    await page.waitForSelector('.price');

    const textContent = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".listing.items .video-block")).map((res) => {
            return {
                link: res.querySelector("a").href,
                poster: res.querySelector("img").src
            }
        });
            
    });

    return await textContext;

    await browser.close();

        };
    }
}

module.exports = Vidcloud;
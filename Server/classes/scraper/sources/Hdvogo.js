const Source = require("./Source");
//search url example https://vidcloud9.com/search.html?keyword=the%20craft
//get document.querySelector(".play-video iframe").src.split("?")[1].split("&")[0].split("=")[1];
class Vidcloud extends Source {
  baseUrl = "https://hdvogo.com/";
  searchPath = "?s=";
  playerPath = "https://vidcloud9.com/streaming.php";

  constructor() {
    super();
    this.searchUrl = this.baseUrl + this.searchPath;
  }

  getResults = async ({ search }) => {
    return new Promise(resolve => {
      console.log(this.searchUrl + encodeURIComponent(search));
      this.nightmare
        .goto(this.searchUrl + encodeURIComponent(search))
        .wait("bw_footer")
        .evaluate(() => {
          selected = document.querySelector(".bw_postlist .bw_thumb_title");
          return {
            link: selected.querySelector("a").href,
            poster: selected.querySelector("img").src,
            release_date: selected.querySelector("a").title,
            feature_length: null
          };
        })
        .end()
        .then(resolve);
    });
  };
}

module.exports = Vidcloud;

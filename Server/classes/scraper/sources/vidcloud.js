const Source = require("./Source");
//search url example https://vidcloud9.com/search.html?keyword=the%20craft
//get document.querySelector(".play-video iframe").src.split("?")[1].split("&")[0].split("=")[1];
class Vidcloud extends Source {
  baseUrl = "https://vidcloud9.com/";
  searchPath = "search.html?keyword=";
  playerPath = "https://vidcloud9.com/streaming.php?id=";

  constructor() {
    super();
    this.searchUrl = this.baseUrl + this.searchPath;
  }

  getResults = async ({ search }) => {
    return new Promise(resolve => {
      this.nightmare
        .goto(this.searchUrl + encodeURIComponent(search))
        .wait(".listing.items .video-block")
        .evaluate(() => {
          const res = document.querySelector(".listing.items .video-block");
          const date_length = res
            .querySelector("div.meta span.date")
            .innerText.split(" ");
          return {
            link: res.querySelector("a").href,
            poster: res.querySelector("img").src,
            release_date: date_length[0],
            feature_length: date_length[1]
          };
        })
        .then(resolve);
    });
  };
  getMovie = async url => {
    return new Promise(resolve => {
      this.nightmare
        .goto(url)
        .wait(".play-video")
        .evaluate(() => {
          const player_iframe = document.querySelector(".play-video iframe")
            .src;
          console.log(player_iframe);
          return player_iframe;
        })
        .then(result => {
          this.getMovieFile(result).then(resolve);
        });
    });
  };
  getMovieFile = async jwplayer_link => {
    return new Promise(resolve => {
      this.nightmare
        .goto(jwplayer_link)
        .wait(".jw-media.jw-reset")
        .evaluate(() => {})
        .end()
        .then(resolve);
    });
  };
}

module.exports = Vidcloud;

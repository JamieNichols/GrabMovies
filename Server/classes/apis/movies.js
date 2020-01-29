const Sources = require("../scraper/sources");
const Movies = async query => {
  return new Promise(resolve => {
    let allResults = [];
    Sources.map(Source => {
      const source = new Source();
      source.getResults(query).then(res => {
        source.getMovie(res.link).then(movie_url => {
          res.movie_url = movie_url;
          allResults.push(res);
          if (allResults.length === Sources.length) resolve(allResults);
        });
      });
    });
  });
};

module.exports = Movies;

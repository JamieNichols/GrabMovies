const Sources = require("../scraper/sources");
const Movies = query => {
  Sources.map((Source, index) => {
    console.log("index", index, Source);
    const source = new Source();
    source.getCandidates(query).then(results => {
      console.log(results);
    });
  });

};

module.exports = Movies;

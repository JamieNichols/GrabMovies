const Sources = require("../scraper/sources");
const Movies = async (res,query) => {
  return Sources.map((Source) => {
    const source = new Source();
    const results = source.getCandidates(res,query);
    return results;
  });

}; 

module.exports = Movies;

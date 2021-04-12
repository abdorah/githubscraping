var axios = require("axios");
var fs = require("fs");

var results = [];
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

main();
async function main() {
  for (let i = 0; i < letters.length; i++) {
    try {
      let { data } = await axios.get("https://api.github.com/search/repositories?sort=stars&per_page=100&q=" + letters[i]);
      results.push({ "letter": letters[i], "data": await data });
    } catch {
      console.log("fiald for letters" + letters[i]);
    }
  }
  console.log(results.length);
  fs.writeFileSync("3.json", JSON.stringify(results));
}

prepareData();
function prepareData() {
  fs.writeFileSync("dataA_Z.json", JSON.stringify(results));
  "full_name"
  "owner:type"
  "git_url"
  "created_at"
  "size"
  "stargazers_count"
  "language"
  "watchers_count"
  "forks_count"
  "default_branch"
}
// For the search only version
import algoliasearch from "algoliasearch";

const client = algoliasearch("JVWK8JP9DV", "7ac187bbd07b9229fab78caa16aa1218");
const index = client.initIndex("ingredients");

export default index;

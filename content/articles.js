import findStreaming from "./articles/find-where-movie-streaming";
import netflixVsPrime from "./articles/netflix-vs-prime-vs-hotstar-india";
import streamRentBuy from "./articles/stream-rent-or-buy";
import ratingsExplained from "./articles/movie-ratings-explained";
import bestThrillers from "./articles/best-thrillers-netflix-india";
import hiddenGems from "./articles/hidden-gems-prime-video";

// Newest first. Add new articles here to publish them.
const articles = [
  hiddenGems,
  bestThrillers,
  streamRentBuy,
  netflixVsPrime,
  ratingsExplained,
  findStreaming,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export default articles;

export function getAllArticles() {
  return articles;
}

export function getArticle(slug) {
  return articles.find((a) => a.slug === slug) || null;
}

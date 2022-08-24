import Article from "./Article";
import allArticles from "../data/data";
function Articles() {
  return (
    <section className="article-section flex">
      {allArticles.map((article) => (
        <Article key={article.publishedAt} {...article} />
      ))}
    </section>
  );
}

export default Articles;

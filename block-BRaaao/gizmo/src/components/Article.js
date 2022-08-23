function Article(props) {
  return (
    <article className="flex-30">
      <figure>
        <img src={props.urlToImage} alt={props.title} />
        <figcaption>
          <h3>{props.title} </h3>
        </figcaption>
      </figure>
      <p>{props.description}</p>
      <a href={props.url}>Visit Website </a>
    </article>
  );
}

export default Article;

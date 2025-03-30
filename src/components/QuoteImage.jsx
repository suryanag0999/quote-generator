const QuoteImage = ({ imageUrl, quote, author }) => {
    return (
      <div>
        <img src={imageUrl} alt="Random" />
        <blockquote>
          <p>{quote}</p>
          <footer>- {author}</footer>
        </blockquote>
      </div>
    );
  };
  
  export default QuoteImage;
  
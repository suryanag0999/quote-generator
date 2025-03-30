import { useState, useEffect } from "react";
import QuoteImage from "./components/QuoteImage";
import Buttons from "./components/functions";
import { fetchQuote } from "./utils/fetchquote.js";
import { fetchImage } from "./utils/fetchImage.js";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchNewQuoteAndImage = async () => {
    const newQuote = await fetchQuote();
    setQuote(newQuote.quote);
    setAuthor(newQuote.author);
    setImageUrl(fetchImage());
  };

  useEffect(() => {
    fetchNewQuoteAndImage();
  }, []);

  return (
    <div>
      <QuoteImage imageUrl={imageUrl} quote={quote} author={author} />
      <Buttons
        fetchNewQuoteAndImage={fetchNewQuoteAndImage}
        quote={quote}
        author={author}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default App;

const Buttons = ({ fetchNewQuoteAndImage, quote, author, imageUrl }) => {
    const copyToClipboard = () => {
      navigator.clipboard.writeText(`${quote} - ${author}`);
    };
  
    const downloadImage = async () => {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "random_image.jpg";
      link.click();
    };
  
    const tweetQuote = () => {
      const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        quote + " - " + author
      )}&url=${encodeURIComponent(imageUrl)}`;
      window.open(tweetUrl, "_blank");
    };
  
    return (
      <div>
        <button onClick={fetchNewQuoteAndImage}>New Quote</button>
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
        <button onClick={downloadImage}>Export Image</button>
        <button onClick={tweetQuote}>Tweet</button>
      </div>
    );
  };
  
  export default Buttons;
  

  
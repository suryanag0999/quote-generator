export const fetchQuote = async () => {
    try {
      const response = await fetch(
        "https://api.freeapi.app/api/v1/public/quotes/quote/random"
      );
      const data = await response.json();
  
      if (data && data.data) {
        return {
          quote: data.data.content || "No quote available",
          author: data.data.author || "Unknown",
        };
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
    return { quote: "No quote available", author: "Unknown" };
  };
  
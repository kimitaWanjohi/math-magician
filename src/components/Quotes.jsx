import { useEffect, useState } from "react";
import QUOTE_API from "../const";

const getQuote = async () => {
  const response = await fetch(QUOTE_API);
  const data = await response.json();
  return data;
};

export default function Quotes() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuote().then((data) => {
      setQuote(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-6 border border-gray-500 flex items-center justify-center w-full">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">{quote?.content}</h1>
          <h2 className="text-xl font-light italic">{` ~ ${quote?.author}`}</h2>
        </div>
      )}
    </div>
  );
}

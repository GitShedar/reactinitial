import "./App.css";
import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Hotels from "./components/Hotels";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    fetch("./api/hotels")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setData(null))
      .finally(() => setIsLoading(true));
  }, []);

  console.log(data);

  return (
    <div className="App">
      <h1>Hotels</h1>

      {!isLoading ? (
        <LoadingMask />
      ) : (
        data.map((item) => <Hotels key={item.id} proptohotels={item} />)
      )}
    </div>
  );
};

export default App;

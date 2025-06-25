import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((res1) => setdata(res1.quotes.slice(0,10)));
  }, []);

  console.log("Data"+data);

  return (
    <div>
      <ul>
        {data?data.map((res) => (
          <li style={{listStyle:"none"}} key={res.id}>{res.id}      {res.quote}</li>
        )):"Loading "}
      </ul>
    </div>
  );
}

export default Fetch;

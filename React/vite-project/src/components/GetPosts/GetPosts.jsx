import { useEffect } from "react";
import { useState } from "react";

export default function GetPosts() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  return (
    <>
      {!data ? (
        <> Loading... </>
      ) : (
        <>
          <h2>
            Objeto Title:
            {data.title}
            Id: {data.id}
          </h2>
          <p>Body: {data.body}</p>
        </>
      )}
    </>
  );
}

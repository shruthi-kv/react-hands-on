import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data1 = await fetch("https://api.github.com/users");
      let res = await data1.json();
      setData(res);
      setLoading(false);
    };

    fetchData();
  }, []);
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>The users are as follows</h1>
      {data &&
        data.map((item, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}>
            <img
              src={item.avatar_url}
              alt={item.login}
              style={{ height: "200px", width: "200px" , borderRadius:"50%"}}
            />
            <h1>{item.login}</h1>
            <hr />
          </div>
        ))}
    </>
  );
};

export default Users;

import React, { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);
  let error =
    name.length > 0 && name.length < 5 ? "Min 5 characters" : undefined;
  console.log(error, "error");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, number);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" onChange={(e) => setName(e.target.value)} 
            area-invalid ={!!error}
            area-describedBy={error ? 'name-error' : undefined}
        />
      </label>

      <label>
        Phone
        <input type="number" onChange={(e) => setNumber(e.target.value)} />
      </label>
      {/* { name.length>0 && name.length < 4 &&
                <p>Name should be more than 5 characters</p>
            }
            */}
            {error && <p id='name-error' role='alert'>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Controlled;

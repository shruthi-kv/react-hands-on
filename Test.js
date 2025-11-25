const express = require(express);

const app = express();

const PORT = 3000;

app.get("/emp", (req, res) => {
  const data = [
    {
      id: "1",
      dob: "01/01/2000",
    },
    {
      id: "2",
      dob: "01/01/2004",
    },
       {
      id: "3",
      dob: "01/01/2005",
    },
  ];

  const empInp = data; //req.body;
  const years = []; // [2000,2004,2005]
  empInp.map((item)=> years.push(item.dob));
  
   let ages = [];
  for(let i=0;i<years.length;i++){
    let a = new Date.now() - new Date(dob);
    ages.push(a)
  }
  let count = 0;
  for(let i=0;i<ages.length;i++){
    count = count+ ages[i];
  }

  res.send(count)

});

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

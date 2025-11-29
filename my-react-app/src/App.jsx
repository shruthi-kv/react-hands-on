import StarRating from './Practice/Star';
import { useState } from "react";
import Rating from './Practice/Rating'

const App = () => {
  
 const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Star Rating (Controlled)</h2>
      <StarRating value={rating} onChange={setRating} />
      <p>Selected rating: {rating}</p>
      <hr/>
      <Rating/>
    </div>
  );
};

export default App;





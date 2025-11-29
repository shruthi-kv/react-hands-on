import StarRating from './Practice/Star';
import { useState } from "react";
import Rating from './Practice/Rating'
import Count from './Practice/count';
import StopWatch from './Practice/StopWatch';
const App = () => {
  
 const [rating, setRating] = useState(0);

  return (
    <div>
      <h2>Star Rating (Controlled)</h2>
      <StarRating value={rating} onChange={setRating} />
      <p>Selected rating: {rating}</p>
      <hr/>
      <Rating/>
      <hr/>
      <Count/>
      <hr/>
      <StopWatch/>
    </div>
  );
};

export default App;





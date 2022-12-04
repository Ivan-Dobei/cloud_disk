import {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";

const App = () => {
   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   }

   const decrement = () => {
      setCount(count - 1);
   }
   return (
      <div className={'app'}>
      </div>
   );
};

export default App;

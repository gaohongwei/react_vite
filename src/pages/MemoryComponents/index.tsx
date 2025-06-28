import React,{useState} from "react";

export function Parent() {
const [seeds] = useState([10, 20]);
const [counter, setCounter] = useState(0);

return (
<>
  <ul>
    {seeds.map((seed, i) => (
    <Child key={i} seedObj={{ seed }} />
    ))}
  </ul>
  <button type="button" onClick={()=> setCounter(counter + 1)}>
    {counter}
  </button>
</>
);
}
// Make any changes you feel would make this code cleaner/more concise,
// more maintainable, or more performant without altering the "calculation"
// or output of the ChildComponent's render function.
export function Child({ seedObj }) {
const arr = [...Array(seedObj.seed)].map((val, i) => i + 1);
//"CALCULATION" START -- do not change
arr.forEach((item) => {
console.log(item);
});
//"CALCULATION" END
return <li>Seed: {seedObj.seed}</li>;
}
/* References:
API
- Marvel Developer API documendation: https://developer.marvel.com/docs
- Authentication: AUTH="ts=thesoer&apikey=d71cd59b0758975f3aed42f4df82b2e0&hash=9c24c1bb37f36e5f3ebd620f7508c95b"
- example API call url
    e.g.: https://gateway.marvel.com:443/v1/public/characters?&<AUTH>
    e.g.: https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=spider&<AUTH>

UI components lib
- Material-UI: https://mui.com/getting-started/usage/

**Tasks**:
1. when page loads, render a list of marvel heroes.
  - Each hero needs to have name, description, and thumbnail picture
  - You can use any UI components lib as you like
2. Implement a search bar: trigger a query with typed input
  - Dynamic Search: type to trigger query & render      
*/

// import "./styles.css";
import "./style.css";
import DisplayItem from "./DisplayItem";
import { useApiData } from "./useApiData";

export default function DisplayItems() {
  const { error, items, reNew } = useApiData();

  const onChange = (event) => {
    console.log(event.target.value);
    reNew(event.target.value);
  };

  if (error) return <div>Error</div>;
  if (items?.length < 1) return <div>Not found</div>;
  return (
    <>
      <h1>Marvel</h1>
      <div className="search">
        <input
          name="search"
          type="text"
          placeholder="Type and search"
          onChange={onChange}
        />
      </div>
      <div>
        {items.map((item, index) => {
          return <DisplayItem key={index} item={item} />;
        })}
      </div>
    </>
  );
}

//https://codesandbox.io/s/marvel-hero-app-forked-5uf77x?file=/src/DisplayItems/style.css
//https://codesandbox.io/s/marvel-hero-app-forked-5uf77x?file=/src/DisplayItems/index.jsx

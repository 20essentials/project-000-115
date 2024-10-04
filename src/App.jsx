import './Styles/GlobalStyles.css';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import GridCols from './Components/GridCols';
const LLAVE = 'api_key=lnTI7g9ksxVzrdjkGvsqmv9kyoxK7AAr';

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("FRACTAL")

  useEffect(() => {
    const API = `https://api.giphy.com/v1/gifs/search?${LLAVE}&q=${query}&limit=100&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

    fetch(API)
      .then(resp => (resp.ok ? resp.json() : Promise.reject(resp)))
      .then(object => {
        const { data } = object;
        const arrayOfLinks = data.map(el => el.images.fixed_width.url);
        setData(arrayOfLinks);
      })
      .catch(err => {
        console.warn(err);
        confirm("You cannot do more requests")
      });
  }, [query]);

  const newFetch  = (ev) => {
    ev.preventDefault()
    const newQuery = ev.target.firstElementChild.value ?? 'Attack on Titan';
    if (newQuery) {
      setQuery(newQuery)
    }
    else {
      setQuery('Tron Legacy')
    }
  }

  return (
    <>
      <Header newFetch={newFetch} />
      <GridCols data={data} />
    </>
  );
};

export default App;

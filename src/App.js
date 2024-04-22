import React, { useState }  from 'react';
import './App.css';
import Counter from './Counter.js'; 
import Search from './Search.js';
import GenreList from './GenreList.js';
import Name from './Names.json';



const App = () => {
  
  const [searchResults, setSearchResults] = useState(Name);
  const [selectedGenre, setSelectedGenre] = useState('');
  const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy'];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  }
  const fn_Search = (query) => {
    if (!query) {
      setSearchResults(Name);
    }
    else {
      const results = Name.filter(Name => Name.toLowerCase().includes(query)).map(Name => { return <div>{Name}</div> })
      setSearchResults(results);
    }
  };
  return (
    <>
      <Counter defaultValue={5} />

      <Search initialQuery="Siri" onSearch={fn_Search} />
      <ul>
        {searchResults.map(name => { return <div >{name}</div> })}
      </ul>
      <GenreList
        genres={genres}
        selectedGenre={selectedGenre}
        handleGenreSelect={handleGenreSelect}
      />
    </>
    
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Filtter from './Filter';
import Movie from './Movie';

import { AnimatePresence, motion } from 'framer-motion';

// https://api.themoviedb.org/3/movie/popular?api_key=d1eb186c558e65b045af69086018917f&language=en-US&page=1

// https://api.themoviedb.org/3/genre/movie/list?api_key=d1eb186c558e65b045af69086018917f&language=en-US
// -> 0: All , 35: Comedy, 28: Action

// d1eb186c558e65b045af69086018917f

// https://api.themoviedb.org/3/movie/550?api_key=d1eb186c558e65b045af69086018917f

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWViMTg2YzU1OGU2NWIwNDVhZjY5MDg2MDE4OTE3ZiIsInN1YiI6IjYyMTEwOWY1MGU0ZmM4MDA0NDA1NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tx4qugs_vAsLMsg415aHBA2XAJX4wllwmxPmnxFdmxI

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenera, setActiveGenera] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=d1eb186c558e65b045af69086018917f&language=en-US&page=1'
    );
    const movies = await data.json();

    // console.log(data);
    // console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filtter
        popular={popular}
        setFiltered={setFiltered}
        activeGenera={activeGenera}
        setActiveGenera={setActiveGenera}
      />
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="popular-movies"
      >
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;

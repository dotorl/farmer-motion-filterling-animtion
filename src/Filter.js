import { useEffect } from 'react';

function Filtter({ setActiveGenera, activeGenera, setFiltered, popular }) {
  useEffect(() => {
    if (activeGenera === 0) {
      setFiltered(popular);
      return;
    }

    // filter popular genre_ids include activeGenera
    // const filtered = popular.filter((movie) => {
    //   return movie.genre_ids.includes(activeGenera);
    // });

    const filtered = popular.filter((movie) => movie.genre_ids.includes(activeGenera));
    setFiltered(filtered);
  }, [activeGenera, popular, setFiltered]);

  return (
    <div className="filter-container">
      <button className={activeGenera === 0 ? 'active' : ''} onClick={() => setActiveGenera(0)}>
        All
      </button>
      <button className={activeGenera === 35 ? 'active' : ''} onClick={() => setActiveGenera(35)}>
        Comedy
      </button>
      <button className={activeGenera === 28 ? 'active' : ''} onClick={() => setActiveGenera(28)}>
        Action
      </button>
    </div>
  );
}

export default Filtter;

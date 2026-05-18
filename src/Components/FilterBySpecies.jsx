
import { useState, useEffect } from "react";
import CardCharacter from "./CardCharacter";
import Pagination from "./Pagination";
import "./FilterBySpecies.css";

const FilterBySpecies = () => {
  const [characters, setCharacters] = useState([]);
  const [allSpeciesCharacters, setAllSpeciesCharacters] = useState([]); // todos los de la especie
  const [species, setSpecies] = useState("Human");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");


  useEffect(() => {
    if (query) return;

    setLoading(true);
    setError(null);

    fetch(`https://rickandmortyapi.com/api/character/?page=${page}&species=${species}`)
      .then((res) => {
        if (!res.ok) throw new Error("No existen más personajes.");
        return res.json();
      })
      .then((data) => {
        if (data.results) {
          const filtered = data.results.filter((c) => c.species === species);
          setCharacters(filtered);
        } else {
          setCharacters([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setCharacters([]);
        setLoading(false);
      });
  }, [species, page, query]);


  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    const fetchAllSpecies = async () => {
      try {
        const firstRes = await fetch(
          `https://rickandmortyapi.com/api/character/?species=${species}`
        );
        if (!firstRes.ok) throw new Error("No hay personajes de esta especie.");
        const firstData = await firstRes.json();
        const totalPages = firstData.info.pages;

        const requests = [];
        for (let i = 1; i <= totalPages; i++) {
          requests.push(
            fetch(`https://rickandmortyapi.com/api/character/?page=${i}&species=${species}`)
              .then((r) => r.json())
          );
        }

        const results = await Promise.all(requests);
        const all = results
          .flatMap((r) => r.results || [])
          .filter((c) => c.species === species); 

        setAllSpeciesCharacters(all);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAllSpecies();
  }, [query, species]); 

  const handleSearch = () => {
    if (!search.trim()) return;
    setQuery(search);
  };

  const handleClear = () => {
    setSearch("");
    setQuery("");
  };

  const handleSpeciesChange = (newSpecies) => {
    setSpecies(newSpecies);
    setPage(1);
    setSearch("");  
    setQuery("");
  };


  const filteredCharacters = query
    ? (() => {
        const exact = allSpeciesCharacters.find(
          (c) => c.name.toLowerCase() === query.toLowerCase()
        );
        return exact
          ? [exact]
          : allSpeciesCharacters.filter((c) =>
              c.name.toLowerCase().startsWith(query.toLowerCase())
            );
      })()
    : characters;

  return (
    <div className="filterSpecies">
      <h2 className="filterSpeciesbyTitle">Filtrar especies por:</h2>

      <div className="buttons">
        {["Human", "Alien", "Robot", "Mythological Creature", "Humanoid"].map((s) => (
          <button
            key={s}
            className={species === s ? "active-filter" : ""}
            onClick={() => handleSpeciesChange(s)}
          >
            {s}
          </button>
        ))}
      </div>

          <p id="text1">
        La búsqueda de personajes permite filtrar resultados de los personajes segun la  ESPECIE selecciona, mediante las letras
        iniciales o el nombre exacto del personaje que desees buscar dentro de la ESPECIE. Después de realizar la
        búsqueda, el campo debe ser limpiado, para continuar con la visualizacion de los
        personajes en la pagina antes de la busqueda.
      </p>
      <div className="search">
        <input
          type="text"
          placeholder={`Buscar en ${species}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Buscar</button>
        <button onClick={handleClear}>Limpiar</button>
      </div>

      {loading ? (
        <div className="filterSpeciesStatus">
          <p>Cargando...</p>
        </div>
      ) : error ? (
        <div className="filterSpecies__status filterSpecies__error">
          <p>{error}</p>
          <small>Refresque o pruebe otro filtro.</small>
        </div>
      ) : (
        <>
          <p className="cuenta">{filteredCharacters.length} personajes encontrados</p>

          <div className="speciess">
            {filteredCharacters.map((character) => (
              <CardCharacter
                key={character.id}
                name={character.name}
                image={character.image}
                species={character.species}
                status={character.status}
                gender={character.gender}
              />
            ))}
          </div>

          {!query && filteredCharacters.length > 0 && (
            <Pagination page={page} setPage={setPage} />
          )}
        </>
      )}
    </div>
  );
};

export default FilterBySpecies;
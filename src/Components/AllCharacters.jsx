import { useState, useEffect } from "react";
import CardCharacter from "./CardCharacter";
import Pagination from "./Pagination";
import SearchCharacter from "./SearchCharacter";
import "./AllCharacters.css";

const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(""); 
  const [query, setQuery] = useState(""); 


  useEffect(() => {
    if (query) return;

    setLoading(true);
    setError(null);

    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        if (!res.ok) throw new Error("Hubo un error al cargar los personajes.");
        return res.json();
      })
      .then((data) => {
        setCharacters(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page, query]);

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    const fetchAll = async () => {
      try {
        const firstRes = await fetch(
          "https://rickandmortyapi.com/api/character",
        );
        const firstData = await firstRes.json();
        const totalPages = firstData.info.pages;

        const requests = [];
        for (let i = 1; i <= totalPages; i++) {
          requests.push(
            fetch(`https://rickandmortyapi.com/api/character?page=${i}`).then(
              (r) => r.json(),
            ),
          );
        }

        const results = await Promise.all(requests);
        const all = results.flatMap((r) => r.results);
        setAllCharacters(all);
        setLoading(false);
      } catch (err) {
        setError("Error al buscar personajes.");
        setLoading(false);
      }
    };

    fetchAll();
  }, [query]); 

  const handleSearch = () => {
    if (!search.trim()) return; 
    setQuery(search);
  };


  const handleClear = () => {
    setSearch("");
    setQuery("");
  };

  const filteredCharacters = query
    ? (() => {
        const exact = allCharacters.find(
          (c) => c.name.toLowerCase() === query.toLowerCase(),
        );
        return exact
          ? [exact]
          : allCharacters.filter((c) =>
              c.name.toLowerCase().startsWith(query.toLowerCase()),
            );
      })()
    : characters;

  if (loading)
    return (
      <div className="estadoCharacters">
        <p>Cargando personajes...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p>¡Oops! {error}</p>
      </div>
    );

  return (
    <div className="allCharacters">
      <p id="text">
        La búsqueda de personajes permite filtrar resultados de TODOS los personajes idependientemente de la ESPECIE, mediante las letras
        iniciales o el nombre exacto del personaje que desees buscar. Después de realizar la
        búsqueda, el campo debe ser limpiado, para continuar con la visualizacion de los
        personajes en la pagina antes de la busqueda.
      </p>
      <SearchCharacter
        search={search}
        setSearch={setSearch}
        onSearch={handleSearch}
        onClear={handleClear} 
      />

      <p className="cuenta">
        {filteredCharacters.length} personajes encontrados
      </p>

      <div className="characters">
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

      {!query && <Pagination page={page} setPage={setPage} />}
    </div>
  );
};

export default AllCharacters;

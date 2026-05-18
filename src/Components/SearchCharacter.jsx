 import "./SearchCharacter.css";

 const SearchCharacter = ({ search, setSearch, onSearch, onClear }) => {
   return (
     <div className="search">
       <input
         type="text"
         placeholder="Buscar personaje..."
         value={search}
         onChange={(e) => setSearch(e.target.value)}
         onKeyDown={(e) => e.key === "Enter" && onSearch()} // también busca con Enter
       />
       <button onClick={onSearch}>Buscar</button>
       <button onClick={onClear}>Limpiar</button>
     </div>
   );
 };
 export default SearchCharacter;

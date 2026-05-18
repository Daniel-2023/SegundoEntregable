import "./Pagination.css";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page == 1}
      >
        Anterior
      </button>

      <span>Página {page}</span>

      <button onClick={() => setPage((prev) => prev + 1)} disabled={page == 42}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;

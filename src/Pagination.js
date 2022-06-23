export default function Pagination({ page, setPage, lastPage }) {
  return (<div className='buttons'>
    <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Previous Page</button>
    <button disabled={page >= lastPage} onClick={() => setPage(page + 1)}>Next Page</button>
  </div>);
}
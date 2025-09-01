import React from 'react'

function Pagination({ onPageChange, currentPage, totalPages }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""} `}>
          <button className="page-link" href="#" onClick={() => currentPage > 1 && onPageChange(currentPage - 1)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {Array.from({ length: totalPages }, (_, page) => (
          <li key={page} className={`page-item ${currentPage === page + 1 ? "active" : ""}`}>
            <button className="page-link" onClick={() => onPageChange(page + 1)} href="#">
              {page + 1}
            </button>
          </li>
        ))}

        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
          <button className="page-link" href="#" onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
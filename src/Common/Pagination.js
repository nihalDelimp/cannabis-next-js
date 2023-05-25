import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
      
    const pageNumbers = [];
    const [show, setshow] = useState(true)
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    useEffect(() => {
      if (currentPage < 5) {
        setshow(true)
      } else {
        setshow(false)
      }
    }, [currentPage])
  

  return (
    <div id="pagination-container" className="light-theme simple-pagination">
    <ul>
    {pageNumbers.includes(currentPage - 1) &&
    <li><Link href="#" className="page-link" onClick={() => {
          paginate(currentPage - 1);
        }}>«</Link></li>}
      {pageNumbers.map(number =>

        show === true && number < 5 ?
          (<li className={number === currentPage ? "active" : ""} key={number}>
            {number === currentPage ? (<span className={number === currentPage ? "current" : ""}>{number}</span>) :
              (<Link href="#" className={number !== currentPage ? "page-link" : ""} onClick={() => paginate(number)}>{number}</Link>)}
          </li>)
          :
          show === false && number >= 5 && 
          (<li className={number === currentPage ? "active" : ""} key={number}>
            {number === currentPage ? (<span className={number === currentPage ? "current" : ""}>{number}</span>) :
              (<Link href="#" className={number !== currentPage ? "page-link" : ""} onClick={() => paginate(number)}>{number}</Link>)}
          </li>)
      )}
      {pageNumbers.includes(currentPage + 1) &&
        <li>
          <Link href="#" className="page-link" onClick={() => {
            paginate(currentPage + 1);
          }}>»
          </Link></li>}
    </ul>
  </div>
  )
}

export default Pagination
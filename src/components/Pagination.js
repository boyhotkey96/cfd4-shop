import React from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { convertQueryToObject, serializeObjToQueryURL } from './helper';

export default function Pagination({ count, currentPage, nextPage, perPage, totalPage }) {

  let match = useRouteMatch();

  function renderPage() {
    let start = currentPage - 2;
    if (start < 1) start = 1;

    let end = start + 4;
    if (end > totalPage) {
      end = totalPage;
      start = end - 4;
    }

    let list = [];
    for (let i = start; i <= end; i++) {
      let queryURL = convertQueryToObject()
      queryURL.page = i
      let queryString = serializeObjToQueryURL(queryURL)
      list.push(<li className={`page-item ${currentPage === i ? 'active' : ''}`} key={i}>
        <Link className="page-link" to={`${match.path}?${queryString}`}>{i}</Link>
      </li>)
    }
    // console.log(list)
    return list;
  }

  return (
    <nav className="d-flex justify-content-center justify-content-md-end">
      <ul className="pagination pagination-sm text-gray-400">
        {
          currentPage > 1 && <li className="page-item">
            {/* <Link className="page-link page-link-arrow" to={`${match.path}?page=${currentPage - 1}`}>
              <i className="fa fa-caret-left" />
            </Link> */}
            <Link className="page-link page-link-arrow" to={`${match.path}?${serializeObjToQueryURL({...convertQueryToObject(), page: currentPage - 1 })}`}>
              <i className="fa fa-caret-left" />
            </Link>
          </li>
        }
        {
          renderPage()
        }
        {
          currentPage < totalPage && <li className="page-item">
            {/* <Link className="page-link page-link-arrow" to={`${match.path}?page=${currentPage + 1}`}>
              <i className="fa fa-caret-right" />
            </Link> */}
            <Link className="page-link page-link-arrow" to={`${match.path}?${serializeObjToQueryURL({...convertQueryToObject(), page: currentPage + 1 })}`}>
              <i className="fa fa-caret-right" />
            </Link>
          </li>
        }
      </ul>
    </nav>
  )
}

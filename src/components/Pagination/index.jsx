import * as React from 'react';

import { PaginationButton, PaginationHolder, PaginationList, TotalItems } from './Pagination.styles';
import DOTS from './PaginationDots';
import UsePagination from './UsePagination';

function Pagination(props) {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, customCss } = props;

  const paginationRange = UsePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    // const nextPage = currentPage + 1;
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <PaginationHolder>
      <TotalItems>Total {totalCount} Items</TotalItems>

      <PaginationList css={customCss}>
        <li>
          <PaginationButton type="primary" shape="circle" onClick={onPrevious} disabled={currentPage === 1} size={28}>
            <i className="material-icons-outlined">chevron_left</i>
          </PaginationButton>
        </li>
        {paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className="pagination-item dots" key={index}>
                &#8230;
              </li>
            );
          }

          return (
            <li key={index}>
              <PaginationButton
                onClick={() => onPageChange(pageNumber)}
                className={`${(pageNumber === currentPage && 'selected') || ''}`}
                $pageNumBtn>
                {pageNumber}
              </PaginationButton>
            </li>
          );
        })}
        <li>
          <PaginationButton
            type="primary"
            shape="circle"
            onClick={onNext}
            disabled={currentPage === lastPage}
            size={28}>
            <i className="material-icons-outlined">chevron_right</i>
          </PaginationButton>
        </li>
      </PaginationList>
    </PaginationHolder>
  );
}

export default Pagination;

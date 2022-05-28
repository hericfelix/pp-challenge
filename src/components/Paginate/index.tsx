import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { ArrowButton, Container } from './style';

interface PaginateProps {
  goToPage: (pageIndex: number) => void;
  canNextPage: boolean;
  canPreviousPage: boolean;
  pageCount: number;
  page: number;
}

const Paginate = ({
  goToPage,
  canNextPage,
  canPreviousPage,
  pageCount,
  page,
}: PaginateProps) => {
  console.log(canNextPage);
  console.log(canPreviousPage);
  return (
    <Container>
      <ArrowButton onClick={() => goToPage(0)} disabled={!canPreviousPage}>
        <IoIosArrowBack size={18} />
      </ArrowButton>
      <p>
        {page + 1} de {pageCount}
      </p>
      <ArrowButton
        onClick={() => goToPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        <IoIosArrowForward size={18} />
      </ArrowButton>
    </Container>
  );
};

export default Paginate;

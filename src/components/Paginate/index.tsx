import React, { Dispatch, SetStateAction } from 'react';
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from 'react-icons/io';
import {
  ArrowButton,
  ArrowContainer,
  Container,
  SelectPageSizeContainer,
} from './style';

interface PaginateProps {
  gotoPage: (pageIndex: number) => void;
  canNextPage: boolean;
  canPreviousPage: boolean;
  pageCount: number;
  pageIndex: number;
  setPageSize: (pageSize: number) => void;
  pageSize: number;
  data: Array<any>;
}

const Paginate = ({
  gotoPage,
  canNextPage,
  canPreviousPage,
  pageCount,
  pageIndex,
  setPageSize,
  pageSize,
  data,
}: PaginateProps) => {
  return (
    <Container>
      <SelectPageSizeContainer>
        <p>
          Mostrando{' '}
          {(pageIndex + 1) * pageSize <= data.length
            ? (pageIndex + 1) * pageSize
            : data.length}{' '}
          de {data.length} registros
        </p>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </SelectPageSizeContainer>
      <ArrowContainer>
        <ArrowButton
          onClick={() => gotoPage(pageIndex - 1)}
          disabled={!canPreviousPage}
        >
          <IoIosArrowBack size={18} />
        </ArrowButton>
        <p>
          {pageIndex + 1} de {pageCount}
        </p>
        <ArrowButton
          onClick={() => gotoPage(pageIndex + 1)}
          disabled={!canNextPage}
        >
          <IoIosArrowForward size={18} />
        </ArrowButton>
      </ArrowContainer>
    </Container>
  );
};

export default Paginate;

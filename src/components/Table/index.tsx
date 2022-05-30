import { Container, StyledTable, THead, TBody, TH, TR, TD } from './style';
import React from 'react';
import { useTable, usePagination, useFlexLayout } from 'react-table';
import Paginate from '../Paginate';

interface TableProps {
  columns: any;
  data: any;
  hasPagination: boolean;
}

export const Table = ({ columns, data, hasPagination = true }: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination,
    useFlexLayout
  );

  return (
    <>
      {!data ? (
        <></>
      ) : (
        <Container>
          <div>
            <StyledTable {...getTableProps()}>
              <THead>
                {headerGroups.map((headerGroup) => {
                  const { key, ...restHeaderGroup } =
                    headerGroup.getHeaderGroupProps();
                  return (
                    <TR key={key} {...restHeaderGroup}>
                      {headerGroup.headers.map((column) => {
                        const { key, ...restHeaderProps } =
                          column.getHeaderProps();
                        return (
                          <TH key={key} {...restHeaderProps}>
                            {column.render('Header')}
                          </TH>
                        );
                      })}
                    </TR>
                  );
                })}
              </THead>
              <TBody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  const { key, ...restRowProps } = row.getRowProps();
                  return (
                    <TR key={key} {...restRowProps}>
                      {row.cells.map((cell) => {
                        const { key, ...restCellProps } = cell.getCellProps();
                        return (
                          <TD key={key} {...restCellProps}>
                            {cell.render('Cell')}
                          </TD>
                        );
                      })}
                    </TR>
                  );
                })}
              </TBody>
            </StyledTable>
          </div>

          {hasPagination && (
            <Paginate
              gotoPage={gotoPage}
              canNextPage={canNextPage}
              canPreviousPage={canPreviousPage}
              pageIndex={pageIndex}
              pageCount={pageCount}
              data={data}
              pageSize={pageSize}
              setPageSize={setPageSize}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default Table;

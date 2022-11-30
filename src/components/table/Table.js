import React from 'react';
import { Table } from 'reactstrap';
import { useTable, useFilters, useSortBy, usePagination } from 'react-table';
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid';
import { PageButton } from './Button';
import { SortIcon, SortUpIcon, SortDownIcon } from './Icons';

const UserTable = ({ columns, data, crud, editBook, removeBook }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state,
    } = useTable({
        columns,
        data,
    },
        useFilters,
        useSortBy,
        usePagination
    )
    return (
        <div className="wrapper height_my_wrapper p-0">
            <section className="mainHmSec">
                <div className="container">
                    <div className="row no-gutters" style={{ justifyContent: 'center' }}>
                        <div className="col-md-12">
                            <div className="chat-section ">
                                <div className="row">
                                    <div className="col-md-12 card pt-40 pb-30 pl-20 pr-20">
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <Table size="md" {...getTableProps()} hover>
                                                    <thead>
                                                        {headerGroups.map((headerGroup) => (
                                                            <tr {...headerGroup.getHeaderGroupProps()}>
                                                                {headerGroup.headers.map((column) => (
                                                                    <th
                                                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                                                    >
                                                                        <div style={{ display: 'flex' }}>
                                                                            {column.render('Header')}
                                                                            <span>
                                                                                {column.isSorted
                                                                                    ? column.isSortedDesc
                                                                                        ? <SortDownIcon className="w-4 h-4 text-gray-400" />
                                                                                        : <SortUpIcon className="w-4 h-4 text-gray-400" />
                                                                                    : (
                                                                                        <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                                                                    )}
                                                                            </span>
                                                                        </div>
                                                                    </th>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </thead>
                                                    <tbody
                                                        {...getTableBodyProps()}
                                                    >
                                                        {page && page.length ? page.map((row, i) => {
                                                            prepareRow(row)
                                                            return (
                                                                <tr {...row.getRowProps()} index={i}>
                                                                    {row.cells.map(cell => {
                                                                        return (
                                                                            <td
                                                                                {...cell.getCellProps()}
                                                                                role="cell"
                                                                            >
                                                                                {
                                                                                    cell.column.id === 'actions' ?
                                                                                        <>
                                                                                            {
                                                                                                crud ?
                                                                                                    <>
                                                                                                        <span className="pr-2" title="Edit" style={{ cursor: 'pointer' }}>
                                                                                                            <ion-icon name="create-outline" onClick={() => editBook(row)}></ion-icon>
                                                                                                        </span>
                                                                                                        <span className="pr-2" title="Edit" style={{ cursor: 'pointer' }}>
                                                                                                            <ion-icon name="trash-outline" onClick={() => removeBook(row)}></ion-icon>
                                                                                                        </span>
                                                                                                    </>
                                                                                                    :
                                                                                                    <div style={{ cursor: 'pointer', color: 'blue' }}>Add to cart</div>
                                                                                            }
                                                                                        </>
                                                                                        :
                                                                                        `${cell.value}`
                                                                                }
                                                                            </td>
                                                                        )
                                                                    })}
                                                                </tr>
                                                            )
                                                        }) : (
                                                            <tr>
                                                                <td align="center" colSpan="4">No record found!</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </Table>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <div>
                                                    <span>
                                                        Page <span>{state.pageIndex + 1}</span> of <span>{pageOptions.length} </span>
                                                    </span>
                                                    <label>
                                                        <span className="sr-only">Items Per Page</span>
                                                        <select
                                                            style={{ border: '1px solid gray', padding: '6px', background: 'white' }}
                                                            value={state.pageSize}
                                                            onChange={e => {
                                                                setPageSize(Number(e.target.value))
                                                            }}
                                                        >
                                                            {[5, 10, 20].map(pageSize => (
                                                                <option key={pageSize} value={pageSize}>
                                                                    Show {pageSize}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </label>
                                                </div>
                                                <div>
                                                    <nav aria-label="Pagination">
                                                        <PageButton
                                                            style={{ width: '40px' }}
                                                            onClick={() => gotoPage(0)}
                                                            disabled={!canPreviousPage}
                                                        >
                                                            <span className="sr-only">First</span>
                                                            <ChevronDoubleLeftIcon aria-hidden="true" />
                                                        </PageButton>
                                                        <PageButton
                                                            onClick={() => previousPage()}
                                                            style={{ width: '40px' }}
                                                            disabled={!canPreviousPage}
                                                        >
                                                            <span className="sr-only">Previous</span>
                                                            <ChevronLeftIcon aria-hidden="true" />
                                                        </PageButton>
                                                        <PageButton
                                                            onClick={() => nextPage()}
                                                            style={{ width: '40px' }}
                                                            disabled={!canNextPage
                                                            }>
                                                            <span className="sr-only">Next</span>
                                                            <ChevronRightIcon aria-hidden="true" />
                                                        </PageButton>
                                                        <PageButton
                                                            style={{ width: '40px' }}
                                                            onClick={() => gotoPage(pageCount - 1)}
                                                            disabled={!canNextPage}
                                                        >
                                                            <span className="sr-only">Last</span>
                                                            <ChevronDoubleRightIcon aria-hidden="true" />
                                                        </PageButton>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserTable;
import type { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  pageOffset: number;
  setPageOffset: Dispatch<SetStateAction<number>>;
  isPreviousData: boolean;
  totalPages: number;
};

const Pagination = ({
  pageOffset,
  setPageOffset,
  totalPages,
  isPreviousData,
}: PaginationProps) => {
  return (
    <div className="w-full justify-center px-4">
      <ReactPaginate
        pageCount={totalPages > 500 ? 500 : totalPages}
        onPageChange={(event) => {
          if (!isPreviousData && pageOffset < totalPages) {
            setPageOffset(event.selected);
          }
        }}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        renderOnZeroPageCount={() => null}
        containerClassName="flex"
        previousClassName="mr-auto rounded bg-slate-800 p-2 shadow-sm shadow-slate-700"
        nextClassName="ml-auto rounded bg-slate-800 p-2 shadow-sm shadow-slate-700"
        pageClassName="p-2"
        breakClassName=" p-2"
        disabledClassName="invisible"
        activeClassName="text-slate-500"
      />
    </div>
  );
};

export default Pagination;

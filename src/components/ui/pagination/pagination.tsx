"use client";

import { useCallback } from "react";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNav,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePagination, UsePaginationProps } from "./usePagination";

export const Pagination = ({
  totalPages,
  currentPage,
  visiblePages = 5,
  onPageChange,
}: UsePaginationProps) => {
  const pagination = usePagination({
    totalPages,
    currentPage,
    visiblePages,
    onPageChange,
  });

  const { visibleRange, isFirstPage, isLastPage } = pagination;

  const renderPageLink = useCallback(
    (page: number, isActive: boolean = false) => (
      <PaginationItem key={page}>
        <PaginationLink
          isActive={isActive}
          onClick={() => pagination.handlePageChange(page)}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ),
    [pagination],
  );

  const renderEllipsis = useCallback(
    () => (
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    ),
    [],
  );

  return (
    <PaginationNav>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={pagination.handlePrevious}
            className={
              isFirstPage ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
          />
        </PaginationItem>

        {visibleRange[0] > 1 && (
          <>
            {renderPageLink(1)}
            {visibleRange[0] > 2 && renderEllipsis()}
          </>
        )}

        {visibleRange.map((page) => renderPageLink(page, page === currentPage))}

        {visibleRange[visibleRange.length - 1] < totalPages && (
          <>
            {visibleRange[visibleRange.length - 1] < totalPages - 1 &&
              renderEllipsis()}
            {renderPageLink(totalPages)}
          </>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={pagination.handleNext}
            className={
              isLastPage ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationNav>
  );
};

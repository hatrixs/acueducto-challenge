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

interface Props extends UsePaginationProps {
  onPageChange?: (page: number) => void;
}

export const Pagination = ({
  totalPages,
  visiblePages = 5,
  initialPage = 1,
  onPageChange,
}: Props) => {
  const pagination = usePagination({ totalPages, visiblePages, initialPage });
  const { currentPage, visibleRange, isFirstPage, isLastPage } = pagination;

  const handlePageChange = useCallback(
    (page: number) => {
      pagination.handlePageChange(page);
      onPageChange?.(page);
    },
    [pagination, onPageChange],
  );

  const renderPageLink = useCallback(
    (page: number, isActive: boolean = false) => (
      <PaginationItem key={page}>
        <PaginationLink
          isActive={isActive}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    ),
    [handlePageChange],
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
            onClick={() => handlePageChange(currentPage - 1)}
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
            onClick={() => handlePageChange(currentPage + 1)}
            className={
              isLastPage ? "pointer-events-none opacity-50" : "cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationNav>
  );
};

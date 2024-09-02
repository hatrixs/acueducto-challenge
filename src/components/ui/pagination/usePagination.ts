import { useState, useEffect, useCallback, useMemo } from "react";

export interface UsePaginationProps {
  /** Total number of pages */
  totalPages: number;
  /** Current active page */
  currentPage: number;
  /** Number of page buttons to show */
  visiblePages: number;
  /** Callback invoked when page changes */
  onPageChange: (page: number) => void;
}

export const usePagination = ({
  totalPages,
  currentPage,
  visiblePages,
  onPageChange,
}: UsePaginationProps) => {
  const [internalCurrentPage, setInternalCurrentPage] = useState(currentPage);

  const updateVisibleRange = useCallback(
    (page: number) => {
      const halfVisible = Math.floor(visiblePages / 2);
      let start = Math.max(
        1,
        Math.min(page - halfVisible, totalPages - visiblePages + 1),
      );
      let end = Math.min(start + visiblePages - 1, totalPages);
      start = Math.max(1, end - visiblePages + 1);
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    },
    [totalPages, visiblePages],
  );

  const visibleRange = useMemo(
    () => updateVisibleRange(internalCurrentPage),
    [internalCurrentPage, updateVisibleRange],
  );

  useEffect(() => {
    setInternalCurrentPage(currentPage);
  }, [currentPage]);

  const handlePageChange = useCallback(
    (page: number) => {
      setInternalCurrentPage(page);
      onPageChange(page);
    },
    [onPageChange],
  );

  const handlePrevious = useCallback(() => {
    handlePageChange(internalCurrentPage - 1);
  }, [internalCurrentPage, handlePageChange]);

  const handleNext = useCallback(() => {
    handlePageChange(internalCurrentPage + 1);
  }, [internalCurrentPage, handlePageChange]);

  return {
    currentPage: internalCurrentPage,
    visibleRange,
    handlePageChange,
    handlePrevious,
    handleNext,
    isFirstPage: internalCurrentPage === 1,
    isLastPage: internalCurrentPage === totalPages,
  };
};

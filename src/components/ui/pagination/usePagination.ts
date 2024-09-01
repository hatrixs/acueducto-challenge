import { useState, useEffect, useCallback, useMemo } from "react";

/**
 * Props for the usePagination hook.
 */
export interface UsePaginationProps {
  /** Total number of pages */
  totalPages: number;
  /** Number of page buttons to show */
  visiblePages: number;
  /** Initial page to start on */
  initialPage: number;
}

/**
 * A custom hook for managing pagination state and logic.
 *
 * @param {UsePaginationProps} props - The pagination configuration
 * @returns An object containing pagination state and control functions
 */
export const usePagination = ({
  totalPages,
  visiblePages,
  initialPage,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  /**
   * Calculates the range of visible page numbers based on the current page.
   *
   * @param {number} page - The current page number
   * @returns {number[]} An array of visible page numbers
   */
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

  /**
   * Memoized array of visible page numbers.
   */
  const visibleRange = useMemo(
    () => updateVisibleRange(currentPage),
    [currentPage, updateVisibleRange],
  );

  /**
   * Ensures the current page is within valid bounds when total pages change.
   */
  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      setCurrentPage(Math.max(1, Math.min(currentPage, totalPages)));
    }
  }, [currentPage, totalPages]);

  /**
   * Changes the current page to the specified page number.
   *
   * @param {number} page - The page number to change to
   */
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    },
    [totalPages],
  );

  /**
   * Moves to the previous page if not on the first page.
   */
  const handlePrevious = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  }, []);

  /**
   * Moves to the next page if not on the last page.
   */
  const handleNext = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  }, [totalPages]);

  return {
    /** The current active page number */
    currentPage,
    /** Array of page numbers to be displayed */
    visibleRange,
    /** Function to change the current page */
    handlePageChange,
    /** Function to move to the previous page */
    handlePrevious,
    /** Function to move to the next page */
    handleNext,
    /** Boolean indicating if on the first page */
    isFirstPage: currentPage === 1,
    /** Boolean indicating if on the last page */
    isLastPage: currentPage === totalPages,
  };
};

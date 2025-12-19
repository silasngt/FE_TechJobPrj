export const PaginationRole = (props: {
  totalPage: number;
  page: any;
  onPageChange?: (page: number) => void;
}) => {
  const { totalPage, page, onPageChange } = props;
  if (totalPage <= 1) return null;

  const pages = Array.from({ length: Math.min(totalPage, 5) }, (_, i) => i + 1);
  return (
    <>
      <div className="mt-6 flex items-center justify-between text-sm">
        {/* Left info */}
        <p className="text-gray-500">
          Hiển thị <span className="font-semibold">1</span> –{' '}
          <span className="font-semibold">10</span> trên{' '}
          <span className="font-semibold">{totalPage}</span> tin
        </p>

        {/* Pagination controls */}
        <div className="flex items-center gap-1">
          {/* Prev */}
          <button
            className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            disabled={page === 1}
            onClick={() => onPageChange?.(page - 1)}
          >
            ‹
          </button>

          {/* Pages */}
          {pages.map((p) => (
            <button
              key={p}
              onClick={() => onPageChange?.(p)}
              className={`px-3 py-1.5 rounded-md border text-sm font-medium transition ${
                p === page
                  ? 'bg-emerald-500 text-white border-emerald-500'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {p}
            </button>
          ))}

          {/* Next */}
          <button
            className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50"
            disabled={page === totalPage}
            onClick={() => onPageChange?.(page + 1)}
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
};

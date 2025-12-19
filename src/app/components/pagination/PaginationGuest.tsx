export const PaginationGuest = (props: {
  page: number;
  totalPage: number;
  onPageChange?: (page: number) => void;
}) => {
  const { page, totalPage, onPageChange } = props;
  if (totalPage <= 1) return null;

  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);
  return (
    <>
      <div className="mt-10 flex items-center justify-center gap-1 text-sm">
        {/* Prev */}
        <button
          className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-600
                   hover:bg-gray-50 disabled:opacity-50"
          disabled={page === 1}
          onClick={() => onPageChange?.(page - 1)}
        >
          ‹
        </button>

        {/* Page numbers */}
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange?.(p)}
            className={`px-3 py-1.5 rounded-md border font-medium transition ${
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
          className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-600
                   hover:bg-gray-50 disabled:opacity-50"
          disabled={page === totalPage}
          onClick={() => onPageChange?.(page + 1)}
        >
          ›
        </button>
      </div>
    </>
  );
};

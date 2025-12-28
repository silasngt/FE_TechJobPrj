export const CardDetailSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6 animate-pulse">
      {/* Title */}
      <div className="h-8 bg-gray-200 rounded w-2/3" />

      {/* Meta */}
      <div className="flex gap-4">
        <div className="h-4 bg-gray-200 rounded w-24" />
        <div className="h-4 bg-gray-200 rounded w-32" />
        <div className="h-4 bg-gray-200 rounded w-20" />
      </div>

      {/* Content blocks */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>

      {/* Box */}
      <div className="h-40 bg-gray-200 rounded" />
    </div>
  );
};

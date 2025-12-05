export const CardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 animate-pulse flex flex-col justify-between">
      <div>
        {/* tags skeleton */}
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="h-4 w-14 bg-gray-200 rounded-full" />
          <div className="h-4 w-16 bg-gray-200 rounded-full" />
        </div>

        {/* logo skeleton */}
        <div className="w-10 h-10 mb-3 rounded-lg bg-gray-200" />

        {/* title skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-3 bg-gray-200 rounded w-1/2" />
        </div>

        {/* salary pill skeleton */}
        <div className="h-7 w-2/3 bg-gray-200 rounded-full" />
      </div>

      {/* bottom skeleton */}
      <div className="mt-4 flex items-center justify-between">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-7 bg-gray-200 rounded-full w-16" />
      </div>
    </div>
  );
};

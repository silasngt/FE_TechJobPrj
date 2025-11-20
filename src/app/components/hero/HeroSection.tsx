export const HeroContent = () => {
  return (
    <>
      <section
        className="w-full bg-no-repeat bg-cover"
        style={{
          backgroundColor: '#D6F4ED',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 pt-12 pb-16">
          {/* CONTENT */}
          <div className="max-w-xl space-y-6 text-white">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="block text-[#003161]">Discover</span>
              <span className="block text-[#003161]">more than</span>

              <span className="mt-2 inline-block relative">
                <span className="text-[#4FB7B3]">+5000</span>{' '}
                <span className="text-[#4FB7B3]">tech jobs</span>
                <span>
                  <img
                    src="../../assets/images/underline.svg"
                    alt="Highlight"
                  />
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-700 max-w-md">
              Great platform for the job seeker that searching for new career
              heights and passionate about startups.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="mt-8">
            <div className="bg-white rounded-full shadow-lg px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:gap-0">
              {/* Job title */}
              <div className="flex-1 flex items-center gap-2 md:border-r md:border-gray-200 md:pr-4">
                <span className="text-gray-400 text-sm">🔍</span>
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="w-full text-sm text-gray-700 outline-none placeholder:text-gray-400"
                />
              </div>

              {/* Location */}
              <div className="flex-1 flex items-center gap-2 md:px-4">
                <span className="text-gray-400 text-sm">📍</span>
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-sm text-gray-700"
                >
                  <span className="truncate">Ho Chi Minh City, Viet Nam</span>
                  <span className="ml-2 text-xs">▾</span>
                </button>
              </div>

              {/* Button */}
              <div className="md:pl-4 md:w-auto w-full">
                <button className="w-full bg-[#00D8A4] text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#00b891] transition">
                  Search my job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

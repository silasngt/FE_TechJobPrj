import { Search } from './SearchSection';

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

          {/* Search */}
          <Search />
        </div>
      </section>
    </>
  );
};

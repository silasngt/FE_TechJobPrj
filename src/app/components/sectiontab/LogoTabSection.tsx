import Link from 'next/link';

export const LogoTabUserSection = () => {
  return (
    <>
      <div className="flex items-center  mb-8 justify-center">
        <a href="/">
          <img src="../../assets/images/logo_techjob.svg" alt="" />
        </a>
      </div>
      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8 justify-center  bg-gray-100 p-1 rounded-full w-fit mx-auto">
        <Link
          href="/job_seeker/login"
          className="px-5 py-2 rounded-full bg-teal-500 text-white text-sm font-semibold shadow-sm"
        >
          👤 Job Seeker
        </Link>
        <Link
          href="/company/login"
          className="px-5 py-2 rounded-full text-sm font-semibold text-gray-500 hover:text-gray-900"
        >
          🏢 Company
        </Link>
      </div>
    </>
  );
};
export const LogoTabCompanySection = () => {
  return (
    <>
      <div className="flex items-center  mb-8 justify-center">
        <a href="/">
          <img src="../../assets/images/logo_techjob.svg" alt="" />
        </a>
      </div>
      {/* Tabs - Updated styling - KHÔNG THAY ĐỔI */}
      <div className="flex items-center gap-2 mb-8 justify-center bg-gray-100 p-1 rounded-full w-fit mx-auto">
        <Link
          href="/job_seeker/login"
          className="px-5 py-2 rounded-full text-sm font-semibold text-gray-600 hover:text-gray-900 transition"
        >
          👤 Job Seeker
        </Link>
        <Link
          href="/company/login"
          className="px-5 py-2 rounded-full bg-teal-500 text-white text-sm font-semibold shadow-sm transition"
        >
          🏢 Company
        </Link>
      </div>
    </>
  );
};

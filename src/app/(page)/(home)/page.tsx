import { Footer } from '../../components/footer/Footer';
import { Header } from '../../components/header/Header';
import { HeroContent } from '../../components/hero/HeroSection';

export default function Home() {
  fetch('http://localhost:3001', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.message));
  const topEmployers = [
    { id: 1, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 2, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 3, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 4, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 5, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
    { id: 6, name: 'Shopee', location: 'Ho Chi Minh City', jobs: '120 jobs' },
  ];

  const featureJobs = [
    {
      id: 1,
      title: 'Casual Marketing Specialist',
      company: 'Shopee',
      location: 'Ho Chi Minh City',
      type: 'Full-time',
      tag: 'Marketing',
    },
    {
      id: 2,
      title: 'Brand Designer',
      company: 'Shopee',
      location: 'Remote',
      type: 'Full-time',
      tag: 'Design',
    },
    {
      id: 3,
      title: 'Digital Marketing',
      company: 'Shopee',
      location: 'Ha Noi',
      type: 'Part-time',
      tag: 'Marketing',
    },
    {
      id: 4,
      title: 'Visual Designer',
      company: 'Shopee',
      location: 'Ho Chi Minh City',
      type: 'Full-time',
      tag: 'Design',
    },
    {
      id: 5,
      title: 'Social Marketing',
      company: 'Shopee',
      location: 'Da Nang',
      type: 'Remote',
      tag: 'Marketing',
    },
    {
      id: 6,
      title: 'Front-end Developer',
      company: 'Shopee',
      location: 'Ho Chi Minh City',
      type: 'Full-time',
      tag: 'Developer',
    },
    {
      id: 7,
      title: 'Product Marketing',
      company: 'Shopee',
      location: 'Ha Noi',
      type: 'Full-time',
      tag: 'Marketing',
    },
    {
      id: 8,
      title: 'Visual Designer',
      company: 'Shopee',
      location: 'Remote',
      type: 'Freelance',
      tag: 'Design',
    },
  ];
  return (
    <>
      {/* HEADER + HERO */}
      <Header />
      <HeroContent />

      {/* MAIN CONTENT */}
      <main className="bg-[#F5FBFF]">
        {/* TOP EMPLOYERS */}
        <section className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#141414]">
              Top <span className="text-[#00B894]">employers</span>
            </h2>
            <a href="#" className="text-sm text-[#00B894] font-medium">
              View all
            </a>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {topEmployers.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 shadow-[0_15px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-2xl mb-3 flex items-center justify-center"
                  style={{
                    backgroundImage:
                      'url(https://th.bing.com/th/id/R.6287255214805d04b927ee0c53c88f64?rik=Hajf3OR9ipXMdQ&riu=http%3a%2f%2ffreelogopng.com%2fimages%2fall_img%2f1656180674shopee-logo-transparent.png&ehk=9Uim1JMb9bW6YMwQi6SDKsI56jFiz6E4jvDwKPNcx8M%3d&risl=&pid=ImgRaw&r=0)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <span className="text-xs font-semibold text-white">Logo</span>
                </div>
                <h3 className="font-semibold text-[15px] mb-1">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{item.location}</p>
                <span className="inline-flex items-center text-xs font-medium text-[#00B894] bg-[#E0FFF7] px-3 py-1 rounded-full">
                  {item.jobs}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURE JOBS */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#141414]">
              Feature <span className="text-[#00B894]">jobs</span>
            </h2>
            <a href="#" className="text-sm text-[#00B894] font-medium">
              View all
            </a>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
            {featureJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-semibold px-2 py-1 rounded-full bg-[#E0FFF7] text-[#00B894] mb-2">
                    {job.tag}
                  </span>
                  <img
                    src="https://freepnglogo.com/images/all_img/1714299248tiktok-shop-logo-png-transparent.png"
                    alt=""
                    className="w-10 h-10 mb-3 object-contain border-[1px] border-gray-200 rounded-lg"
                  />
                  <h3 className="text-[14px] font-semibold mb-1">
                    {job.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {job.company} • {job.location}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500">{job.type}</span>
                  <button className="text-[11px] font-semibold text-[#00B894]">
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

import { SiderUser } from '@/src/app/components/sider-bar/SiderUser';
import { FcAddRow, FcDocument } from 'react-icons/fc';

export default function UserDashBoard() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">
      {/* SIDEBAR */}
      <SiderUser />

      {/* MAIN CONTENT */}
      <main className="flex-1 px-10 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              My Dashboard
            </h2>
            <p className="text-sm text-gray-500">
              Quick overview of your job search activities.
            </p>
          </div>
          <a
            href="/"
            className="px-4 py-2 text-sm border border-emerald-500 text-emerald-600 rounded-md hover:bg-emerald-50"
          >
            Back to homepage
          </a>
        </div>

        {/* Overview cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Active applications</p>
            <p className="text-2xl font-semibold text-gray-900">6</p>
            <p className="text-xs text-emerald-600 mt-1">+2 this week</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Interviews scheduled</p>
            <p className="text-2xl font-semibold text-gray-900">3</p>
            <p className="text-xs text-gray-400 mt-1">Next one in 2 days</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Saved jobs</p>
            <p className="text-2xl font-semibold text-gray-900">14</p>
            <p className="text-xs text-gray-400 mt-1">
              Don&apos;t forget to apply
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-100">
            <p className="text-xs text-gray-500 mb-1">Profile completeness</p>
            <div className="flex items-center justify-between mt-1">
              <p className="text-2xl font-semibold text-gray-900">82%</p>
              <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-600">
                Recommended
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Add a summary to reach 100%.
            </p>
          </div>
        </section>

        {/* Middle section: Recent apps + Quick actions */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">
                Recent applications
              </h3>
              <button className="text-xs text-emerald-600 hover:underline">
                View all
              </button>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                {
                  title: 'Frontend Developer',
                  company: 'Spotify',
                  status: 'Under review',
                  date: 'Apr 20, 2025',
                },
                {
                  title: 'Backend Engineer',
                  company: 'Netflix',
                  status: 'Interview scheduled',
                  date: 'Apr 18, 2025',
                },
                {
                  title: 'Fullstack Developer',
                  company: 'Airbnb',
                  status: 'Applied',
                  date: 'Apr 16, 2025',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="px-5 py-3 flex items-center justify-between text-sm"
                >
                  <div>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                    <span
                      className={`inline-flex px-2 py-1 rounded-full text-[11px] ${
                        item.status === 'Interview scheduled'
                          ? 'bg-blue-50 text-blue-600'
                          : item.status === 'Under review'
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-gray-50 text-gray-600'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions / reminders */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Quick actions
              </h3>
              <div className="space-y-2 text-sm flex flex-wrap">
                <a className="w-full text-left px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50">
                  <FcAddRow className="inline-flex mx-[5px] text-[16px]" />{' '}
                  Update your public profile
                </a>
                <a className="w-full text-left px-3 py-2 rounded-md border border-gray-200 hover:bg-gray-50">
                  <FcDocument className="inline-flex mx-[5px] text-[16px]" />{' '}
                  Upload latest CV
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                Tips for you
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                Keep your profile updated and tailor your CV to each job to
                increase your chances.
              </p>
              <button className="text-xs text-emerald-600 hover:underline">
                Read more career tips
              </button>
            </div>
          </div>
        </section>

        {/* Bottom: maybe stats / learning */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-gray-900">
              Weekly activity
            </h3>
            <span className="text-xs text-gray-400">Last 7 days</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-xs text-gray-500">Jobs viewed</p>
              <p className="text-lg font-semibold text-gray-900">42</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Jobs applied</p>
              <p className="text-lg font-semibold text-gray-900">7</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Messages from recruiters</p>
              <p className="text-lg font-semibold text-gray-900">3</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Profile views</p>
              <p className="text-lg font-semibold text-gray-900">19</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

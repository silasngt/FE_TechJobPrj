import { ButtonDeleteForce } from '@/src/app/components/button/ButtonDelete';
import { formatVND } from '@/src/hooks/formatUI';
import Link from 'next/link';
import { FcBriefcase, FcCurrencyExchange, FcLeave } from 'react-icons/fc';
export const dynamic = 'force-dynamic';
export const ItemCvUser = (props: {
  item: any;
  onDeleteSuccess: (id: string) => void;
  jobWorkingForm?: string;
  status?: { value: string; label: string; color: string };
}) => {
  const { item, onDeleteSuccess, jobWorkingForm, status } = props;
  return (
    <>
      {/* Left: info */}
      <div className="flex-1">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">
          {item.jobTitle}
        </h3>

        <p className="text-sm text-gray-600 mb-2">
          Công ty:{' '}
          <span className="font-semibold text-gray-800">
            {item.companyName}
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs md:text-sm text-gray-600">
          <p>
            <FcCurrencyExchange className="inline-flex mx-[5px] text-[16px]" />
            Mức lương:{' '}
            <span className="font-semibold text-emerald-600">
              {formatVND(item.salaryMin)} - {formatVND(item.salaryMax)}
            </span>
          </p>
          <p>
            <FcBriefcase className="inline-flex mx-[5px] text-[16px]" /> Vị trí:{' '}
            <span className="font-semibold">{item.position}</span>
          </p>
          <p>
            <FcLeave className="inline-flex mx-[5px] text-[16px]" /> Hình thức:{' '}
            <span className="font-semibold">{jobWorkingForm}</span>
          </p>
        </div>
      </div>

      {/* Right: status + actions */}
      <div className="flex flex-col items-start md:items-end gap-3 min-w-[220px]">
        <span
          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium `}
        >
          Trạng thái:{' '}
          <span
            className="ml-[5px] font-semibold"
            style={{ color: status?.color }}
          >
            {status?.label}
          </span>
        </span>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <Link
            href={`/user-manage/cv/detail/${item._id}`}
            className="flex-1 md:flex-none px-4 py-2 text-xs md:text-sm rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
          >
            Xem
          </Link>
          <ButtonDeleteForce
            api={`${process.env.NEXT_PUBLIC_API_URL}/cvs/${item._id}`}
            id={item._id}
            onDeleteSuccess={onDeleteSuccess}
          />
          {/* Nút điều chỉnh CV */}
          <Link
            href={`/user-manage/cv/edit/${item._id}`}
            className="flex-1 md:flex-none px-4 py-2 text-xs md:text-sm rounded-md border border-emerald-500 text-emerald-600 font-semibold hover:bg-emerald-50 transition text-center"
          >
            Điều chỉnh CV
          </Link>
        </div>
      </div>
    </>
  );
};

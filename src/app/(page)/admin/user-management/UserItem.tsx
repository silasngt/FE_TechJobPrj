import { toast, Toaster } from 'sonner';

export const UserItem = (props: {
  user: any;
  onDeleteSuccess: (id: string) => void;
}) => {
  const { user, onDeleteSuccess } = props;
  const handleChangeStatus = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/admin/users/${user._id}/toggle`, {
      method: 'PATCH',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          toast.success(
            `${user.isDeleted ? 'Mở khóa' : 'Khóa'} tài khoản thành công`
          );
          onDeleteSuccess(user._id);
        }
      });
  };
  return (
    <>
      <Toaster richColors position="top-right" />
      {/* Left */}
      <div
        key={user._id}
        className="px-5 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm"
      >
        {' '}
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 overflow-hidden">
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.fullName}
                className="w-full h-full object-cover"
              />
            ) : (
              user.fullName.charAt(0)
            )}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{user.fullName}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col md:items-end gap-2 min-w-[220px]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
            <p>
              Số job đã ứng tuyển:{' '}
              <span className="font-semibold">{user.totalJobApplied}</span>
            </p>
            <span
              className={`inline-flex px-2 py-1 rounded-full text-[11px] font-semibold ${
                user.isDeleted
                  ? 'bg-red-50 text-red-600 border border-red-200'
                  : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
              }`}
            >
              {user.isDeleted ? 'Đã khóa' : 'Đang hoạt động'}
            </span>
          </div>

          <button
            onClick={handleChangeStatus}
            className={`px-3 py-1.5 text-xs rounded-md font-semibold transition ${
              user.isDeleted
                ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                : 'bg-red-500 text-white hover:bg-red-600'
            }`}
          >
            {user.isDeleted ? 'Mở khóa tài khoản' : 'Khóa tài khoản'}
          </button>
        </div>
      </div>
    </>
  );
};

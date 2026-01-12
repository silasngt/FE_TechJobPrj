import { toast, Toaster } from 'sonner';

export const ButtonChangeStatus = (props: {
  api: string;
  id: string;
  isDeleted: boolean;
  onChangeStatus: (id: string) => void;
}) => {
  const { api, id, isDeleted, onChangeStatus } = props;
  const handleChangeStatus = () => {
    fetch(api, {
      method: 'PATCH',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res.success === true) {
          toast.success(`${isDeleted ? 'Mở khóa' : 'Khóa'} công ty thành công`);
          onChangeStatus(id);
        }
      });
  };
  return (
    <>
      {isDeleted ? (
        <button
          onClick={handleChangeStatus}
          className="px-3 py-1.5 text-xs rounded-md font-semibold transition bg-emerald-500 text-white hover:bg-emerald-600"
        >
          Mở khóa tài khoản
        </button>
      ) : (
        <button
          onClick={handleChangeStatus}
          className="px-3 py-1.5 text-xs rounded-md font-semibold transition bg-red-500 text-white hover:bg-red-600"
        >
          Khóa tài khoản
        </button>
      )}
    </>
  );
};

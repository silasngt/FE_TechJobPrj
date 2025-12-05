import { toast, Toaster } from 'sonner';

export const ButtonDeleteSoft = (props: {
  api: string;
  id: string;
  isDeleted: boolean;
  onDeleteSuccess: (id: string) => void;
}) => {
  const { api, id, isDeleted, onDeleteSuccess } = props;
  const handleDelete = () => {
    const message = isDeleted
      ? 'Bạn có chắc muốn mở tin tuyển dụng này'
      : 'Bạn có chắc muốn đóng tin tuyển dụng này';

    const confirm = window.confirm(message);
    if (confirm) {
      fetch(api, {
        method: 'DELETE',
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success === true) {
            toast.success(res.message);
            onDeleteSuccess(id);
          }
          if (res.success === false) {
            toast.error(res.message);
          }
        });
    }
  };

  const buttonText = isDeleted ? 'Mở tin' : 'Đóng tin';

  return (
    <>
      <Toaster richColors position="top-right" />
      <button
        onClick={handleDelete}
        className="px-3 py-1.5 text-xs rounded-md bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
      >
        {buttonText}
      </button>
    </>
  );
};
export const ButtonDeleteForce = (props: {
  api: string;
  id: string;
  onDeleteSuccess: (id: string) => void;
}) => {
  const { api, id, onDeleteSuccess } = props;
  const handleDelete = () => {
    const confirm = window.confirm('Bạn có chắc muốn xóa bản ghi này');
    if (confirm) {
      fetch(api, {
        method: 'DELETE',
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.success === true) {
            toast.success(res.message);
            onDeleteSuccess(id);
          }
          if (res.success === false) {
            toast.error(res.message);
          }
        });
    }
  };
  return (
    <>
      <Toaster richColors position="top-right" />
      <button
        onClick={handleDelete}
        className="px-3 py-1.5 text-xs rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 transition"
      >
        Xóa tin
      </button>
    </>
  );
};

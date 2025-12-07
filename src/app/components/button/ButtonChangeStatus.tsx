import { toast, Toaster } from 'sonner';

export const ButtonApproved = (props: {
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
      <button className="px-3 py-1.5 text-xs rounded-md bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">
        Phê duyệt
      </button>
    </>
  );
};

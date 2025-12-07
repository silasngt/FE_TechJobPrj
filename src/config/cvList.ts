export const cvStatusList = [
  {
    label: 'Chưa duyệt',
    value: 'Pending',
    color: '#121212',
    badgeClass: 'bg-amber-50 text-amber-600 border border-amber-200',
  },
  {
    label: 'Đã duyệt',
    value: 'Approved',
    color: '#47BE02',
    badgeClass: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  },
  {
    label: 'Từ chối',
    value: 'Rejected',
    color: '#FF5100',
    badgeClass: 'bg-red-50 text-red-600 border border-red-200',
  },
];

// Hàm dùng chung
export const getCvStatusConfig = (status: string) => {
  // status có thể là label ("Đã duyệt") hoặc value ("Approved")
  return (
    cvStatusList.find(
      (item) => item.value === status || item.label === status
    ) || cvStatusList[0] // fallback: Chưa duyệt
  );
};

export const cvStatusList2 = [
  { label: 'Chưa duyệt', value: 'Pending', color: '#F59E0B' },
  { label: 'Đã duyệt', value: 'Approved', color: '#47BE02' },
  { label: 'Từ chối', value: 'Rejected', color: '#FF5100' },
];

// Hàm dùng chung: truyền vào value *hoặc* label đều được
export const getCvStatusUI = (status: string) => {
  const meta =
    cvStatusList.find((s) => s.value === status) ||
    cvStatusList.find((s) => s.label === status);

  // fallback an toàn
  if (!meta) {
    return {
      label: status,
      value: status,
      className: 'bg-gray-100 text-gray-700 border border-gray-200',
    };
  }

  let className = '';
  switch (meta.value) {
    case 'Approved':
      className = 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      break;
    case 'Rejected':
      className = 'bg-red-50 text-red-600 border border-red-200';
      break;
    default:
      className = 'bg-amber-50 text-amber-600 border border-amber-200';
      break;
  }

  return {
    ...meta,
    className,
  };
};

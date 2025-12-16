'use client';
import { useState } from 'react';

export const SearchHomeHeader = () => {
  //thay bằng dữ liệu thật sau khi user bấm search
  const [keyword] = useState<string>('Frontend Developer');
  const [totalResult] = useState<number>(24);
  return (
    <>
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-emerald-500 font-semibold">
            KẾT QUẢ TÌM KIẾM
          </p>
          <h1 className="mt-1 text-2xl md:text-3xl font-bold text-gray-900">
            Việc làm cho <span className="text-emerald-500">“{keyword}”</span>
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Tìm thấy{' '}
            <span className="font-semibold text-gray-800">
              {totalResult} cơ hội
            </span>{' '}
            phù hợp với từ khoá bạn đã nhập.
          </p>
        </div>

        {/* Nhãn filter đang áp dụng (có thể bind từ state) */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-600">
            Thành phố: <span className="font-semibold">Tất cả</span>
          </span>
        </div>
      </section>
    </>
  );
};

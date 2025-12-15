'use client';
import { useEffect, useState } from 'react';

export const DetailCv = (props: { id: string }) => {
  const { id } = props;
  const [detailCv, setDetailCv] = useState<any>();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/cvs/me/${id}`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setDetailCv(res.data);
        }
      });
  });
  return (
    <>
      <iframe src={detailCv?.fileCV} className="w-full h-screen"></iframe>
    </>
  );
};

'use client';
import { useAuth } from '@/src/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLogin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLogin === false) {
      router.replace('/');
    }
  }, [isLogin]);

  if (isLogin === null) {
    return <div>Đang kiểm tra xác thực...</div>;
  }

  if (isLogin === false) {
    return null;
  }

  return <>{children}</>;
}

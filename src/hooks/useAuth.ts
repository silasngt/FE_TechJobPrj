import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const [infoUser, setInforUser] = useState<any>(null);
  const [infoCompany, setInforCompany] = useState<any>(null);
  const [infoAdmin, setInfoAdmin] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsLogin(null); // 🔥 reset về trạng thái "đang check"

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/check`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true && res.data) {
          setIsLogin(true);

          // reset role
          setInforUser(null);
          setInforCompany(null);
          setInfoAdmin(null);

          if (res.data.role === 'user') {
            setInforUser(res.data);
          }

          if (res.data.role === 'company') {
            setInforCompany(res.data);
          }

          if (res.data.role === 'admin') {
            setInfoAdmin(res.data);
          }
        } else {
          setIsLogin(false);
          setInforUser(null);
          setInforCompany(null);
          setInfoAdmin(null);
        }
      })
      .catch(() => {
        setIsLogin(false);
        setInforUser(null);
        setInforCompany(null);
        setInfoAdmin(null);
      });
  }, [pathname]);

  return {
    isLogin,
    infoUser,
    infoCompany,
    infoAdmin,
  };
};

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [infoUser, setInforUser] = useState<any>(null);
  const [infoCompany, setInforCompany] = useState<any>(null);
  const [infoAdmin, setInfoAdmin] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/check`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setIsLogin(true);
          // console.log('Auth check data:', res.data);
          if (res.data && res.data.role === 'user') {
            setInforUser(res.data);
            setInforCompany(null);
          }
          if (res.data && res.data.role === 'company') {
            setInforUser(null);
            setInforCompany(res.data);
          }
          if (res.data && res.data.role === 'admin') {
            setInforUser(null);
            setInforCompany(null);
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
    isLogin: isLogin,
    infoUser: infoUser,
    infoCompany: infoCompany,
    infoAdmin: infoAdmin,
  };
};

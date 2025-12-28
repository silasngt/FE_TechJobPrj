import ProtectedLayout from '@/src/app/components/layout/ProtectedLayout';

export default function CompanyManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}

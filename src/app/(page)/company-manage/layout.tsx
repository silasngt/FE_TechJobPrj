import ProtectedLayout from '../../components/layout/ProtectedLayout';

export default function CompanyManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}

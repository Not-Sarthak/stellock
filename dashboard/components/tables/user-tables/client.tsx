'use client';
import { DataTable } from '@/components/ui/data-table';
import { Separator } from '@/components/ui/separator';
import { User } from '@/constants/data';
import { useRouter } from 'next/navigation';
import { columns } from './columns';

interface ProductsClientProps {
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
    </>
  );
};

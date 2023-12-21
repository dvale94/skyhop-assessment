import { ReactNode } from 'react';

type InputSectionProps = {
  children: ReactNode;
  title: string;
};

export default function InputSection({ children, title }: InputSectionProps) {
  return (
    <div className='flex flex-col gap-3 pt-3 pb-3'>
      <p className='text-blue-900 font-bold text-sm'>{title}</p>
      {children}
    </div>
  );
}

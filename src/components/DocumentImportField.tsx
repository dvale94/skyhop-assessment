import Button from '@/src/components/Button';
import Image from 'next/image';

export default function DocumentImportField() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col items-center border rounded-lg p-4 gap-4'>
        <div className='flex flex-col items-center justify-center h-[118px] w-full border-2 border-dashed rounded-lg gap-5'>
          <Image src='/file.svg' alt='File Icon' width={20} height={20} />
          <p className='text-xs'>Drag & Drop Here Or <span className='text-blue-900 font-bold'>Browse</span></p>
        </div>
        <div className='flex w-[200px] h-[30px]'>
          <Button text='Upload Manifest'/>
        </div>
      </div>
      <div className='flex flex-row p-4 border-t-2 border-b-2 gap-4'>
        <Image src='/fileUpload.svg' alt='File Upload Icon' width={40} height={40} />
        <div className='flex flex-row w-full justify-between'>
          <p className='text-xs text-gray-400'>File-test-1023.csv</p>
          <p className='text-xs'>5.7MB</p>
        </div>
      </div>
    </div>
  );
};

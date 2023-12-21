import Image from 'next/image';

export default function Header() {
  return (
    <div className='flex justify-center relative'>
      <div className='absolute -left-12 -top-6 hover:border-b-2 hover:border-t-2 border-blue-900'>
        <Image src='/cancel.svg' alt='Close Button' width={30} height={30} />
      </div>
      <div className='p-2 border-b-2 border-gray-300'>
        <p className='text-2xl md:text-3xl text-blue-900 font-bold'>Document Upload</p>
      </div>
    </div>
  );
}

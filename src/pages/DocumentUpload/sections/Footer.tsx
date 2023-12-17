import Button from '@/src/components/Button';

export default function Footer() {
  return (
    <div className='flex flex-col items-center gap-8'>
      <p className='text-blue-900 font-bold text-center text-lg'>
        Data in the import file is correct. Please press continue to import.
      </p>
      <div className='flex flex-col md:flex-row md:gap-6 gap-3'>
        <Button text='Continue Import' type='submit'/>
        <Button primary={false} text='Cancel' type='reset'/>
      </div>
    </div>
  );
};

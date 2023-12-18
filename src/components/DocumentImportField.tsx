import Button from '@/src/components/Button';

export default function DocumentImportField() {
  return (
    <div>
      <div className='flex flex-col items-center border rounded-lg p-4 gap-4'>
        <div className='h-[118px] w-full border-2 border-dashed rounded-lg'>

        </div>
        <div className='flex w-[200px] h-[30px]'>
          <Button text='Upload Manifest'/>
        </div>
      </div>
    </div>
  )
}
'use client';

import DocumentImportField from '@/src/components/DocumentImportField';
import DocumentDropdownField from '@/src/components/DocumentDropdownField';
import InputSection from '@/src/components/InputSection';
import ToggleSwitch from '@/src/components/ToggleSwitch';
import Image from 'next/image';

export default function ImportSection() {
  return (
    <div className='flex flex-col flex-[50%]'>
      {/* TODO - refactor dropdown */}
      <DocumentDropdownField defaultValue='Select Import Name:' name='importName' options={[{text: 'Name Example 1', value: 'nameExample1'},{text: 'Name Example 2', value: 'nameExample2'}]}/>
      <div className=' border-b-2 w-1/2 pb-5' />

      <InputSection title="Select a manifest that you'd like to import">
        <DocumentImportField />
      </InputSection>
      
      <div className='border-t-2 border-b-2 w-1/2'>
        <InputSection title='Elapse Data Checking:'>
          <p className='text-sm text-green-500'>No Elapse Dates!</p>
        </InputSection>
      </div>
      
      <InputSection title='Tolerance Window:'>
        <div className='flex gap-4'>
          <ToggleSwitch />
          <div className='flex items-center border-l gap-2 pl-4'>
            <Image src='/clock.svg' alt='Clock' width={20} height={20} />
            <p className='text-xs text-gray-500'>Select Tolerance Level</p>
          </div>
        </div>
      </InputSection>
    </div>
  );
};

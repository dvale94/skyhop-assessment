import InputSection from '@/src/components/InputSection';
import DualRadioField from '@/src/components/DualRadioField';
import CentersClientField from '@/src/components/CentersClientField';

export default function OtherSection() {
  return (
    <div className='flex flex-col flex-[50%] -mt-5'>
      <InputSection title='Split Schedule using social distancing?'>
        <DualRadioField
          name='socialDistancing'
          option1Text='Yes'
          option1Value='yes'
          option2Text='No'
          option2Value='no'
        />
      </InputSection>

      <div className='border-t-2 border-b-2 w-4/6'>
        <InputSection title='Location Checking:'>
          <p className='text-sm text-green-500'>All available!</p>
        </InputSection>
      </div>

      <InputSection title='Client:'>
        <CentersClientField />
      </InputSection>
    </div>
  );
}

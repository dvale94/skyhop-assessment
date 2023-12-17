import InputSection from '@/src/components/InputSection';
import DualRadioField from '@/src/components/DualRadioField';

export default function OtherSection() {
  return (
    <div className='flex flex-col gap-10 flex-[50%]'>
      <InputSection title='Split Schedule using social distancing?'>
        <DualRadioField
          name='socialDistancing'
          option1Text='Yes'
          option1Value='yes'
          option2Text='No'
          option2Value='no'
        />
      </InputSection>

      <InputSection title='Location Checking:'>
        <p className='text-sm text-green-500'>All available!</p>
      </InputSection>

      <InputSection title='Client:'>
        <DualRadioField
          name='multipleClients'
          option1Text='Single'
          option1Value='no'
          option2Text='Multiple'
          option2Value='yes'
        />
      </InputSection>
    </div>
  );
};

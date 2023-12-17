import DocumentImportField from '@/src/components/DocumentImportField';
import DocumentDropdownField from '@/src/components/DocumentDropdownField';
import InputSection from '@/src/components/InputSection';
import ToggleSwitch from '@/src/components/ToggleSwitch';

export default function ImportSection() {
  return (
    <div className='flex flex-col gap-10 flex-[50%]'>
      {/* TODO - refactor dropdown */}
      <DocumentDropdownField defaultValue='Select Import Name:' name='importName' options={[{text: 'Name Example 1', value: 'nameExample1'},{text: 'Name Example 2', value: 'nameExample2'}]}/>
      
      <InputSection title="Select a manifest that you'd like to import">
        <DocumentImportField />
      </InputSection>
      
      <InputSection title='Elapse Data Checking:'>
        <p className='text-sm text-green-500'>No Elapse Dates!</p>
      </InputSection>
      
      <InputSection title='Tolerance Window:'>
        <ToggleSwitch />
      </InputSection>
    </div>
  );
};

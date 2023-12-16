import { useFormikContext } from 'formik';
import Dropdown from '@/src/components/Dropdown';
import DocumentImportField from '@/src/components/DocumentImportField';

export default function ImportSection() {
  const { values } = useFormikContext<{importInput: string, otherInput: string}>();
  return (
    <div className='flex flex-col gap-10 border flex-[50%]'>
      <Dropdown />
      <p>Select a manifest that you would like to import</p>
      <DocumentImportField />
    </div>
  )
};

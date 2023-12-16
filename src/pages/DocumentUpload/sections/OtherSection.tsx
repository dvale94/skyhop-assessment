import { useFormikContext } from 'formik';

export default function OtherSection() {
  const { values } = useFormikContext<{importInput: string, otherInput: string}>();
  return (
    <div className='flex border flex-[50%]'>
      {values.otherInput}
    </div>
  )
};

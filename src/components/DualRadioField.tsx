import { Field } from 'formik';

type DualRadioFieldProps = {
  name: string;
  option1Text: string;
  option1Value: string;
  option2Text: string;
  option2Value: string;
};

export default function DualRadioField({
  name,
  option1Text,
  option1Value,
  option2Text,
  option2Value,
}: DualRadioFieldProps) {
  return (
    <div className='flex flex-row gap-4'>
      <div className='flex flex-row gap-1'>
        <Field type='radio' name={name} value={option1Value} className='accent-blue-900' />
        <label className='text-xs'>{option1Text}</label>
      </div>
      <div className='flex flex-row gap-1'>
        <Field type='radio' name={name} value={option2Value} className='accent-blue-900' />
        <label className='text-xs'>{option2Text}</label>
      </div>
    </div>
  );
}

import { Field } from 'formik';

type DropdownProps = {
  defaultValue: string;
  name: string;
  options: {
    text: string;
    value: string;
  }[];
};

export default function DocumentDropdownField({ defaultValue, name, options }: DropdownProps) {
  return (
    <Field as='select' name={name} className='border rounded-lg p-2 cursor-pointer'>
      <option value=''>{defaultValue}</option>
      {/* TODO - refactor map */}
      {options.map(({ text, value }) => (
        <option key={`option-${text}`} value={value}>
          {text}
        </option>
      ))}
    </Field>
  );
}

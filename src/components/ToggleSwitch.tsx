import { useState } from 'react';
import { useFormikContext } from 'formik';

export default function ToggleSwitch() {
  const [toggled, setToggled] = useState(true);
  const { setFieldValue } = useFormikContext();

  const handleChange = () => {
    setFieldValue('toleranceWindow', toggled ? 'off' : 'on');
    setToggled(!toggled);
  };

  return (
    <label className='relative inline-flex items-center cursor-pointer'>
      <input
        type='checkbox'
        name='toleranceWindow'
        value='on'
        className='sr-only peer'
        checked={toggled}
        onChange={handleChange}
      />
      <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-900"></div>
      <label className='ms-3 text-sm'>Toggle {toggled ? 'ON' : 'OFF'}</label>
    </label>
  );
}

import DualRadioField from '@/src/components/DualRadioField';
import DocumentDropdownField from '@/src/components/DocumentDropdownField';
import { useFormikContext } from 'formik';
import { useEffect } from 'react';

export default function CentersClientField() {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    if (values.multipleClients === 'yes') {
      setFieldValue('centersClients', [
        {center: 1, client: ''}, {center: 2, client: ''}, {center: 3, client: ''}, {center: 4, client: ''}
      ])
    }
    else {
      setFieldValue('centersClients', [{center: 1, client: ''}])
    }
    
  }, [values.multipleClients]);

  return (
    <div className='flex flex-col gap-3'>
      <DualRadioField
        name='multipleClients'
        option1Text='Single'
        option1Value='no'
        option2Text='Multiple'
        option2Value='yes'
      />

      {values.centersClients.map((item, index) => (
        <div className='flex items-center justify-between' key={`center-field-${item.center}`}>
          <span className='text-xs'>Testing Center {item.center}</span>
          <div className='flex gap-3'>
            <DocumentDropdownField defaultValue='Select Client' name={`centersClients[${index}].client`} options={[{text: 'Client 1', value: 'client1'},{text: 'Client 2', value: 'client2'}]}/>
          </div>
        </div>
      ))}
    </div>
  );
};

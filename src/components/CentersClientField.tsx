import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { FormFieldValues } from '@/src/views/DocumentUpload/DocumentUpload';

import Image from 'next/image';
import DualRadioField from '@/src/components/DualRadioField';
import DocumentDropdownField from '@/src/components/DocumentDropdownField';

export default function CentersClientField() {
  const { values, setFieldValue } = useFormikContext<FormFieldValues>();

  useEffect(() => {
    if (values.multipleClients === 'yes') {
      setFieldValue('centersClients', [
        { center: 1, client: '' },
        { center: 2, client: '' },
        { center: 3, client: '' },
        { center: 4, client: '' },
      ]);
    } else {
      setFieldValue('centersClients', [{ center: 1, client: '' }]);
    }
  }, [values.multipleClients, setFieldValue]);

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
        <div className='flex items-center gap-12' key={`center-field-${item.center}`}>
          <label className='text-xs'>Testing Center {item.center}</label>
          <div className='flex gap-3'>
            <DocumentDropdownField
              defaultValue='Select Client'
              name={`centersClients[${index}].client`}
              options={[
                { text: 'Client 1', value: 'client1' },
                { text: 'Client 2', value: 'client2' },
                { text: 'Client 3', value: 'client3' },
                { text: 'Client 4', value: 'client4' },
              ]}
            />
            <Image src='/clock.svg' alt='Clock' width={20} height={20} />
          </div>
        </div>
      ))}
    </div>
  );
}

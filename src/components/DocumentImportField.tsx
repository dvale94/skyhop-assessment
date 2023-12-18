import { useRef, useState, useEffect } from 'react';
import { useFormikContext } from 'formik';

import Button from '@/src/components/Button';
import { Field } from 'formik';
import Image from 'next/image';

function formatFileSize(bytes: number) {
  if(bytes == 0) return '0 Bytes';
  var k = 1024,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default function DocumentImportField() {
  const [file, setFile] = useState(null as unknown as File);
  const { values } = useFormikContext();
  const inputRef = useRef(null);

  useEffect(() => {
    if (values.file) {
      setFile(inputRef.current.files[0])
    }
    else {
      setFile(null)
    }
  }, [values.file])

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col items-center border rounded-lg p-4 gap-4'>
        <div
          className='flex flex-col items-center justify-center h-[118px] w-full border-2 border-dashed rounded-lg gap-5 cursor-pointer'
          onClick={() => document.getElementById('fileUpload')?.click()}
        >
          <Image src='/file.svg' alt='File Icon' width={20} height={20} />
          <p className='text-xs'>Drag & Drop Here Or <span className='text-blue-900 font-bold'>Browse</span></p>
          <Field type='file' name='file' id='fileUpload' className='hidden' accept=".csv" innerRef={inputRef}/>
        </div>
        <div className='flex w-[200px] h-[30px]'>
          <Button text='Upload Manifest'/>
        </div>
      </div>
      {file && (
        <div className='flex flex-row p-2 border-t-2 border-b-2 gap-4'>
          <Image src='/fileUpload.svg' alt='File Upload Icon' width={40} height={40} />
          <div className='flex flex-row w-full items-center justify-between'>
            <p className='text-xs text-gray-400'>{file.name}</p>
            <p className='text-xs'>{formatFileSize(file.size)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

import { useRef, useState, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import {useDropzone} from 'react-dropzone'

import Button from '@/src/components/Button';
import Image from 'next/image';
import { FormFieldValues } from '@/src/views/DocumentUpload/DocumentUpload';

function formatFileSize(bytes: number) {
  if(bytes == 0) return '0 Bytes';
  var k = 1024,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export default function DocumentImportField() {
  const [ file, setFile ] = useState<File | null>(null);
  const { values } = useFormikContext<FormFieldValues>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [ field ] = useField('file');
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0])
  });

  useEffect(() => {
    if (values.file && !!inputRef.current?.files) {
      setFile(inputRef.current.files[0])
    }
    else {
      setFile(null)
    }
  }, [values.file]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col items-center border rounded-lg p-4 gap-4'>
        <div
          {...getRootProps({
            className: 'flex flex-col items-center justify-center h-[118px] w-full border-2 border-dashed rounded-lg gap-5 cursor-pointer',
            onClick: () => inputRef.current?.click()
          })}
        >
          <Image src='/file.svg' alt='File Icon' width={20} height={20} />
          {!isDragActive ? (
            <p className='text-xs'>Drag & Drop Here Or <span className='text-blue-900 font-bold hover:underline'>Browse</span></p>
          ): (
            <p className='text-xs'>Drop File</p>
          )}
          <input {...getInputProps({type:'file', className: 'hidden'})} ref={inputRef} {...field}/>
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

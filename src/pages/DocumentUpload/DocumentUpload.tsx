'use client';

import Header from '@/src/pages/DocumentUpload/sections/Header';
import ImportSection from '@/src/pages/DocumentUpload/sections/ImportSection';
import OtherSection from '@/src/pages/DocumentUpload/sections/OtherSection';
import Footer from '@/src/pages/DocumentUpload/sections/Footer';

import { Form, Formik } from 'formik';

export default function DocumentUpload() {
  return (
    <div className='max-w-[2000px] min-w-[1000px]'>
      <Formik 
        initialValues={{importInput: 'Import', otherInput: 'Other'}}
        onSubmit={() => console.log('submitted')}
        onReset={() => console.log('reseted')}
      >
        <Form className='flex flex-col p-16 gap-12 border'>
          <Header />

          <div className='flex md:flex-row flex-col'>
            <ImportSection />
            <OtherSection />
          </div>

          <Footer />
        </Form>
      </Formik>
    </div>
  )
};

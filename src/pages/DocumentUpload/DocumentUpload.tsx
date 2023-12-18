'use client';

import Header from '@/src/pages/DocumentUpload/sections/Header';
import ImportSection from '@/src/pages/DocumentUpload/sections/ImportSection';
import OtherSection from '@/src/pages/DocumentUpload/sections/OtherSection';
import Footer from '@/src/pages/DocumentUpload/sections/Footer';

import { Form, Formik } from 'formik';

export default function DocumentUpload() {
  return (
    <div className='flex flex-col justify-center w-[1100px]'>
      <Formik 
        initialValues={{
          centersClients: [{center: 1, client: ''}, {center: 2, client: ''}, {center: 3, client: ''}, {center: 4, client: ''}],
          importName: '',
          multipleClients: 'yes',
          socialDistancing: 'yes',
          toleranceWindow: 'on'
        }}
        onSubmit={(values) => console.log(values)}
        onReset={() => console.log('reseted')}
      >
        <Form className='flex flex-col p-16 gap-12'>
          <Header />

          <div className='flex md:flex-row flex-col gap-12'>
            <ImportSection />
            <OtherSection />
          </div>

          <Footer />
        </Form>
      </Formik>
    </div>
  );
};

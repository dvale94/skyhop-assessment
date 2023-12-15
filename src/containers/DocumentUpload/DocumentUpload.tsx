import Header from '@/src/containers/DocumentUpload/sections/Header';
import ImportSection from '@/src/containers/DocumentUpload/sections/ImportSection';
import OtherSection from '@/src/containers/DocumentUpload/sections/OtherSection';
import Footer from '@/src/containers/DocumentUpload/sections/Footer';

export default function DocumentUpload() {
  return (
    <div>
      <Header />
      <ImportSection />
      <OtherSection />
      <Footer />
    </div>
  )
};

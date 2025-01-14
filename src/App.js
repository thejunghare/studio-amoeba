import Navbar from './Navbar';
import MainSection from './MainSection';

export default function App() {
  return (
    <div className='flex flex-col h-screen bg-test bg-cover bg-no-repeat	 text-white'>
      <Navbar />
      <MainSection />
    </div>
  );
}


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="max-w-2xl container mx-auto flex flex-col mt-4 items-center justify-center min-h-[50vh]">
          <div className="w-full mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/quotes" element={<Quotes />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

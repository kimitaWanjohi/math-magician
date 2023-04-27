import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

export default function App() {
  return (
    <div className="max-w-2xl container mx-auto flex flex-col mt-4 items-center min-h-screen">
      <Calculator />
      <Quotes />
    </div>
  );
}

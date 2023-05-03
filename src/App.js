import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/calucator",
    element: <Calculator />
  },
  {
    path: "quotes",
    element: <Quotes />
  }
])

export default function App() {
  return (
    <div className="max-w-2xl container mx-auto flex flex-col mt-4 items-center min-h-screen">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full shadow-xl bg-gray-200 flex justify-between items-center px-12 py-10">
      <div className="ml-10 text-2xl">
        Math Magician
      </div>
      <div className="flex items-center justify-around self-end">
        <button onClick={() => navigate("/")} type="button" className="px-2 py-1 hover:scale-105">Home</button>
        <button onClick={() => navigate("/calculator")} type="button" className="px-2 py-1 hover:scale-105">Calculator</button>
        <button onClick={() => navigate("/quotes")} type="button" className="px-2 py-1 hover:scale-105">Qoutes</button>
      </div>
    </nav>
  );
}

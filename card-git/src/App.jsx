import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Form from "./components/Form";
import Card from "./components/Card";
import './index.css';

export default function App() {
  const [user, setUser] = useState("QuincyLarson")
  const { data, isLoading, error } = useFetch(`https://api.github.com/users/${user}`);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effet pour sauvegarder le mode sombre dans le localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(savedMode === 'true');
      console.log(savedMode);
    }
  }, []);

  // Effet pour mettre à jour le localStorage lors du changement du mode sombre
  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    console.log(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`h-screen w-screen flex justify-center flex-col place-items-center gap-3 bg-background ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center text-center">
          <h2 className="font-bold font-mono text-xl text-dark">devfinder</h2>
          <button className="flex items-center gap-3 cursor-pointer" onClick={() => setIsDarkMode(!isDarkMode)}>
            <p className="text-grey font-mono text-lg">DARK</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512" fill="#4a6a9b"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
          </button>
        </div>
        <Form setUser={setUser} />
        {isLoading && <p>Chargement...</p>}
        {error && <p>{error}</p>}
        {data && <Card data={data} />}
      </div>
    </div>
  )
}
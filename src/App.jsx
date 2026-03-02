import { useState, useEffect } from "react";
import "./App.css";
import FormularioContacto from "./components/FormularioContacto";
import ContactoCard from "./components/ContactoCard";

export default function App() {
  const [contactos, setContactos] = useState(() => {
    return JSON.parse(localStorage.getItem("contactos")) || [];
  });

  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(contactos));
  }, [contactos]);

  const agregarContacto = (nuevo) => {
    setContactos((prev) => [...prev, nuevo]);
  };

  const eliminarContacto = (correo) => {
    setContactos((prev) => prev.filter((c) => c.correo !== correo));
  };

  return (
    <main className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-2">
        Agenda ADSO v4
      </h1>

      {/* Badge ADSO */}
      <div className="flex justify-center mb-2">
        <p className="bg-purple-600 text-white text-xs rounded px-2 py-1 w-fit">
          ADSO
        </p>
      </div>

      <p className="text-gray-500 text-center mb-6">
        Interfaz moderna con TailwindCSS
      </p>

      <FormularioContacto agregarContacto={agregarContacto} />
      <div>
        {contactos.map((contacto) => (
          <ContactoCard
            key={contacto.correo}
            contacto={contacto}
            eliminarContacto={eliminarContacto}
          />
        ))}
      </div>
    </main>
  );
}        
import { useState } from "react";

const estadoInicial = {
  nombre: "",
  telefono: "",
  correo: "",
  etiqueta: "",
};

export default function FormularioContacto({ agregarContacto }) {
  const [form, setForm] = useState(estadoInicial);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    
    if (!form.nombre || !form.telefono || !form.correo) {
      alert("Por favor completa los campos obligatorios (*)");
      return;
    }

    agregarContacto(form);
    setForm(estadoInicial); 
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded-lg p-5 flex flex-col gap-4 mb-6"
    >
      <label className="text-sm font-semibold">Nombre *</label>
      <input
        name="nombre"
        value={form.nombre}
        onChange={onChange}
        placeholder="Ej: Ana López"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <label className="text-sm font-semibold">Teléfono *</label>
      <input
        name="telefono"
        value={form.telefono}
        onChange={onChange}
        placeholder="Ej: 3001234567"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <label className="text-sm font-semibold">Correo *</label>
      <input
        name="correo"
        value={form.correo}
        onChange={onChange}
        placeholder="Ej: ana@correo.com"
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <label className="text-sm font-semibold">Etiqueta (opcional)</label>
      <input
        name="etiqueta"
        value={form.etiqueta}
        onChange={onChange}
        placeholder="Ej: Trabajo, Familia..."
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-md transition-colors duration-200"
      >
        Agregar contacto
      </button>
    </form>
  );
}
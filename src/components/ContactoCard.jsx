export default function ContactoCard({ contacto, eliminarContacto }) {
  const { nombre, telefono, correo, etiqueta } = contacto;

  return (
    <article className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      <h3 className="text-lg font-semibold text-purple-800">{nombre}</h3>

      <p className="text-sm text-gray-600">📞 {telefono}</p>
      <p className="text-sm text-gray-600">✉️ {correo}</p>

      {etiqueta && (
        <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
          {etiqueta}
        </span>
      )}

      <button
        onClick={() => eliminarContacto(correo)}
        className="mt-3 text-sm text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        🗑️ Eliminar
      </button>
    </article>
  );
}
export default function Botao({ children }) {
  return (
    <button className="bg-black text-white rounded-full w-80 font-bold flex justify-center items-center gap-5 mb-5 py-3 px-3">
      <span>{children}</span>
    </button>
  );
}

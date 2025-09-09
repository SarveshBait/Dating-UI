export default function Input({ type, placeholder, className = "" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition ${className}`}
    />
  );
}

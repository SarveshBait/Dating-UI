// export default function Button({ children, variant = "primary", className = "" }) {
//     const base = "px-4 py-2 rounded-lg font-semibold transition";
//     const styles = {
//         primary: "bg-primary text-white hover:bg-pink-600",
//         secondary: "bg-secondary text-white hover:bg-green-600",
//         outline: "border border-primary text-primary hover:bg-primary hover:text-white",
//     };

//     return <button className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
// }
export default function Button({ children, className = "" }) {
  return (
    <button
      className={`bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-600 transition ${className}`}
    >
      {children}
    </button>
  );
}

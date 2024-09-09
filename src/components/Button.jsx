const Button = ({ children, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-full px-10 bg-orange-200 py-3 hover:bg-orange-300 text-gray-800 outline-orange-900"
    >
      {children}
    </button>
  );
};

export default Button;

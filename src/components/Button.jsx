const Button = ({ children, type, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="rounded-full font-semibold px-10 bg-orange-200 py-3 h-[48px] hover:bg-orange-300 text-gray-800 outline-orange-900"
    >
      {children}
    </button>
  );
};

export default Button;

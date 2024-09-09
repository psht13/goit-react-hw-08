const Button = ({ children, type, onClick, custom }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${custom} rounded-full font-semibold px-10 bg-orange-200 
      py-3 h-[48px] hover:bg-orange-300 text-gray-800 
      outline-orange-900 text-nowrap`}
    >
      {children}
    </button>
  );
};

export default Button;

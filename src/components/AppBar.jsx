import Navigation from './Navigation';
import AuthNav from './AuthNav';

const AppBar = () => {
  return (
    <div className="w-full border-b-orange-300 border bg-orange-200 h-20 flex items-center justify-center">
      <nav className="w-[80%] flex gap-12 justify-between items-center">
        <Navigation />

        <AuthNav />
      </nav>
    </div>
  );
};

export default AppBar;

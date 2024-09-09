
import NavigationLink from './NavigationLink';

const AuthNav = () => {

  return (
    <>
      <div className="flex gap-4">
        <NavigationLink path={'/login'}>Login</NavigationLink>
        <NavigationLink path={'/register'}>Register</NavigationLink>
      </div>
    </>
  );
};

export default AuthNav;

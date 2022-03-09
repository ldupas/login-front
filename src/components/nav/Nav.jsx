import { Link } from 'react-router-dom';
import { useUser } from '../../contexts/UserProvider';

const Nav = () => {
  const { user } = useUser();

  return (
    <nav>
      <div className="links user-links">
        { !user && (
          <>
            <Link className="link custom-link link-hover" to="/login">Login</Link>
            <Link className="link custom-link link-hover" to="/register">Create Account</Link>
          </>
        )}
        { user && (
          <>
            <Link className="link custom-link link-hover" to="/admin">Admin</Link>
            <Link className="link custom-link link-hover" to="/disconnect">Disconnect</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;

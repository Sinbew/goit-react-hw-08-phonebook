import { Registration } from 'pages/register';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/auth-operations';
import { getIsLogged } from 'redux/auth/auth-selectors';
export const Navigation = () => {
  const isLogged = useSelector(getIsLogged);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
      .unwrap()
      .then(data => console.log(data));

    // if (!isLogged) {
    //   navigate('/login'); // ????????????????????????????????????????????????????????????????????????????????????????????????????
    //   return;
    // }
  };

  return (
    <div className="nav-container">
      <nav className="nav">
        {!isLogged && <NavLink to="/">Sign In</NavLink>}
        {!isLogged && <NavLink to="/login">Log In</NavLink>}
        {isLogged && <NavLink to="/contacts">Contacts</NavLink>}
        {isLogged && <button onClick={handleLogOut}>Log Out</button>}
      </nav>
    </div>
  );
};

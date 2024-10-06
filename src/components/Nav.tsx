import { Link } from 'react-router-dom';
/* const currentPage = useLocation().pathname; */

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className='nav'>
      <div className='nav-item'>
        <Link to="/" className='nav-link'>Home</Link>
      </div>
      <div>
        <Link to="/SavedCandidates" className='nav-link'>Potential Candidates</Link>
      </div>
    </nav> 
  )
};

export default Nav;

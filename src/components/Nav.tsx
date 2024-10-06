import { Link } from 'react-router-dom';
/* const currentPage = useLocation().pathname; */

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/SavedCandidates">Potential Candidates</Link>
      </div>
    </nav> 
  )
};

export default Nav;

import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

export default function NavBar() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchValue) {
      navigate(`/query?category=${searchValue}`);
    }
    setSearchValue('');
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="eye.gif" alt='' width={60} title='game-eye'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/query?category=pc">PC Games</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/query?category=action">Action</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/query?category=MMORPG">MultiPlayer</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/query?category=MOBA">Mobile Games</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/query?category=shooter">Shooter</Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearchSubmit} role="search">
            <input className="form-control me-2" type="search" name='search-category' placeholder="Search Category" aria-label="Search" value={searchValue} onChange={handleSearchInput} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

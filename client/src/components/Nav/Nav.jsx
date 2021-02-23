import React from 'react';
import './Nav.scss';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav">
            <div className="nav__div1">
                <Link to='/' className='nav__link'>Home</Link>
            </div>
            <div className="nav__div2">
                <Link to='/BestOfWinnipeg' className='nav__link'>Best of Winnipeg</Link>
                <Link to='/Restaurants' className='nav__link'>Restaurants</Link>
                <Link to='/LatestNews' className='nav__link'>Latest News</Link>
                <Link to='/Places' className='nav__link'>Places</Link>
                <Link to='/Videos' className='nav__link'>Videos</Link>
                <Link to='/Contests' className='nav__link'>Contests</Link>
                <Link to='/Neighbourhoods' className='nav__link'>Neighbourhoods</Link>
                <Link to='/Patios' className='nav__link'>Patios</Link>
            </div>
            <form className="nav__search">
                <input type="text" name="search" placeholder="Search"></input>
            </form>
        </div>
    )
}

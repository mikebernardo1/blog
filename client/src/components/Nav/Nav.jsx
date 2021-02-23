import React from 'react';
import './Nav.scss';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav">
            <div className="nav__div1">
                <Link to='/'>Home</Link>
            </div>
            <div className="nav__div2">
                <Link to='/BestOfWinnipeg'>Best of Winnipeg</Link>
                <Link to='/Restaurants'>Restaurants</Link>
                <Link to='/LatestNews'>Latest News</Link>
                <Link to='/Places'>Places</Link>
                <Link to='/Videos'>Videos</Link>
                <Link to='/Contests'>Contests</Link>
                <Link to='/Neighbourhoods'>Neighbourhoods</Link>
                <Link to='/Patios'>Patios</Link>
            </div>
            <form className="nav__search">
                <input type="text" name="search" placeholder="Search"></input>
            </form>
        </div>
    )
}

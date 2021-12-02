import React from "react"
import { Link } from "react-router-dom"


const Aside = () => {

    return (
        <React.Fragment>
            <aside >
                <ul>
                    <h4>Movies</h4>
                    <li><Link to="/home/movie" className="link" >Home</Link></li>
                    <li><Link to="/popular/movie" className="link" >Popular</Link></li>
                    <li><Link to="/upcomming/movie" className="link" >Upcomming</Link></li>
                    <li><Link to="/toprated/movie" className="link" >Top Rated</Link></li>
                </ul>
                <ul>
                    <h4>TV</h4>
                    <li><Link to="/home/tv" className="link" >Home</Link></li>
                    <li><Link to="/popular/tv" className="link" >Popular</Link></li>
                    <li><Link to="/toprated/tv" className="link" >Top Rated</Link></li>
                </ul>
            </aside>
        </React.Fragment>
    )



}
export default Aside
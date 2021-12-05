import React from "react"
import axios from "axios"
import { useNavigate } from "react-router"


const apikey = `2debe0f00b477f3d87075013e384ea67`


const Input = ({ type, name, placeholder, onchange }) => {
    const [moviename, getmoviename] = React.useState('')
    const [movielist, getmovielist] = React.useState([])
    const naviagte = useNavigate()

    const handletextfield = (event) => {
        getmoviename(event.target.value);

    }
    const searchmovie = async (movie) => {
        try {
            const api = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${apikey}&query=${movie}`)
            getmovielist(api.data.results);
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        if (moviename || moviename !== '')
            searchmovie(moviename)
    }, [moviename])


    console.log("movie name " + moviename );
    return (
        <React.Fragment>
            <input type={type} name={name} placeholder={placeholder} onKeyUp={handletextfield} />
            <div className={`suggestion ${moviename !== '' ? `show` : `hide`}`}   >
                {moviename !== '' ?
                    movielist.map(ele => ele.backdrop_path ?
                        <div key={ele.id} onClick={() => naviagte(`../moviedetail/${ele.name ? ele.name : ele.title}/${ele.id}`)} >
                            <img src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`} alt={ele.name ? ele.name : ele.title} />
                            <h2>{ele.name ? ele.name : ele.title}</h2></div>
                        : null

                    )
                    : document.querySelector(".suggestion")?.classList.toggle("hide")
                }
            </div>
        </React.Fragment>
    )
}
export default Input
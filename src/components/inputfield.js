import React from "react"
import axios from "axios"
import { useNavigate } from "react-router"


const apikey = `2debe0f00b477f3d87075013e384ea67`


const Input = ({ type, name, placeholder }) => {
    const [moviename, getmoviename] = React.useState('')
    const [movielist, getmovielist] = React.useState([])
    const naviagte = useNavigate()

    const handletextfield = (event) => {

        getmoviename(event.target.value);

    }
    const suggestiononclick = ({ id, name, title }) => {
        document.querySelector(".suggestion").classList.toggle("hide")
        console.log(document.querySelector(".suggestion"));

        naviagte(`../moviedetail/${name ? name : title}/${id}`)
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
        if (moviename.length !== 0 )
            searchmovie(moviename)
        else {
            let temp = movielist
            temp.length = 0
            getmovielist(temp)
        }

    }, [moviename, movielist])


    return (
        <React.Fragment>
            <input type={type} name={name} placeholder={placeholder} onKeyUp={handletextfield} />
            {movielist.length !== 0 ?
                <div className={`suggestion`}  >

                    {movielist.map(ele => ele.backdrop_path ?
                        <div key={ele.id} onClick={() => suggestiononclick(
                            {
                                id: ele.id,
                                name: ele.name,
                                title: ele.title
                            }
                        )} >
                            <img src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`} alt={ele.name ? ele.name : ele.title} />
                            <h2>{ele.name ? ele.name : ele.title}</h2>                        </div>
                        : null)}
                </div>
                : document.querySelector(".suggestion")?.classList.add("hide")
            }






        </React.Fragment>
    )
}


export default Input
import axios from "axios"
import Content from "./content"
import React from "react"

const apikey = `2debe0f00b477f3d87075013e384ea67`

const Similar = ({ id, type }) => {
    const [similar, getsimilar] = React.useState()

    const collections = async (type,id) => {
        try {
            const api = await axios.get(`
            https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${apikey}`)
            getsimilar(api.data.results)
        } catch (error) {
            console.log(error);
        }
    }
    React.useEffect(() => {
        collections(type,id)
    }, [type,id])

    console.log(similar);
    const ui = similar?.map(ele => <Content key={ele.id} id={ele.id} imgpath={`https://image.tmdb.org/t/p/w200${ele.poster_path}`} title={ele.title ? ele.title : ele.name}
    />
    )
    if (ui) {   
        return (
            <div className="collection similar">
            {ui}
            </div>
        )
    }
    return null
}

export default Similar
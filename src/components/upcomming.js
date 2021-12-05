import React from "react"
import Aside from "./aside"
import Content from "./content"
import Header from "./Header"

const Upcomming = ({ data }) => {
    document.title = "Upcomming"

    const ui = data.map(ele => ele.backdrop_path ?
        <Content id={ele.id} key={ele.id} imgpath={`https://image.tmdb.org/t/p/w200${ele.poster_path}`} title={ele.title ? ele.title : ele.name}
            count={ele.vote_count} average={ele.vote_average}
        /> : null   
)
    return (
        <React.Fragment>
            <Header />
            <Aside />
            <section>
                {ui}
            </section>

        </React.Fragment>
    )

}

export default Upcomming
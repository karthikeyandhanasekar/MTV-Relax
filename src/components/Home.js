import { Fragment } from "react"
import Aside from "./aside"
import Content from "./content"
import Header from "./Header"

const Home = ({ data }) => {
    document.title = "Home"
    const ui = data.map(ele => ele.backdrop_path ?
            <Content id={ele.id} key={ele.id} imgpath={`https://image.tmdb.org/t/p/w200${ele.poster_path}`} title={ele.title ? ele.title : ele.name}
                count={ele.vote_count} average={ele.vote_average}
            /> : null   
    )

    return (
        <Fragment>
            <Header />
            <Aside />
            <section>
                {ui}
            </section>
        </Fragment>
    )

}

export default Home
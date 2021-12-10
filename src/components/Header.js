import Input from "./inputfield"



const applntitle = "MTV-Relax"

document.title = applntitle

const Header = () => {

    return (
        <header>

            <div className="firstheader" >
                <span className="burger" onClick={displayaside} >
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </span>
                <h1>{applntitle}</h1>
            </div>
            <div>
                <Input type="search" placeholder="Game of thrones" />
            </div>

        </header>
    )
}
const displayaside = () => {
    document.querySelector("aside").classList.toggle("show")
}


export default Header
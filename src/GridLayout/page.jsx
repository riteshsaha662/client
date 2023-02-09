

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Right from "./Components/Right";
import './css/main.css'

const Page = (props) => {
    const color=props.color
    return(
        <div className="grid-container" style={{backgroundColor: color}}>
            <Header/>
            <Menu/>
            <Footer/>
            <Main/>
            <Right/>
        </div>
    )
}
export default Page
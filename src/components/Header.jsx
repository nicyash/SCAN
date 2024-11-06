import React from "react";
import {Link, Route, Routes,} from 'react-router-dom'



import "../styles/Headers.css";

class Header extends React.Component {
    render() {
        return(
            <div className="headers">
                <div className="headers logo">
                    <img src={require('../img/logo_1.svg')} alt="СКАН"/>
                </div>
                <div className="headers href">
                <Link to="/">Главная</Link>
                    <Link to="/recips">Тарифы</Link>
                    <Link to="/testapp">FAQ</Link>
                </div>
                    <div className="headers logo">

                </div>
                {/* <Routes>*/}
                {/*     <Route path="/testapp" element={<TestApp />} />*/}
                {/*     <Route path="/recips" element={<Recips />} />*/}
                {/*     <Route path="/" element={<Main />} />*/}
                {/*</Routes>*/}
                {/*<RecipFiltr/>*/}
            </div>
        )
    }
}

export default Header;
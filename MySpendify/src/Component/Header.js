import React from 'react'

export default function Header() {
    return (
        <div classNameName="">
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light  nav">
                <div className="container">
                    <a className="navbar-brand" href="#">My Spendify</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link" >Home
                                <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#aboutUs" className="nav-link" >About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#features" className="nav-link">Features</a>
                            </li>
                            <li className="nav-item">
                                <a href="#questions" className="nav-link">Questions</a>
                            </li>
                            <li className="nav-item">
                                <a href="#blog" className="nav-link" >Blog.</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contactUs" className="nav-link" >Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

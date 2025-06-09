import React from "react";

function Footer() {
    return (
        <div className="container-fluid bg-dark ">
            <footer className="">
                <ul className="nav justify-content-center border-bottom pb-3 bg-dark ">
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">FAQs</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link px-2 text-white">About</a>
                    </li>
                </ul>
                <p className="text-center text-white">© 2025 Company, Inc</p>
            </footer>
        </div>
    )
}

export default Footer;
import React from "react";
import rigoImg from "/workspaces/pedro-serrano-camblor-react-landing-page/src/img/rigo-baby.jpg";

function Card() {
    return (
        <div className="container-fluid bg-dark text-white">
            <div className="row bg-dark text-white">
                <div className="classname col-12  bg-dark text-white">
                    <div className="card " style={{ width: "18rem" }}>
                        <img className="card-img-top" src={rigoImg} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
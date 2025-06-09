import React from "react";

// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";

// Create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />

			<div className="bg-dark text-white py-4">
				<div className="container">
					<div className="row g-2">
						<div className="col-12 col-sm-6 col-lg d-flex">
							<Card />
						</div>
						<div className="col-12 col-sm-6 col-lg d-flex">
							<Card />
						</div>
						<div className="col-12 col-sm-6 col-lg d-flex">
							<Card />
						</div>
						<div className="col-12 col-sm-6 col-lg d-flex">
							<Card />
						</div>
					</div>

				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;

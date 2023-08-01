import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="row reloj">
			<div className="col contador">
				<h1>
					<i className="far fa-clock"></i>
				</h1>
			</div>
			<div className="col contador">
				{props.digito6}
			</div>
			<div className="col contador">
				{props.digito5}
			</div>
			<div className="col contador">
				{props.digito4}
			</div>
			<div className="col contador">
				{props.digito3}
			</div>
			<div className="col contador">
				{props.digito2}
			</div>
			<div className="col contador">
				{props.digito1}
			</div>
		</div>
	);
};

export default Home;

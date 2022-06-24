import React from "react";
import { Link } from "react-router-dom";

import { base } from "~/constants";

import $ from "./style.css";

const Home = () => (
	<b>
		home
		<Link to={`${base}flamingo/`}>Flamingo</Link>
		<Link to={`${base}travel/`}>Travel</Link>
		<Link to={`${base}houses/`}>Houses</Link>
		<Link to={`${base}forest/`}>Forest</Link>
		<Link to={`${base}contacts/`}>Contacts</Link>
		<Link to={`${base}rating/`}>Rating</Link>
		<Link to={`${base}faq/`}>Faq</Link>
	</b>
);

export default Home;

import React from "react";

import Seo from "../Seo/Seo";
import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
	return (
		<main>
			<Seo />
			<Navigation />
			{children}
		</main>
	);
};

export default Layout;

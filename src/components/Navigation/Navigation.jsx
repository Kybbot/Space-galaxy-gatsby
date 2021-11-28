import React from "react";
import { Link } from "gatsby";

import { routesConstants } from "../../constants";

import { nav, nav__list } from "./navigation.module.css";

const Navigation = () => {
	return (
		<nav className={nav}>
			<ul className={nav__list}>
				{routesConstants.map((route) => (
					<li className="nav__item" key={route.slug}>
						<Link className="nav__link" to={route.slug}>
							{route.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;

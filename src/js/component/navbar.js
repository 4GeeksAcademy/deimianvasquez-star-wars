import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				<div className="btn-group">
					<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favorite {store.favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						{
							store.favorites.map((item) => {
								return (
									<li className="d-flex px-2">
										<a className="dropdown-item" href="#">{item.properties.name}</a>
										<span onClick={() => actions.deleteFav(item)}><i class="far fa-trash-alt"></i></span>
									</li>
								)
							})
						}

					</ul>
				</div>

			</div>
		</nav>
	);
};

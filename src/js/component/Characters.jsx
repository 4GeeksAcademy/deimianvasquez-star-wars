import React, { useContext } from "react"
import { Context } from "../store/appContext"
import { Link } from "react-router-dom"

import Spinner from "./Spinner.jsx"

const Characters = () => {

    const { store, actions } = useContext(Context)

    return (
        <div className="container">
            <h1 className="text-danger">Character</h1>
            <div className="my-carrusel border border-danger">


                {
                    store.people.length <= 0 ? <Spinner /> :
                        store.people.map((item) => {
                            return (
                                <div key={item._id} className="my-card border border-danger">
                                    <img src="https://placehold.co/300x200" alt="" />
                                    <div className="my-card-body">
                                        <h2>{item.properties.name}</h2>
                                        <p>Gender</p>
                                        <p>other</p>
                                        <p>other</p>
                                    </div>
                                    <div>
                                        <Link to={`/people/${item._id}`}>Leer más</Link>
                                        <button
                                            onClick={() => actions.addFavorites(item)}
                                            className={store.favorites.includes(item) ? "text-danger" : ""}
                                        >add favorite</button>
                                    </div>
                                </div>
                            )
                        })

                }


            </div>

        </div>
    )
}

export default Characters
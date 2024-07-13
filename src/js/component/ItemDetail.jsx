import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


const ItemDetail = () => {
    const { store } = useContext(Context)

    const { nature, id } = useParams()

    const [detail, setdetail] = useState(null)

    const findItem = () => {
        for (let endP of store.endpoints) {
            let result = store[endP].find((item) => item._id == id)
            console.log(result)
            setdetail(result)
        }
    }

    useEffect(() => {
        findItem()
    }, [store.people])

    return (
        <>
            {
                nature === "people" ?
                    <div>
                        <h1>Poople</h1>
                        <p>{detail?.properties?.name}</p>
                    </div> :
                    nature === "planet" ?
                        <h1>Somos los planetas</h1> : null
            }
        </>
    )
}

export default ItemDetail;
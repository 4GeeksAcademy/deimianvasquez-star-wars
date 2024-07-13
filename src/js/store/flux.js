const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			urlBase: "https://www.swapi.tech/api",
			endpoints: ["people"],
			people: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAllData: async () => {
				let store = getStore()
				try {

					for (let endP of store.endpoints) {
						let response = await fetch(`${store.urlBase}/${endP}`)
						let data = await response.json()

						for (let item of data.results) {
							let responseChar = await fetch(`${item.url}`)
							let dataChar = await responseChar.json()

							setStore({
								[endP]: [...store[endP], dataChar.result]
							})
						}

					}


				} catch (error) {
					console.log("Error trying to bring back the info: ", error)
				}
			},
			addFavorites: (fav) => {
				let store = getStore()


				let exists = store.favorites.some((item) => item._id == fav._id)

				if (exists) {
					let newFav = store.favorites.filter((item) => item._id != fav._id)
					setStore({
						favorites: newFav
					})
				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})
				}
			},
			deleteFav: (fav) => {
				let store = getStore()
				let newFav = store.favorites.filter((item) => item._id != fav._id)
				setStore({
					favorites: newFav
				})
			}
		}
	};
};

export default getState;

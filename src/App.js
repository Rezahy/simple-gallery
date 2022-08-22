import "./App.css";
import { useState } from "react";
import SearchPicturesInput from "./components/SearchPicturesInput";
import SearchImage from "./components/SearchImage";
import axios from "axios";

const API_KEY = "29413165-4430936e09ee3c4a2f778769b";
const URL = "https://pixabay.com/api/";
function App() {
	const onSubmitHandler = async (e) => {
		e.preventDefault();
		if (searchInputValue.trim().length === 0) {
			setSearchImagesList(null);
			return;
		}
		// const responseBody = await fetchImagesFromServer();
		const responseBody = await fetchImagesFromServerWithAxios();
		console.log(responseBody);
		setSearchImagesList(responseBody.hits);
	};
	// get request with axios
	const fetchImagesFromServerWithAxios = async () => {
		try {
			const response = await axios.get(
				`${URL}?key=${API_KEY}&q=${searchInputValue}`
			);

			if (response.status === 200) {
				return response.data;
			}
		} catch (e) {
			console.log(e.message);
		}
	};
	// get request with fetch
	const fetchImagesFromServer = async () => {
		try {
			const response = await fetch(
				`${URL}?key=${API_KEY}&q=${searchInputValue}`
			);
			if (response.status === 200) {
				return await response.json();
			}
		} catch (e) {
			console.log(e);
		}
	};

	const [searchInputValue, setSearchInputValue] = useState("");
	const [searchImagesList, setSearchImagesList] = useState(null);

	return (
		<div className="App">
			<form onSubmit={onSubmitHandler} style={{ marginTop: "50px" }}>
				<SearchPicturesInput
					inputValue={searchInputValue}
					onChangedHandler={setSearchInputValue}
					placeholder="search..."
				/>
			</form>

			<div style={{ marginTop: 100 }}>
				{searchImagesList !== null ? (
					searchImagesList.length > 0 ? (
						searchImagesList.map((image) => (
							<SearchImage
								tags={image.tags}
								key={image.id}
								imageUrl={image.largeImageURL}
								userName={image.user}
								userImageUrl={image.userImageURL}
							/>
						))
					) : (
						<p style={{ fontSize: 20 }}>not found</p>
					)
				) : null}
			</div>
		</div>
	);
}

export default App;

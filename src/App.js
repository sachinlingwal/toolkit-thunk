import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./App.css";
import { getPhotos } from "./gallerySlice";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  console.log(photos);

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <p>this is a photo gallery made using redux toolkit and redux thunk</p>
      <hr />
      <div className="Gallery">
        {photos.map((photo) => (
          <img
            src={photo.download_url}
            alt={photo.author}
            key={photo.id}
            width={400}
            height={400}
          />
        ))}
      </div>
      <button>VIEW MORE</button>
    </div>
  );
}

export default App;

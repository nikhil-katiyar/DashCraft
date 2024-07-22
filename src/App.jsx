import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Picture from "./components/Picture";
import Dropbox from "./components/Dropbox";
import "./App.css";

const pictureList = [
  {
    id: 1,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZr3ZgReTYWifTT4rRFIl4h506L_mViQRAQ&s",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_640.jpg",
  },
  {
    id: 3,
    url: "https://static.vecteezy.com/system/resources/thumbnails/009/273/280/small_2x/concept-of-loneliness-and-disappointment-in-love-sad-man-sitting-element-of-the-picture-is-decorated-by-nasa-free-photo.jpg",
  },
];

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex">
        {pictureList.map((pic) => {
          return <Picture id={pic.id} url={pic.url} />;
        })}
      </div>
      <Dropbox />
    </DndProvider>
  );
};

export default App;

import ComicStrip from './components/ComicStrip.js';
import './App.css';
import Notes from './components/Notes.js';
import ChuckNorrisJoke from './components/ChuckNorrisJoke.js';


const noteIds = [1, 2, 3];

function App() {
  return (
    <div className="App">
      <ComicStrip/>
      <Notes noteIds={noteIds} />
      <ChuckNorrisJoke/>

    </div>
  );
}

export default App;

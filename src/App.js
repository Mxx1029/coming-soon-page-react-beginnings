import './App.css';
import Heading from './components/Heading.jsx';
import Teaser from './components/Teaser.jsx';
import Hashtag from './components/Hashtag';

function App() {
  return (
    <div className="App">
      <Heading />
      <Teaser />
      <div class="hashtag-wrapper">
        <Hashtag /><Hashtag /><Hashtag /><Hashtag />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import Heading from './Heading.jsx';
import Teaser from './Teaser.jsx';
import Hashtag from './Hashtag';

function App() {
  return (
    <div className="App">
      <Heading />
      <Teaser />
      <div class="hashtag-wrapper">
        <Hashtag /> <Hashtag /> <Hashtag /> <Hashtag />
      </div>
    </div>
  );
}

export default App;

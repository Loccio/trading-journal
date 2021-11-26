
import Sidebar from './components/sidebar/sidebar';
import Container from './components/container/container';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="flex">
      <Router>
      <Sidebar/>
      <Container/>
      </Router>
      </div>
  );
}

export default App;
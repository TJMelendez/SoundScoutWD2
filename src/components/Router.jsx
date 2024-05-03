import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '/src/pages/HomePage.jsx';
import EventDetails from '/src/pages/EventDetails.jsx';
import EventResults from '/src/pages/EventResults.jsx';
import RequestPromotion from '/src/pages/RequestPromotion.jsx';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' component={ HomePage } />
            <Route exact path='/event-details' component={ EventDetails } />
            <Route exact path='/results' component={ EventResults } />
            <Route exact path='/request-promotion-form' component={ RequestPromotion } />
        </Routes>
    </Router>
  );
}

export default App;

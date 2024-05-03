import Layout from "/src/components/Layout";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '/src/pages/HomePage.jsx';
import EventDetails from '/src/pages/EventDetails.jsx';
import EventResults from '/src/pages/EventResults.jsx';
import RequestPromotion from '/src/pages/RequestPromotion.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route exact path='/' element={ <HomePage /> } />
            <Route exact path='/event-details' element={ <EventDetails /> } />
            <Route exact path='/results' element={ <EventResults /> } />
            <Route exact path='/request-promotion-form' element={ <RequestPromotion/> } />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import CarouselComponent from './components/Carousel';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-fluid p-0">
        <CarouselComponent />
      </div>
      <div className="container">
        <hr /> {/* Horizontal line */}
        <div className="text-center">
          <h2>Movies on Screen</h2>
        </div>
        <div className="container">
          <Cards /> {/* Display the Cards component */}
        </div>
      </div>
    </div>
  );
}

export default App;

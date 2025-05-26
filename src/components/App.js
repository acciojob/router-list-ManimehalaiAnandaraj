
import React from "react";
import ItemList from './ItemDetail';
import ItemDetail from './ItemDetail'
import './../styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
         <Route path="/items/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  )
}

export default App

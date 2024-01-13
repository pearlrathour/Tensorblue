import React from 'react';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Sidebar from './components/sidebar';

export default function App() {
  return (
    <div className="App flex flex-row">
      <Navbar />
      <div className="flex flex-col ml-[4.5%]">
        <Searchbar />
        <div className="flex flex-row">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

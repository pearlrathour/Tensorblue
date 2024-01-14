import React from 'react';
import Navbar from './components/navbar';
import Searchbar from './components/searchbar';
import Sidebar from './components/sidebar';
import Convo from './components/convo';

export default function Home() {
  return (
    <div className="App flex flex-row h-screen">
      <Navbar />
      <div className="flex flex-col ml-[4.5%] w-full">
        <Searchbar />
        <div className="flex flex-col">
          <Sidebar />
          <Convo/>
        </div>
      </div>
    </div>
  );
}

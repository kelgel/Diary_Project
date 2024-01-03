import React, {useState, useEffect} from 'react';
import './App.css';
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList.js";

function App() {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList />
    </div>
  );
}

export default App;

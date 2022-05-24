import React from "react";
import Main from "./Main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Check from "./Check";

function App() {
  let day = new Date().getDay();
  const arr = ["일", "월", "화", "수", "목", "금", "토"];

  const date = [{}, {}, {}, {}, {}, {}, {}];
  date.forEach((i, a) => {
      i.name = arr[(day+a)%7];
  });
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Main date={date} />} />

      <Route path="/day/:day" element={<Check />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

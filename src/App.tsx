import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./views/Detail";
import Home from "./views/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="country/:countryIsoCode" element={<Detail />} />
        <Route path="search/:query" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

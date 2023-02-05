import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/homepage/Home";
import MainModelS from "./components/subpages/model-s/MainModelS";

const App:React.FC = () => {

  return(
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/models" element={<MainModelS />} />
            </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App;
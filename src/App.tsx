import {Route, Routes} from "react-router-dom";
import {Layout} from "./Layout";
import {CreateMemo} from "./pages/CreateMemo";
import {Home} from "./pages/Home";
import "./App.css";

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create-memo" element={<CreateMemo />} />
        </Route>
      </Routes>
  )
}

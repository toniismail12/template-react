import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "@pages";
import { SidebarContext } from "@contexts";
import { useState } from "react";
 
function App() {
  const [show_sidebar, set_show_sidebar] = useState("yes");
  return (
    <SidebarContext.Provider value={{ show_sidebar, set_show_sidebar }}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;

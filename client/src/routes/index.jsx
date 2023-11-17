import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserScreen from "../features/screen/UserScreen";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import AddUser from "../features/screen/AddUser";
import UpdateUser from "../features/screen/UpdateUser";

const Index = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<UserScreen />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Index;

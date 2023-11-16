import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserScreen from "../features/screen/UserScreen";
import Error from "../pages/Error";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const Index = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserScreen />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Index;

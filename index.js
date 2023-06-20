import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./LoginPage";
import SignUp from "./SignupPage";
import Header from "./Header";
import Home from "./HomePage";
import Footer from "./Footer";
import AboutUsPage from "./AboutUS";
import ContactPage from "./ContactUs";
import ContactUs from "./ContactUs";
import PaymentPage from "./Payment";
import ViewTicket from "./ViewTicket";
import BusSchedules from "./busschedule";
import BusSearchPage from "./SearchBus";
import ExampleComponent from "./ConnectServer";
import BookSeat from "./BookSeat";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div><Header/><Login/><Footer/></div>}/>
        <Route path="/Login" element={<div><Header/><Login/><Footer/></div>}/>
        <Route path="/Signup" element={<div><Header/><SignUp/><Footer/></div>}/>
        <Route path="/Home" element={<div><Header/><Home/><Footer/></div>}/>
        <Route path="/Contact" element={<div><Header/><ContactUs/><Footer/></div>}/>
        <Route path="/About" element={<div><Header/><AboutUsPage/><Footer/></div>}/>
        <Route path="/Payment" element={<div><Header/><PaymentPage/><Footer/></div>}/>
        <Route path="/SearchBus" element={<div><Header/><BusSearchPage/><Footer/></div>}/>
        <Route path="/bookseat" element={<div><Header/><BookSeat/><Footer/></div>}/>
        <Route path="/busschedule" element={<div><Header/><BusSchedules/><Footer/></div>}/>
        <Route path="/viewticket" element={<div><Header/><ViewTicket/><Footer/></div>}/>
        <Route path="/Hello" element={<div><Header/><ExampleComponent/><Footer/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//- PAGES und COMPONENTS
import Landingpage from "./pages/Landingpage.jsx";
import LoginRegister from "./pages/LoginRegister.jsx";
import DoctorList from "./components/DoctorList.jsx";

// CONTEXTE importieren für Loadingscreen und Darkmode
import { LoadingContext } from "./context/context";
import { ThemeContext } from "./context/context";
import Loadingscreen from "./pages/Loadingscreen.jsx";
import Appointments from "./pages/Appointments.jsx";
import Protector from "./pages/Protector.jsx";
import SingleDoctor from "./components/SingleDoctor.jsx";
import DetailDoctor from "./pages/DetailDoctor.jsx";
import BookingAppointment from "./pages/BookingAppointment.jsx";
import SpecialityList from "./components/SpecialityList.jsx";
import Navbar from "./components/Navbar.jsx";
import DocProfil from "./pages/DocProfil.jsx";
import EditDoc from "./pages/EditDoc.jsx";

function App() {
  const [theme, setTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <section className={theme ? "dark" : null}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <LoadingContext.Provider value={{ loading, setLoading }}>
            {loading ? (
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Landingpage />} />
                  <Route path="/login" element={<LoginRegister />} />
                  <Route path="/docs" element={<DoctorList />} />
                  <Route path="/:id" element={<DetailDoctor />} />
                  <Route path="/booking/:id" element={<BookingAppointment />} />
                  <Route path="/speciality" element={<SpecialityList />} />
                  //- Die Appointments Page wird vom Protector beschützt. Hier
                  //- wird erst der Token überprüft und sonst ggf. zum Login
                  //-Screen weitergeleitet
                  <Route element={<Protector />}>
                    <Route path="/appointments" element={<Appointments />} />
                    <Route path="/profil" element={<DocProfil />} />
                    <Route path="/edit" element={<EditDoc />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            ) : (
              <Loadingscreen />
            )}
          </LoadingContext.Provider>
        </ThemeContext.Provider>
      </section>
    </>
  );
}

export default App;

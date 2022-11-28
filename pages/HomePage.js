import React from "react";
import OurObj from "../components/OurObj";
import FacultyManagement from "./../components/FacultyManagement";
import AboutUs from "../components/About-Us/AboutUs";
import StudManage from "../components/StudManage";
import Landing from "../components/Landing";
function HomePage() {
  return (
    <div>
            <Landing/>
            <AboutUs />
            <OurObj />
            <div className="Faculty-section min-w-screen min-h-screen font-RedRose font-bold leading-8">
                <FacultyManagement />
                <StudManage />
            </div>
        </div>
  )
}

export default HomePage;

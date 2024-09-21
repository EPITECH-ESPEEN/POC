import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import MetaData from "./layout/MetaData";
import Loader from "./layout/Loader";
import { useGetUsersQuery } from "../redux/api/userApi";
// import { useGetProfileQuery } from "../redux/api/userApi";

const Home = () => {
    const [theme, setTheme] = useState('light');
    const [colorblindMode, setColorblindMode] = useState('emerald');

    const { data, isLoading } = useGetUsersQuery();

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        document.body.classList.add(theme);
        document.body.classList.add(colorblindMode);
    }, [theme, colorblindMode]);

    if (isLoading) return <Loader />;

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
        document.body.classList.toggle('dark', e.target.value === 'dark');
        document.body.classList.toggle('light', e.target.value === 'light');
    };

    const handleColorblindChange = (e) => {
        setColorblindMode(e.target.value);
        document.body.className = `${e.target.value} ${theme}`;
    };

    return (
        <>
        <MetaData title={"Home"} />

        <div>
            <nav className="navbar">

                <div className="selectors">
                    <select id="theme-select" value={theme} onChange={handleThemeChange}>
                        <option value="light">Light Mode</option>
                        <option value="dark">Dark Mode</option>
                    </select>

                    <select id="colorblind-select" value={colorblindMode} onChange={handleColorblindChange}>
                        <option value="emerald">Default Theme</option>
                        <option value="protanopia">Protanopia-Friendly</option>
                        <option value="deuteranopia">Deuteranopia-Friendly</option>
                        <option value="tritanopia">Tritanopia-Friendly</option>
                        <option value="achromatopsia">Achromatopsia-Friendly</option>
                    </select>
                </div>
            </nav>

            <main>
                <h1 className="title">Welcome to the Accessible Emerald Themed Website</h1>
                <p className="text">This is a sample paragraph demonstrating the default and colorblind-friendly themes styled in both light and dark modes.</p>
            </main>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                
            </div>

        </div>
        </>
    );
};

export default Home;
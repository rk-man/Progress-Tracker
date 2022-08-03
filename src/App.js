import Header from "./components/Header";
import Main from "./components/Main";

import { ProgressContextProvider } from "./contexts/ProgressContext";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Post from "./components/Post";

import AboutPage from "./components/AboutPage";

function App() {
    return (
        <ProgressContextProvider>
            {/* HEADER WILL BE DISPLAYED ON ALL ROUTES */}
            <Header />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Main />
                                <Link to="/about">go to about</Link>
                            </>
                        }
                    ></Route>
                </Routes>
                <Routes>
                    <Route path="/about" element={<AboutPage />}></Route>
                    <Route path="/post/*" element={<Post />}></Route>
                </Routes>
            </Router>
        </ProgressContextProvider>
    );
}

export default App;

import Task from "./Task";

import { useNavigate, Routes, Route } from "react-router-dom";

function Post() {
    // const params = useParams();

    const status = 400;
    const navigate = useNavigate();

    if (status === 400) {
        // return (
        //     <>
        //         <Task>
        //             <h1>Hello world</h1>
        //         </Task>
        //     </>
        // );
    }
    const handleClick = () => {
        navigate("/post/show");
    };

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Task>
                            <h1>You are in page</h1>
                            <button onClick={handleClick}>Click Me</button>
                        </Task>
                    }
                ></Route>

                <Route
                    path="/show"
                    element={
                        <Task>
                            <h1>You are in show page</h1>
                        </Task>
                    }
                ></Route>
            </Routes>
        </>
    );
}

export default Post;

import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostByIdPage} from "./pages/PostByIdPage";

let router = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children : [
            {index: true, element: <Navigate to={"/"}/>},
            {path: "todos" , element: <TodosPage/>},
            {path: "albums" , element: <AlbumsPage/>},
            {path: "comments", element: <CommentsPage/>, children: [
                    {path: "post", element:<PostByIdPage/>}
                ]}
        ]},

]);

export {router}
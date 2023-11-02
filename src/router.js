import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostsPage} from "./pages/PostsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";



const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={"users"}/>},
            {
                path: "users", element: <UsersPage/>
            },
            {
                path: "user-details/:id", element: <UserDetailsPage/>, children: [
                    {
                        element: <PostsPage/>
                    }
                ]
            }, {
                path: 'posts-details/:postId', element: <PostDetailsPage/>, children: [
                    { element: <CommentsPage/>}
                ]
            }
        ]
    }
]);

export {router}
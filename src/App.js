import {Route,Routes} from "react-router-dom";
import {AlbumsPages, CommentsPages, PostsPage, TodosPages} from "./pages";
import {MainLayout} from "./layouts";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {RequireAuth} from "./hoc/RequireAuth";

function App() {
  return (
      <div>
        <Routes>
               <Route path={'/'} element={<MainLayout/>}>
            <Route path={'todos'} element={<TodosPages/>}/>
            <Route path={'albums'} element={<AlbumsPages/>}/>
            <Route path={'comments'} element={
                <RequireAuth>
                    <CommentsPages/>
                </RequireAuth>
            }>
                   <Route path={'comments/:postId'} element={<PostsPage/>}/>
            </Route>

            <Route path={'login'} element={<LoginPage/>}/>
               </Route>
        </Routes>
      </div>
  )
}

export {App}

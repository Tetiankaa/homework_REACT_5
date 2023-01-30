import {Route,Routes} from "react-router-dom";
import {AlbumsPages, CommentsPages, PostsPage, TodosPages} from "./pages";
import {MainLayout} from "./layouts";

function App() {
  return (
      <div>
        <Routes>
               <Route path={'/'} element={<MainLayout/>}>
            <Route path={'todos'} element={<TodosPages/>}/>
            <Route path={'albums'} element={<AlbumsPages/>}/>
            <Route path={'comments'} element={<CommentsPages/>}/>
                   <Route path={'comments/:postId'} element={<PostsPage/>}/>
            </Route>
        </Routes>
      </div>
  );
}

export {App};

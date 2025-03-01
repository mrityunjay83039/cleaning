import { RouterProvider } from "react-router-dom";
import frontendRoutes from "./common/routes";
import Loader from "./common/Loader";

function App() {
  return (
    <RouterProvider router={frontendRoutes} fallbackElement={<Loader/>}/>
  );
}

export default App;

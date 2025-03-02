import { RouterProvider } from "react-router-dom";
import frontendRoutes from "./common/routes";
import Loader from "./common/Loader";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider router={frontendRoutes} fallbackElement={<Loader />} />
      <ToastContainer />
    </>
  );
}

export default App;

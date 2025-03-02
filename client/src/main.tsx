import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/bootstrap.min.css";
import "./index.css";
import './assets/css/main.css'
import './assets/css/meanmenu.css'
import './assets/css/default.css'
import './assets/css/swiper-bundle.css'
import './assets/css/venobox.min.css'
import './assets/css/flaticon.css'
import './assets/css/fontawesome.min.css'
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/Store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import ErrorBoundary from "./common/errorBoundary.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);

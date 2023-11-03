import "./App.css";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilitiesConfigurator } from "@/utilities/snackbarManager";
import { Suspense } from "react";
import { Navigation } from "@/routes";
import { Provider } from "react-redux";
import store from "@/redux/store";

function App() {
  return (
    <div className="app">
      <Suspense fallback={<>Cargando</>}>
        <Provider store={store}>
          <SnackbarProvider>
            <SnackbarUtilitiesConfigurator />
            <Navigation />
          </SnackbarProvider>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;

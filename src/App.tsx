
import { Routes, Route, Navigate } from "react-router-dom";
import { Providers } from "./components/Providers";
import { routes } from "./config/routes";

const App = () => {
  return (
    <Providers>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Providers>
  );
};

export default App;

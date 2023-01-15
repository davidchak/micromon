import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom" 
import PageLayout from "@components/layout/PageLayout";
import { routesConstants } from "@utils/constants"; 
import MainPage from "@pages/Main";

const { MAIN_ROUTE } = routesConstants;

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PageLayout/>}
        >
          <Route index element={<MainPage />} />
          {/* <Route
            path={routes.CONSTRUCTOR_ROUTE + "/*"}
            element={<ConstructorController />}
          /> */}
          <Route
            path="*"
            element={<Navigate to={MAIN_ROUTE} replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;

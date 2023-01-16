import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom" 
import { routesConstants } from "~utils/constants"; 
import { initStore } from "~features/AppStore";
import PageLayout from "~components/layout/PageLayout";
import MainPage from "~pages/Main";
import React from "react";

const { MAIN_ROUTE } = routesConstants;

const AppRouter = () => {

  // TODO: переделать на события чтобы по статусу ловить инфу о загрузке сторов
  React.useEffect(() => {
    initStore()
  })

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

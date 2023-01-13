import { Theme, presetGpnDark } from '@consta/uikit/Theme';
import React from "react";
import PageLayout from '@components/layout/PageLayout.ui';


const App = () => {
  return (
    <Theme preset={presetGpnDark} style={{ height: "100%" }}>
      <PageLayout />
    </Theme>
  );
}

export default App;

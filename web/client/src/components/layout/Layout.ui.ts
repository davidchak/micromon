import React from 'react';
import { Outlet } from "react-router-dom";
import { cnMixSpace } from '@consta/uikit/MixSpace';


const PageLayout = () => { 
  const { user } = useAuthStore();

  const withAuth = () => {
    return (
      <>
        <HeaderLayout />
        <Layout style={{height: "calc(100% - 60px)"}}>
          <SideMenu />
          <Layout 
            style={{
              width: "100%",
              backgroundColor: "var(--color-bg-secondary)"
            }}
            className={cnMixSpace({
              p: 'xl',
            })} >
            <Outlet />
          </Layout>
        </Layout>
      </>
    )
  }

  const withoutAuth = () => {
    return (
      <Layout 
        flex={1}
        className={cnMixSpace({
          p: 'xl',
        })} >
        <Outlet />
      </Layout> 
    )
  }
  
  return (
    <Theme preset={presetGpnDefault} style={{height: "100%"}}>
      { user ? withAuth() : withoutAuth() } 
    </Theme>
  );
}

export default PageLayout;

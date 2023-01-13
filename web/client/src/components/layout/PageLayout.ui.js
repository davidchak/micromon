import React from 'react';
import { Outlet } from "react-router-dom";
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Layout } from "@consta/uikit/Layout";
import styles from "./PageLayout.module.scss";
import LeftSideMenu from '../forms/LeftSideMenu';


const PageLayout = () => { 
  return (
    <Layout className={styles["page-layout"]}>
      {/* Header will be there later */}
      <Layout 
        style={{
          width: "100%",
          backgroundColor: "var(--color-bg-secondary)"
        }}>
        <LeftSideMenu />
        <Outlet />
      </Layout>
    </Layout>
  );
}

export default PageLayout;

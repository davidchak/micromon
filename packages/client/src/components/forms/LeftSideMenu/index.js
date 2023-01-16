import LeftSideMenuLevel1 from "./Level1.ui";
import LeftSideMenuLevel2 from "./Level2.ui";
import LeftSideMenuLevel3 from "./Level3.ui";
import styles from "./Styles.module.scss";
import { Layout } from "@consta/uikit/Layout";

const LeftSideMenu = () => {
  // const [level1IsOpen, setLevel1IsOpen] = React.useState(false); 
  // const [level2IsOpen, setLevel1IsOpen] = React.useState(false); 
  // const [level3IsOpen, setLevel1IsOpen] = React.useState(false); 
  
  const level1IsOpen = false;
  const level2IsOpen = false;
  const level3IsOpen = false;

  return (<Layout style={{
          width: "max-content",
        }}
        flex={1} 
        direction="row">
    <div className={styles["left-menu"]}></div>
    { level1IsOpen && <LeftSideMenuLevel1 /> }
    { level2IsOpen && <LeftSideMenuLevel2 /> }
    { level3IsOpen && <LeftSideMenuLevel3 /> }
  </Layout>)
}

export default LeftSideMenu;

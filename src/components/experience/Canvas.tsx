import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { ScrollControls, Scroll } from "@react-three/drei";

import { framerMotionConfig } from "@/config";
import MyLanguageContextProvider from "@/context/languageContext";
import { Interface } from "./interface/Interface";

import { ScrollManager } from "./scrollManger/scrollManger";
import { Menu } from "./menu/Menu";

const Experience = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [languagechange, setLanguagechange] = useState<"en" | "fa">("en");

  const cameraPosition: [x: number, y: number, z: number] = [0, 2, 6];

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);
  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        <Canvas
          className="canvasScrollBarNone"
          shadows
          camera={{ position: cameraPosition, fov: 42 }}
        >
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            {/* <Scroll>
              <MyLanguageContextProvider
                value={{ languagechange, setLanguagechange }}
              >
                <ExperienceMain
                  cameraPosition={cameraPosition}
                  section={section}
                  menuOpened={menuOpened}
                />
              </MyLanguageContextProvider>
            </Scroll> */}
            {/* <Scroll html> */}
              <MyLanguageContextProvider
                value={{ languagechange, setLanguagechange }}
              >
                <Interface setSection={setSection} />
              </MyLanguageContextProvider>
            {/* </Scroll> */}
          </ScrollControls>
        </Canvas>

        <MyLanguageContextProvider
          value={{ languagechange, setLanguagechange }}
        >
          <Menu
            onSectionChange={setSection}
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
          />
        </MyLanguageContextProvider>
      </MotionConfig>
      <Leva hidden />
    </>
  );
};

export default Experience;

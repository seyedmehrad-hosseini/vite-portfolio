"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
} from "@react-three/drei";
import { motion } from "framer-motion-3d";
import PersonModel from "./persons/mehradModel";
import { ScrollManager } from "./scrollManger/scrollManger";
import { useState, useRef, useEffect, useContext } from "react";
import { MotionConfig, animate, useMotionValue } from "framer-motion";
import { Interface } from "./interface/Interface";
import { Menu } from "./menu/Menu";
import { framerMotionConfig } from "../../config";
import { Background } from "./background/Background";
import { Leva } from "leva";
import MyLanguageContextProvider from "@/context/languageContext";
import { LanguageContext } from "@/context/languageContext";
import Laboratory from "./laboratory";
import Office from "./office";

const ExperienceMain = (props) => {
  const { menuOpened, cameraPosition, section } = props;
  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  const characterContainerAboutRef = useRef();
  const firstLoading = useRef(true);
  const personRef = useRef();

  const { viewport } = useThree();

  const { languagechange } = useContext(LanguageContext);

  const cameraPositionX = useMotionValue();
  const cameraPositionZ = useMotionValue();

  const handleCameraSystem = () => {
    let position = {
      x: cameraPosition[0],
      y: cameraPosition[1],
      z: cameraPosition[2],
    };
    // const position1 = { x: 6, y: 2, z: 1 };
    // const position2 = { x: 0, y: 2, z: 5 };
    const position1 = { x: 6, y: 2, z: 1 };
    const position2 = { x: 0, y: 2, z: 8 };
    const langFlag = languagechange === "en";
    menuOpened
      ? ((position.x = langFlag ? position2.x : -position2.x),
        (position.z = position2.z))
      : ((position.x = langFlag ? position1.x : -position1.x),
        (position.z = position1.z));

    if (section == 1) {
      position = {
        x: cameraPosition[0],
        z: 5,
      };
    }

    return { position };
  };

  useEffect(() => {
    animate(cameraPositionX, handleCameraSystem().position?.x, {
      ...framerMotionConfig,
    });
    animate(cameraPositionZ, handleCameraSystem().position?.z, {
      ...framerMotionConfig,
    });
  }, [menuOpened, section]);

  useEffect(() => {
    setCharacterAnimation("Falling");
    if (firstLoading.current) {
      setTimeout(() => {
        setCharacterAnimation(section === 0 ? "Typing" : "");
      }, 0);
    } else {
      setTimeout(() => {
        setCharacterAnimation(section === 0 ? "Typing" : "");
      }, 1000);
    }
    firstLoading.current = false;
  }, [section]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.position.z = cameraPositionZ.get();
    state.camera.lookAt(0, 1, 0);
    if (section == 1) {
      personRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <Background />

      <motion.group
        position={[0.06300000000000001, 0.14400000000000002, -0.513]}
        rotation={[-3.141592653589793, 0.4199999999999999, -3.141592653589793]}
        ref={personRef}
        animate={"" + section}
        transition={{
          duration: 1,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          },
          1: {
            y: -viewport.height -.3,
            x: 0,
            z: 0,
            rotateY: Math.PI,
            scaleX: 0.5,
            scaleY: 0.5,
            scaleZ: 0.5,
          },
        }}
      >
        {/* <PersonModel animation={characterAnimation} /> */}
      </motion.group>

      <ambientLight intensity={1} />
      <motion.group
        position={[0, 0, 0]}
        scale={[0.9, 0.9, 0.9]}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        {/* <Office /> */}
        <group
          renderOrder={0}
          scale={[0.3, 0.3, 0.3]}
          rotation={[0, -Math.PI * 0.5, 0]}
          position={[0, -viewport.height - 0.5, 0]}
        >
          {/* <Laboratory /> */}
        </group>
        <group renderOrder={1} position={[-0.05, -viewport.height + 1.1, 0]}>
        </group>
        <group
          ref={characterContainerAboutRef}
          name="CharacterSpot"
          position={[0.07, 0.16, -0.57]}
          rotation={[-Math.PI, 0.42, -Math.PI]}
        ></group>
      </motion.group>
    </>
  );
};

const Experience = () => {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [languagechange, setLanguagechange] = useState("en");

  let cameraPosition = [0, 2, 6];

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
          camera={{ position: [...cameraPosition], fov: 42 }}
        >
          <color attach="background" args={["#e6e7ff"]} />
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Scroll>
              <MyLanguageContextProvider
                value={{ languagechange, setLanguagechange }}
              >
                <ExperienceMain
                  cameraPosition={cameraPosition}
                  section={section}
                  menuOpened={menuOpened}
                />
              </MyLanguageContextProvider>
            </Scroll>
            <Scroll html>
              <MyLanguageContextProvider
                value={{ languagechange, setLanguagechange }}
              >
                <Interface />
              </MyLanguageContextProvider>
            </Scroll>
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

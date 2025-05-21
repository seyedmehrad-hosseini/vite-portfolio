"use client";
import { LanguageContext } from "@/context/languageContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";

import language from "./language";

export const Menu = ({
  onSectionChange,
  menuOpened,
  setMenuOpened,
}: {
  onSectionChange: (section: number) => void;
  menuOpened: boolean;
  setMenuOpened: (section: boolean) => void;
}) => {
  const { languagechange, setLanguagechange } = useContext(LanguageContext);
  const [transitionpageFlag, setTransitionPageFlag] = useState({
    rerenderMotionId: null,
    flag: false,
  });

  const menuItemHandleChange = (id = 0, sectionNumber = 0) => {
    setMenuOpened(false);
    setTransitionPageFlag({ rerenderMotionId: id, flag: true });
    onSectionChange(sectionNumber);
  };
  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className={`${
          languagechange === "en" ? "right-12 " : "left-12"
        } z-20 fixed top-12  p-3 bg-indigo-600 w-11 h-11 rounded-md`}
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "rotate-45  translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpened ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpened ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`${
          languagechange === "en" ? "right-0 " : "left-0"
        } z-10 fixed top-0  bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label={`${language[languagechange].languageTitle}`} />
          <select
            onChange={(e) => {
              languagechange === "en"
                ? menuItemHandleChange("01", 0)
                : menuItemHandleChange("02", 0);
              setLanguagechange(e.target.value);
            }}
            name="language"
            id="language"
          >
            <option value="en">
              {language[languagechange].languages?.english}
            </option>
            <option value="fa">
              {language[languagechange].languages?.persian}
            </option>
          </select>
          <MenuButton
            label={`${language[languagechange].about}`}
            onClick={() => menuItemHandleChange(1, 0)}
          />
          <MenuButton
            label={`${language[languagechange].skills}`}
            onClick={() => menuItemHandleChange(2, 1)}
          />
          <MenuButton
            label={`${language[languagechange].projects}`}
            onClick={() => menuItemHandleChange(3, 2)}
          />
          <MenuButton
            label={`${language[languagechange].contacts}`}
            onClick={() => menuItemHandleChange(4, 3)}
          />
        </div>
      </div>
      {transitionpageFlag?.flag &&
        transitionPage(transitionpageFlag?.rerenderMotionId)}
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};

const transitionPage = (rerenderMotionId) => {
  return (
    <div key={rerenderMotionId}>
      {/* <motion.div
        className="z-50 fixed bottom-0 left-0 w-full h-[100vh] bg-slate-700 origin-bottom"
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 0,
        }}
        exit={{
          scaleY: 1,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      /> */}
      <motion.div
        className="z-50 fixed top-0 left-0 w-full h-[100vh] bg-slate-700 origin-top"
        initial={{
          scaleY: 1,
        }}
        animate={{
          scaleY: 0,
        }}
        exit={{
          scaleY: 0,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      />{" "}
    </div>
  );
};

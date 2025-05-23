// import { useScroll } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { gsap } from "gsap";
// import { useEffect, useRef } from "react";

// export const ScrollManager = ({
//   section,
//   onSectionChange,
// }: {
//   section: number;
//   onSectionChange: (section: number) => void;
// }) => {
//   const data = useScroll();
//   const lastScroll = useRef(0);
//   const isAnimating = useRef(false);

// useEffect(() => {
//   if (data.fill) {
//     data.fill.classList.add("top-0", "absolute");
//   }
// }, [data.fill]);

//   useEffect(() => {
//     gsap.to(data.el, {
//       duration: 1,
//       scrollTop: section * data.el.clientHeight,
//       onStart: () => {
//         isAnimating.current = true;
//       },
//       onComplete: () => {
//         isAnimating.current = false;
//       },
//     });
//   }, [section]);

//   useFrame(() => {
//     if (isAnimating.current) {
//       lastScroll.current = data.scroll.current;
//       return;
//     }

//     const curSection = Math.floor(data.scroll.current * data.pages);
//     if (data.scroll.current > lastScroll.current && curSection === 0) {
//       onSectionChange(1);
//     }
//     if (
//       data.scroll.current < lastScroll.current &&
//       data.scroll.current < 1 / (data.pages - 1)
//     ) {
//       onSectionChange(0);
//     }
//     lastScroll.current = data.scroll.current;
//   });

//   return null;
// };


"use client";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = ({
  section,
  onSectionChange,
}: {
  section: number;
  onSectionChange: (section: number) => void;
}) => {
  const scroll = useScroll(); 
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (scroll?.fill) {
      scroll.fill.classList.add("top-0", "absolute");
    }
  }, [scroll?.fill]);

  useEffect(() => {
    if (!scroll?.el) return;

    gsap.to(scroll.el, {
      duration: 1,
      scrollTop: section * scroll.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section, scroll?.el]);

  useFrame(() => {
    if (isAnimating.current) return;

    const offset = scroll.offset; 
    const curSection = Math.floor(offset * scroll.pages);

    if (offset > lastScroll.current && curSection === 0) {
      onSectionChange(1);
    }

    if (offset < lastScroll.current && offset < 1 / (scroll.pages - 1)) {
      onSectionChange(0);
    }

    lastScroll.current = offset;
  });

  return null;
};

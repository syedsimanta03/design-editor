import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import InputCard from "./InputCard";
import OutputCard from "./OutputCard";

import {
  staggerReveal,
  staggerRevealClose
} from "./Animations";

const Copywriting = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" }});
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      //fadeInUp(info);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
            <nav>
                <ul>
                  <li>
                    <div className="text-menu">
                        headphone
                    </div>
                  </li>
                  <li>
                  <InputCard/>
                  </li>
                </ul>
              </nav>
              <div className='info'>
              <OutputCard title={'headphone'} content={'Why you need a new headphone?This headphone is comes with clear and comfortable sound. If you are outdoor the earbud can cancel out the outside noise and help you enjoy the music. If you are in the office, there is never disturbing people, perfect for listening to music, video or audio books. And if you are driving, it also can turn into a hands free experience when there\'s a phone call. It\'s up to you. The most important thing is this headphone give you excellent sound that makes your life colorful. The price is worth buying!'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copywriting;
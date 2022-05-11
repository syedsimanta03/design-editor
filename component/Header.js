import React, { useState, useEffect } from "react";
import Copywriting from "./Copywriting";
import ReactShortcut from 'react-shortcut';
import { withRouter, useRouter } from 'next/router'

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu"
  });

  // State of our button
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      setState({ clicked: false, menuName: "Menu" })
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  // Toggle menu
  const handleMenu = () => {
        disableMenu();
        if (state.initial === false) {
          setState({
            initial: null,
            clicked: true,
            menuName: "Close"
          });
        } else if (state.clicked === true) {
          document.querySelector('.hamburger-menu').style.zIndex = '-5'
          setState({
            clicked: !state.clicked,
            menuName: "Menu"
          });
        } else if (state.clicked === false) {
          document.querySelector('.hamburger-menu').style.zIndex = '5'
          setState({
            clicked: !state.clicked,
            menuName: "Close"
          });
        }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <ReactShortcut
              keys={'w'}
              onKeysPressed={handleMenu}
          />
          </div>
        </div>
      </div>
      <Copywriting state={state} />
    </div>
  );
};

export default withRouter(Header);
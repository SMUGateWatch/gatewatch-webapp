import "../styles/global.sass";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Provider } from "next-auth/client";
export default function AppMesh({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <React.Fragment>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  );
}

AppMesh.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

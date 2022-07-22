import React from "react";
import { Route } from "react-router-dom";
import FooterHome from "../components/FooterHome/FooterHome";
import HeaderBefore from "../components/HeaderHome/HeaderBefore";

export default function HomeBeforeTemplate(props) {
  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        return (
          <>
            <HeaderBefore {...propsRoute} />
            <div>
              <props.component {...propsRoute} />
            </div>
            <FooterHome {...propsRoute} />
          </>
        );
      }}
    />
  );
}

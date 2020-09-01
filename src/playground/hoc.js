// Higher order component (hoc) - A component (HOC) that renders another component
// Reuse code
// Render Highjacking
// Prop Manipualtion
// Abstract state

import React from "react";
import ReactDom from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info.Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// requireAuthentication

const requireAuthentication = WrappedComponent => {
  return props => {
    return props.isAuthenticated ? (
      <WrappedComponent {...props} />
    ) : (
      <p>Please authenticate before viewing this information </p>
    );
  };
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDom.render(
//   <AdminInfo info="These are the details" />,
//   document.getElementById("app")
// );

ReactDom.render(
  <AuthInfo isAuthenticated={true} info="These are the details" />,
  document.getElementById("app")
);

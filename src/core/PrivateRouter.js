import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

export default function PrivateRouter(props) {
  const auth = useSelector(state => state.auth)

  if (auth.user) return <Route {...props} />;

  return (
    <Redirect to="/auth" />
  );
}
import React from "react";

import { useViewActions } from "../view-context";
import { login } from "../db";

type Props = {
  onSubmit: () => void;
};

const LoginView: React.FC<Props> = ({ onSubmit }) => {
  // Fake login form, just as an example.
  // If a user submits the form it stores to the local storage that
  // the user is authenticated and redirects to the Main View
  return (
    <div className="columns">
      <div className="column"></div>
      <div className="column login">
        <div className="section">
          <div className="field">
            <div className="control">
              Username
              <input id="title" className="input" type="text" placeholder="Title" />
            </div>
          </div>
          <div className="field">
            <div className="control">
              Password
              <input id="title" className="input" type="password" placeholder="Title" />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-dark" onClick={onSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
};

export const Login = () => {
  const viewActions = useViewActions();
  const onSubmit = () => {
    login();
    viewActions.goToNotesView();
  };
  return <LoginView onSubmit={onSubmit} />;
};

import React from "react";

import SignIn from "../components/sign-in";

export default function Login() {
  return (
    <React.Fragment>
      <SignIn
        content={{
          brand: {
            text: "Dhanai Fruits",
            image: "mui-assets/img/logo-pied-piper-white-icon.png",
            width: "40",
          },
        }}
      />
    </React.Fragment>
  );
}

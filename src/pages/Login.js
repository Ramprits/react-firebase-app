import React from "react";

import SignIn2 from "../components/sign-in";

export default function Login() {
  return (
    <React.Fragment>
      <SignIn2
        content={{
          brand: {
            text: "Dhanai Fruits",
            image: "",
            width: "40",
          },
        }}
      />
    </React.Fragment>
  );
}

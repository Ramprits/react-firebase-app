import React from "react";
import CompleteRegister from "../components/complete-register";
import Title from "../components/Title/Title";

export default function RegisterPage(props) {
  return (
    <React.Fragment>
      <Title title="Complete Register" />
      <CompleteRegister
        content={{
          brand: {
            text: "Dhanai Fruits",
            image: "../mui-assets/img/logo-pied-piper.png",
            width: "200",
            height: "50",
          },
          ...props,
        }}
      />
    </React.Fragment>
  );
}

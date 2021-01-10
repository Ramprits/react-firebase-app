import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { auth } from "../../firebase/firebase.config";

import useStyles from "./styles";
import { comparePassword, validateEmail } from "../../utils/helper";

export default function CompleteRegister(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper.png", width: 40 },
    "02_header": "Complete your registration",
    "02_primary-action": "Sign up",
    "02_secondary-action": "Do you have an account?",
    "02_tertiary-action": "Forgot password?",
    ...props.content,
  };

  useEffect(() => {
    if (localStorage.getItem("emailForRegistration")) {
      setEmail(localStorage.getItem("emailForRegistration"));
    }
    return () => {};
  }, []);
  let brand;

  if (content.brand.image) {
    brand = (
      <img
        src={content.brand.image}
        alt="logo"
        width={content.brand.width}
        height={content.brand.height}
      />
    );
  } else {
    brand = content.brand.text || "";
  }
  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (!validateEmail(email)) {
      alert("please enter valid email address");
      return;
    }

    const result = await auth.signInWithEmailLink(email, window.location.href);
    if (result.user.emailVerified) {
      localStorage.removeItem("emailForRegistration");
      const user = auth.currentUser;
      await user.updatePassword(password);
      const getIdToken = await user.getIdTokenResult();
      console.log(getIdToken);
      content.history.push("/");
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="xs">
      <Box pt={8} pb={10}>
        <Box mb={3} textAlign="center">
          <Link href="/" variant="h4" color="inherit" underline="none">
            {brand}
          </Link>
          <Typography variant="h5" component="h2">
            {content["02_header"]}
          </Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  disabled="true"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  label="Enter your password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label="Enter your confirm password"
                />
              </Grid>
            </Grid>
            <Box my={2}>
              <Button
                type="submit"
                fullWidth
                disabled={isLoading}
                variant="contained"
                color="primary"
              >
                {content["02_primary-action"]}
              </Button>
            </Box>
            <Grid container spacing={2} className={classes.actions}>
              <Grid item xs={12} sm={6}>
                <Link href="#" variant="body2">
                  {content["02_secondary-action"]}
                </Link>
              </Grid>
              <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                <Link href="#" variant="body2">
                  {content["02_tertiary-action"]}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </Container>
  );
}

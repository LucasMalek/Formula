import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import "./button.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navigate } from "react-router-dom";

axios.defaults.withCredentials = true;

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    backgroundImage: "url(/i.jpg)",
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  div: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "25px",
    backgroundColor: "white",
    position: "absolute",
    width: "350px",
    height: "450px",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerbutton: {
    display: "flex",
    width: "210.4px",
    justifyContent: "space-around"
  },
  formulario: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    marginTop: "20%",
    boxShadow: "0 0 3rem"
  },
  idformulario: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
});
function Signin() {
  const classes = useStyles();
  <link href="./button.css"></link>;
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm();
  //State to signin
  const [statesignin, setStatesignin] = useState([false, null]);
  //State to register
  const [stateregister, setStateregister] = useState(false);
  const postsignin = (data) => {
    try {
      axios.post("http://localhost:5000/signin", data).then((response) => {
        var cookies = document.cookie
          .split(";")
          .map((cookie) => cookie.split("="))
          .reduce(
            (acumulator, [key, value]) => ({
              ...acumulator,
              [key.trim()]: decodeURIComponent(value),
            }),
            {}
          );
        delete response.data.user.senha;
        const user = response.data.user;
        {
          user === undefined
            ? alert(response.data)
            : axios
                .post("http://localhost:5000/validate", cookies.token)
                .then((response) => {
                  {
                    typeof response.data != "boolean"
                      ? alert(response.data)
                      : setStatesignin([response.data, user]);
                  }
                });
        }
      });
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className={classes.root}>
      <Box className={classes.div}>
        <div>
          <img src="formula.png"></img>
        </div>
        <div className={classes.formulario}>
        <form   className={classes.idformulario} onSubmit={handleSubmit(postsignin)}>
          <TextField
            label="E-mail"
            variant="outlined"
            className={classes.img}
            name="login"
            {...register("email")}
          />
          <TextField
            label="Senha"
            variant="outlined"
            className={classes.img}
            name="senha"
            {...register("senha")}
          />
          <div className={classes.containerbutton}>
            <div>
              <button class="hover-underline-animation" type="submit">
                Entrar
              </button>
            </div>
            <button
              class="hover-underline-animation"
              onClick={() => setStateregister(true)}
            >
              Registrar
            </button>
          </div>
        </form>
        </div>
      </Box>
      {statesignin[0] == true && (
        <Navigate to={`/User/:${JSON.stringify(statesignin[1])}`} />
      )}
      {stateregister && <Navigate to={"/register"} />}
    </div>
  );
}

export default Signin;

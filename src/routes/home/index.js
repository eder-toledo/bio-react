import React from 'react';
import { Container, Paper, Avatar, Typography } from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './style.css';

const Home = () => (
  <Container fixed className="container">
    <Paper elevation={3}>
      <Avatar className="avatar" sizes="" src="https://eder-toledo.github.io/static/img/profile.png"></Avatar>
      <Typography variant="h5">
        Hola soy <strong>Eder Toledo</strong>, me desempeño como Desarrollador Back-End con experiencia en PHP, C# y Javascript.
      </Typography>
      <Typography variant="body1">
        He participado como asesor en proyectos universitarios, logrando participar en eventos nacionales.
        </Typography>
      <Typography variant="body1">Me gustan los proyectos relacionados con el procesamiento y presentación de información comprensible para el usuario.</Typography>
      <Typography variant="body1">Creo en el potencial que la juventud tiene para la creación de cosas extraordinarias.</Typography>
      <Typography variant="body1">Te invito a conocer algunos de mis <a href="/proyectos"> proyectos</a>.</Typography>
      <Typography variant="body1">Puedes revisar un <a href="/cv">resumen</a> de mi trayectoria y formación académica.</Typography>
      <Typography variant="body1">Puedes contactarme escribiéndome a <a href="http://twitter.com/edertoledo1">@edertoledo1</a> o si prefieres enviarme un <a href="mailto:edertoledon@gmail.com">correo</a>.</Typography>
      <div className="social">
        <a href="http://github.com/eder-toledo">
          <GitHubIcon />
        </a>
        <a href="mailto:edertoledon@gmail.com">
          <MailIcon />
        </a>
        <a href="http://twitter.com/edertoledo1">
          <TwitterIcon />
        </a>
        <a href="http://linkedin.com/in/edertoledo">
          <LinkedInIcon />
        </a>
      </div>
    </Paper>
  </Container>
)

export default Home;
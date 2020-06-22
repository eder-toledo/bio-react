import React from 'react';
import { Container, Grid, Paper, Avatar, makeStyles } from '@material-ui/core'
const Home = () => {

  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <Container fixed className="container">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Avatar className="avatar" sizes="" src="https://eder-toledo.github.io/static/img/profile.png"></Avatar>
              <h1>Eder Toledo</h1>
              <p>
                <a href="tel:+529681040339">+52 9681 040339</a>
              </p>
              <address>
                <a href="https://www.google.co.uk/maps/place/Jiquipilas,+Chis./@16.6717687,-93.6673857,14z/">
                  1a Pte Norte<br />
                    30430<br />
                      Jiquipilas<br />
                </a>
              </address>
              <p>
              </p>
              <p>
                <a href="mailto:edertoledon@gmail.com">edertoledon@gmail.com</a><br />
                <a href="https://github.com/eder-toledo"><i class="fa fa-github"></i> Github</a> /
            <a href="https://twitter.com/edertoledo1"><i class="fa fa-twitter"></i> Twitter</a>
              </p>
          </Paper>
        </Grid>
          <Grid item xs={8}>
            <Paper className={classes.paper}>
              <section class="thirteen columns">
                <h1>Employment</h1>
                <article>
                  <header>
                    <h1>Desarrollador Web y Asistente de Proyectos</h1>
                    <span><address>El Colegio de la Frontera Sur unidad San Cristóbal</address><time>2013 a la actualidad</time></span>
                  </header>
                  <p></p>
                </article>
                <article>
                  <header>
                    <h1>Profesor de la Universidad San Marcos</h1>
                    <span><address>Plantel San Cristóbal</address><time>2016</time></span>
                  </header>
                  <p></p>
                </article>
              </section>

              <section class="thirteen columns">
                <h1>Education</h1>
                <article>
                  <header>
                    <h1>Maestria en Tecnologias en Informática</h1>
                    <span>Universidad descartes</span>
                    <span><address>Chiapas, México</address><time>2014 al 2016</time></span>
                  </header>
                </article>
                <article>
                  <header>
                    <h1>Lic. en Informática</h1>
                    <span>Instituto Tecnológico Superior de Cintalapa</span>
                    <span><address>Chiapas, México</address><time>2008 al 2013</time></span>
                  </header>
                  <p>
                    <em>Especialidad: Comercio electrónico.</em>
                  </p>
                </article>
              </section>

              <section class="thirteen columns">
                <h1>Programming Skills</h1>
                <article>
                  <header>
                    <h1>Software engineering &amp; web development</h1>
                  </header>
                  <p>
                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i>
            &nbsp;&nbsp;<em>C#</em>
                  </p><p>
                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>
            &nbsp;&nbsp;<em>PHP</em>
                  </p>
                  <p>
                    <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half-o"></i><i class="fa fa-star-o"></i>
            &nbsp;&nbsp;<em>Javascript</em>
                  </p>
                </article>
              </section>

              <section class="thirteen columns">

              </section>

              <section class="thirteen columns">
                <h1>Hobbies</h1>
                <article>
                  <p>Música, Películas.</p>
                </article>
              </section>
            </Paper>
          </Grid>
        </Grid>
    </Container>
  );
}

export default Home;
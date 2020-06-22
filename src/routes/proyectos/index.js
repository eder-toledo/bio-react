import React from 'react';
import { Container, Paper, Chip, Grid, Typography, makeStyles } from '@material-ui/core';

import proyectos from "../../data/proyectos.json";

const Home = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      maxWidth: 900,
      margin: `${theme.spacing(3)}px auto`,
      padding: '10px',
      textAlign: 'left',
    },
  }));

  const classes = useStyles();

  return (
    <Container fixed>
      {
        proyectos.map((proyecto, i) => {
          return (
            <Paper key={i} className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs={3}>
                  <Typography>{proyecto.titulo}</Typography>
                  {
                    proyecto.stack.map((tecnologia, i) => {
                      return <Chip key={i} variant="outlined" size="small" label={tecnologia} />
                    })
                  }
                </Grid>
                <Grid item xs={9}>
                  <Typography>{proyecto.descripcion}</Typography>
                </Grid>
              </Grid>
            </Paper>
          )
        })
      }
    </Container >
  )
}

export default Home;
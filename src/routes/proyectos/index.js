import React from 'react';
import { Container, Paper, Chip, Grid, Typography, makeStyles } from '@material-ui/core';

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
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography>Página web ECOSUR</Typography>
            <Chip variant="outlined" size="small" label="Wordpress" />
          </Grid>
          <Grid item xs>
            <Typography>Descripcion</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Typography>Página web ECOSUR</Typography>
            <Chip variant="outlined" size="small" label="Wordpress" />
          </Grid>
          <Grid item xs>
            <Typography>Descripcion</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container >
  )
}

export default Home;
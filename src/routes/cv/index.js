import React from 'react';
import { Container, Grid, Paper, makeStyles } from '@material-ui/core'
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
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
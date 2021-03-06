import MainLayout from '../layouts/MainLayout';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  header: {
    color: '#424242',
    borderBottom: '2px solid #e8e8e8',
    marginBottom: '2rem',
    paddingBottom: '.5rem',
  },
}));

const ExperimentBody = (props) => {
  const classes = useStyles();
  return (
    <MainLayout>
      <div className={classes.header}>
        <Typography variant="h4" component="h2" gutterBottom>
          {props.title}
        </Typography>
      </div>
      {props.children}
    </MainLayout>
  );
};

export default ExperimentBody;

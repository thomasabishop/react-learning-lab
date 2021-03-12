import { makeStyles, Typography, CardMedia, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(() => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'minmax(60px, 80px) 2fr 1fr 80px',
    gridTemplateRows: 'minMax(50px, 70px)',
    padding: '.5rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f3f3f3',
    },
    '&:focus': {
      border: '2px solid #eb445a',
    },

    '@media (max-width: 768px)': {
      gridTemplateColumns: 'minmax(60px, 80px) 2fr 80px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '100%',
    },
    alignItems: 'center',
    minWidth: 0,
    minHeight: 0,
    color: '#424242',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  },

  contentBlock: {
    paddingLeft: '1.5rem',
    display: 'inline-grid',
    alignItems: 'stretch',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '2fr',
    '@media (max-width: 600px)': {
      paddingLeft: '0',
    },
  },
  title: {
    fontSize: '1rem',
    fontWeight: 500,
    '@media (max-width: 600px)': {},
  },
  description: {
    fontSize: '14px',
    fontWeight: 400,
    color: '#737373',
  },
  img: {
    height: '50px',
  },
  tags: {
    justifySelf: 'end',
    '@media (max-width: 768px)': {
      display: 'none',
    },
  },
  chip: {
    margin: '0 .5rem',
  },
  chipBlue: {
    background: 'rgb(56, 128, 255)',
  },
  date: {
    justifySelf: 'end',
    '@media (max-width: 600px)': {
      justifySelf: 'start',
      paddingTop: '.5rem',
      fontSize: '12px',
    },
  },
  link: {
    textDecoration: 'none',
  },
}));

function Listing(props) {
  const classes = useStyles();
  return (
    <Link className={classes.link} to={props.link}>
      <div className={classes.root}>
        <div>
          <CardMedia className={classes.img} image={props.image} />
        </div>

        <div className={classes.contentBlock}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.description}>{props.description}</div>
        </div>

        <div className={classes.tags}>
          {props.taskType !== 'Mini-project' ? (
            <Chip
              size="small"
              color="secondary"
              label={props.taskType}
              className={classes.chip}
            />
          ) : (
            <Chip
              size="small"
              color="secondary"
              label={props.taskType}
              className={classes.chipBlue}
            />
          )}
        </div>
        <Typography className={classes.date}>{props.date}</Typography>
        <Typography></Typography>
      </div>
    </Link>
  );
}

export default Listing;

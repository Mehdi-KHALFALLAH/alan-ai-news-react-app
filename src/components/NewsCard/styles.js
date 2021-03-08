import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: 250,
    "&:hover": {
        
    }
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid #87CEFA',
    backgroundColor: "#fcfcfc",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.6)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
        backgroundColor: " #fbfbff", 
        borderBottom: '10px solid #315ebf', 
        transform: "scale3d(1.05, 1.05, 1)",    
      }
    
  },
  activeCard: {
    borderBottom: '10px solid #22289a',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    
  },
  title: {
    padding: '0 16px',
    color:'black',
    
   
    
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    color : '#4B0082',
    
  },    
});
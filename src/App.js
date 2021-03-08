import React, { useState,useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards.js' ;
import useStyles from './styles.js';

const alanKey = '';
const App = () => {
    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand : ({command,articles}) => {
if ( command ==='newHeadlines') {

    setNewsArticles(articles) ;
}

      }
    });
  }, [])

  return (
    <div>
      <div className={classes.logoContainer}>
        
      <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"  className={classes.alanLogo} alt="alan logo"
      /> </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}
export default App;

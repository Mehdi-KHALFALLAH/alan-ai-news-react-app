import React, { useState,useEffect } from 'react';
import { Typography } from '@material-ui/core';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards.js' ;
import {  Modal } from './components';
import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';

import "react-rain-animation/lib/style.css";

const alanKey = '';
const App = () => {
  
    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle,setActiveArticle] =useState(-1) ;
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand : ({command,articles,number}) => {
if ( command ==='newHeadlines') {

    setNewsArticles(articles) ;
    setActiveArticle(-1) ;
}else if ( command === 'highlight')
setActiveArticle(( prevActiveArticle) =>prevActiveArticle+1) ;
else if (command === 'open') {
  const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
  const article = articles[parsedNumber - 1];

  if (parsedNumber > articles.length) {
    alanBtn().playText('Please try that again...');
  } else if (article) {
    window.open(article.url, '_blank');
    alanBtn().playText('Opening...');
  } else {
    alanBtn().playText('Please try that again...');
  }
}
},
    });
  }, [])

  return (
    
    <div>
     
      <div className={classes.logoContainer}>
      
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [1]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        
      <img src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"  className={classes.alanLogo} alt="alan logo"
      /> </div>
      <NewsCards articles={newsArticles} activeArticle = {activeArticle} />
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body" component="h2">
          
         
            Created by
            <a className={classes.link} href="https://www.linkedin.com/in/mehdi-khalfallah/"> Mehdi Khalfallah</a> -
            <a className={classes.link} href="https://mehdi-khalfallah.github.io/"> Portfolio</a>
          </Typography>
         
        </div>
      ) : null}
    </div>
  );
}
export default App;





import React from 'react'
import NewsCard from '../NewsCard/NewsCard';
import {Grid,Grow,Typography} from '@mui/material';
import './styles.css';

const infoCards = [
  { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
  { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Tell me about Technology.' },
  { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with bitcoin.' },
  { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN.' },
];

const NewsCards = ({articles}) => {
  if (!articles.length) {
    return (
      <Grow in className="card">
        <Grid  container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={6} md={4} lg={3} className="infocard">
              <div  className="card" style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  
  return (
    <Grow in >
        <Grid container alignItems="center" spacing={3}>
        {articles.map((article,i) =>{
            return(
                <Grid item xs={12} sm={6} md={4} lg={3} >
                    <NewsCard article={article} i={i} style={{display:'flex'}} />
                </Grid>
             )
        })}
        </Grid>
        
    </Grow>
  )
}

export default NewsCards;
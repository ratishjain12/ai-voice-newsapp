import React from 'react'
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@mui/material';
import './styles.css';
const NewsCard = ({article:{description,publishedAt,source,title,url,urlToImage},i}) => {
  return (
    <Card >
      <CardActionArea>
        <CardMedia className='media' image={urlToImage||"https://media.istockphoto.com/vectors/breaking-news-vector-illustration-poster-banner-logo-badge-on-white-vector-id891605714?b=1&k=20&m=891605714&s=612x612&w=0&h=HR6jezIN5wQ7B8imsxws65esrjQTEUIu8IAY38f4ZQc="}/>
        <div style={{display:"flex"}}>
          <Typography variant="body2" color='textSecondary' marginRight={2} component="h2">{new Date(publishedAt).toDateString()}</Typography>
          <Typography variant="body2" color='textSecondary' component="h2">{source.name}</Typography>
        </div>
        <Typography gutterBottom variant="h6" className="title">{title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" class="body">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea style={{display:'flex', justifyContent:'space-between',paddingLeft:'2px',paddingRight:'2px'}}>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant="h5" color="textSecondary">{i+1}</Typography>
      </CardActionArea>
    </Card>
  )
}

export default NewsCard;
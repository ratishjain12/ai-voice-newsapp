import React ,{useEffect,useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import './App.css';
import NewsCards from './components/NewsCards/NewsCards';
const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const apiKey = '0952b93ab4e0806535865de424de343f2e956eca572e1d8b807a3e2338fdd0dc/stage';
  useEffect(() => {
    alanBtn({
      key:apiKey,
      onCommand:({command, articles, number})=>{
          if(command === 'newHeadlines'){
            setNewsArticles(articles);
          }else if(command === 'open'){
            window.open(articles[number].url, '_blank');
          }
          
      }
    })
  }, [])
  

  
  return (
    <div>
       <img className="img" src="https://www.kindpng.com/picc/m/396-3969430_news-icon-icon-news-logo-hd-png-download.png" alt="logo"/>
        <NewsCards articles={newsArticles}/>
       
       
       
    </div>
  )
}

export default App;
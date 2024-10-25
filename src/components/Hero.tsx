import {useState, useEffect} from 'react';
import axios from 'axios';

function Hero() {
  const [quote, setQuote] = useState('Loading...');
  const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
  const apiKey = 'PpJ4or7yTd6DYUPyN+PSLg==79qflFeIPJG91CDF';

  useEffect(() => {
    axios.get(url, {
      headers: {
        'X-Api-Key': apiKey
      }
    }).then((res) => {
      setQuote(res.data[0].quote);
    });

  }, []);

  return (
    <section className="hero">
      <div className="image"></div>
      <div className="hero-text">
        <h4>Software Developer</h4>
        <p>Code the world...</p>
        <p className="text-center">{quote}</p>
      </div>
      <div>
      </div>
    </section>
  )
}

export default Hero;
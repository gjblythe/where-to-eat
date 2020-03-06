import {Request, Response} from 'express';
import fetch from 'node-fetch';

export default (req: Request, res: Response) => {
  const params = {
    latitude: 33.652930,
    longitude: -111.931450,
    limit: 1,
    radius: 3000,
  }
  const options = { 
    headers: { Authorization: `Bearer ${process.env.API_Key}` } 
  };
  const {latitude, longitude, limit, radius} = params;
  const searchString =  `&latitude=${latitude}&longitude=${longitude}&limit=${limit}&radius=${radius}`;
  const search = `https://api.yelp.com/v3/businesses/search?term='food'${searchString}`;
  fetch(search, options).then(res => res.json()).then(data => res.send)
};

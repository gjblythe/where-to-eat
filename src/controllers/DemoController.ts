import {OK, BAD_REQUEST} from 'http-status-codes';
import {Controller, Get} from '@overnightjs/core';
import {Logger} from '@overnightjs/logger';
import {Request, Response} from 'express';
import fetch from 'node-fetch';

@Controller('api/say-hello')
class DemoControler {

  public static readonly SUCCESS_MSG = 'hello ';
  public static readonly SUCCESS_LOCATION = 'Location Fetched...';

  @Get(':name')
  private sayHello(req: Request, res: Response) {
    try {
      const {name} = req.params;
      if (name === 'make_it_fail') {
        throw Error('User triggered failure');
      }
      Logger.Info(DemoControler.SUCCESS_MSG + name);
      return res.status(OK).json({
        message: DemoControler.SUCCESS_MSG + name,
      });
    } catch (err) {
      Logger.Err(err, true);
      return res.status(BAD_REQUEST).json({
        error: err.message,
      });
    }
  }

  @Get('')
  private get(req: Request, res: Response) {
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
    try {
      const locations = fetch(search, options).then(res => res.json()).then(data => res.send())
      Logger.Info(DemoControler.SUCCESS_LOCATION)
      return res.status(OK).json({
        message: DemoControler.SUCCESS_LOCATION,
        locations
      });
    } catch(err) {
      Logger.Err(err, true);
      return res.status(BAD_REQUEST).json({
        error: err.message,
      })
    }
  }
  
}


export default DemoControler;

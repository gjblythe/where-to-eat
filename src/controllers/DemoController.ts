import {OK, BAD_REQUEST} from 'http-status-codes';
import {Controller, Get} from '@overnightjs/core';
import {Logger} from '@overnightjs/logger';
import {Request, Response} from 'express';
import fetch from 'node-fetch';
import {config} from 'dotenv';

config();

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
const zipLocal = `https://api.yelp.com/v3/businesses/search?term='food'&location=`
@Controller('api/location')
class DemoControler {

  public static readonly SUCCESS_MSG = 'Zipcode ';
  public static readonly SUCCESS_LOCATION = 'Location Fetched...';

  @Get(':zip')
  private getLocationByZip(req: Request, res: Response) {
    const {zip} = req.params;
    fetch(zipLocal.concat(zip), options)
    .then(res =>  res.json()).then(data =>
      {
        const locations = data
      try {
        if (zip === 'make_it_fail') {
          throw Error('User triggered failure');
        }
        Logger.Info(DemoControler.SUCCESS_MSG + zip);
        return res.status(OK).json({
          message: DemoControler.SUCCESS_MSG + zip,
          locations,
        });
      } catch (err) {
        Logger.Err(err, true);
        return res.status(BAD_REQUEST).json({
          error: err.message,
        });
      }
    }
    )
  }

  @Get('')
  private getAllLocations(req: Request, res: Response) {
    fetch(search, options)
    .then(res =>  res.json())
    .then(data => {
      const locations = data
      try {
        Logger.Info(DemoControler.SUCCESS_LOCATION)
        return res.status(OK).json({
          message: DemoControler.SUCCESS_LOCATION,
          locations,
        })
      } catch(err) {
        Logger.Err(err, true);
        return res.status(BAD_REQUEST).json({
          error: err.message,
        })
      }
    });
  }
}


export default DemoControler;

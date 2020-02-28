import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import DemoControler, * as controllers from '../src/controllers/DemoController';
import {Server} from '@overnightjs/core';
import {Logger} from '@overnightjs/logger';

class DemoServer extends Server {

  private readonly SERVER_START_MSG = 'Server has started on port: ';
  private readonly DEV_MES = 'Express server is running in development mode. ' +
    'No front-end content is being served.';


  constructor() {
    super(true);
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: true}));
    super.addControllers(new DemoControler());
    if (process.env.NODE_ENV !== 'production') {
      const msg = this.DEV_MES + process.env.EXPRESS_PORT
      this.app.get('*', (req, res) => res.send(msg));
    }
  }

  private setupControllers(): void {
    const ctlrInstances = [];
    for (const name in controllers) {
      if (controllers.hasOwnProperty(name)) {
        const controller = (controllers as any)[name];
        ctlrInstances.push(new controller());
      }
    }
    super.addControllers(ctlrInstances);
  }

  public start(port: number): void {
    this.app.listen(port, ()=> {
      Logger.Imp(this.SERVER_START_MSG + port);
    });
  }
}

export default DemoServer;

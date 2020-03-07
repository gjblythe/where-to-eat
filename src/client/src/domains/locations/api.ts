import {ILocationProps} from './index';

const Api = { // come back to this
   getLocationZip: async(query: string) => {
    const response = await fetch(`/api/location/${query}`);
    try {
      response.json()
      .then((res: ILocationProps) => {return (res)})
    } catch(err) {
      throw err;
    }
  },
  getAllLocations: async () => {
    const response = await fetch('/api/location')
    try {
      response.json()
      .then((res: ILocationProps) => res)
    } catch(err) {
      throw err;
    }
  }
}
export default Api; 

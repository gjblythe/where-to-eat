export interface ILocationProps{
  id: string;
  alias: string;
  name: string;
  rating: string;
  is_closed: boolean;
  image_url: string;
  location: {
    display_address: [],
  };
}

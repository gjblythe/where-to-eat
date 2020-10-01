export interface ILocationProps {
  id: string;
  alias: string;
  name: string;
  rating: string;
  is_closed: boolean;
  image_url: string;
  price: string;
  url: string;
  location: {
    display_address: [],
  };
}

export interface ISearchProps {
  searchQuery: string;
  limit: number;
  text: string;
}

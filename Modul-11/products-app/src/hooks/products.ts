export type Products = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  reviews: [{ rating: number; comment: string }];
  thumbnail: string;
  availabilityStatus: string;
  shippingInformation: string;
};

export type ProductsAction = { type: "SET_PRODUCTS"; payload: Products[] } | { type: "ADD_PRODUCTS"; payload: Products };

export function products(state: Products[], action: ProductsAction) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return action.payload;

    case "ADD_PRODUCTS":
      return [action.payload, ...state];

    default:
      return state;
  }
}

export type Products = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  review: [{ rating: number; comment: string }];
  images: string;
};
type FormProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  brand: string;
  reviewRating: number;
  reviewComment: string;
  images: string;
};
export const initialAddProductsForm = {
  title: "",
  description: "",
  category: "",
  price: 0,
  stock: 0,
  brand: "",
  reviewRating: 0,
  reviewComment: "",
  images: "",
};

export type ProductsAction = { type: "SET_PRODUCTS"; payload: Products[] } | { type: "ADD_PRODUCTS"; payload: Products };

export type AddProductsAction = { type: "SET_FIELD"; field: keyof FormProduct; value: string | number } | { type: "RESET" };

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

export function addProducts(state: FormProduct, action: AddProductsAction) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };

    case "RESET":
      return initialAddProductsForm;
    default:
      return state;
  }
}

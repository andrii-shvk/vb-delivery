export const getProductItem = (store) => store.product.product;
export const getProductItemLoading = (store) => store.product.isLoading;
export const getProductItemError = (store) => store.product.error;
export const getProductItemPrice = (store) => store.product.price;

// Pizza
export const getProductItemPizzaSize = (store) => store.product.size;
export const getProductItemPizzaType = (store) => store.product.type;

// Rolls
export const getProductItemRolls = (store) => store.product.quantity;

// Burgers
export const getProductItemBurgers = (store) => store.product.quantity;

// Others
export const getProductItemClearProduct = (store) => store.product.clearProduct;
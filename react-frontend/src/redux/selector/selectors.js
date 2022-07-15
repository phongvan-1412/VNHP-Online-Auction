export const productSelector = (state) => {
  const products = state.product.products.filter((product) => {
    return product.category_name.includes(state.product.filter.category_name);
  });

  return products;
};

export const categorySelector = (state) => {
  const tmpCategories = state.categories.categories.filter((category) => {
    return category.category_root_name.includes(
      state.categories.filter.category_name
    );
  });
  return tmpCategories;
};

export const productSlideCategorySelector1 = (state) => {
  const productSlideCates = state.product.products.filter((products) => {
    return products.category_name.includes(state.product.filter1.category_name);
  });
  return productSlideCates;
};

export const productSlideCategorySelector2 = (state) => {
  const productSlideCates = state.product.products.filter((products) => {
    return products.category_name.includes(state.product.filter2.category_name);
  });
  return productSlideCates;
};

export const productSlideCategorySelector3 = (state) => {
  const productSlideCates = state.product.products.filter((products) => {
    return products.category_name.includes(state.product.filter3.category_name);
  });
  return productSlideCates;
};

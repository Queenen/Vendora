const BASE_URL = "https://v2.api.noroff.dev/online-shop/";

const getProductIdFromQuery = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
};

export const fetchProductById = async () => {
  try {
    const productId = getProductIdFromQuery();
    if (!productId) {
      throw new Error("Product ID not found in query string");
    }
    const url = `${BASE_URL}${productId}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};



// Store user data in local storage
export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
}

// Retrieve user data from local storage
export const getUserFromLocal = () => {
  const user = localStorage.getItem('user');
  return user === null ? null : JSON.parse(user);
}

// Remove user data from local storage
export const removeUserFromLocal = () => {
  localStorage.clear();
}


// Store cart data in local storage
export const setCarts = (carts) => {
  localStorage.setItem('carts', JSON.stringify(carts));
}

// Retrieve cart data from local storage
export const getCartsFromLocal = () => {
  const carts = localStorage.getItem('carts');
  return carts === null ? [] : JSON.parse(carts);
}

// Remove cart data from local storage
export const removeCartsFromLocal = () => {
  localStorage.removeItem('carts');
}
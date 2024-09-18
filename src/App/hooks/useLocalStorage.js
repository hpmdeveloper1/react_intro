import React from "react";

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem = JSON.parse(localStorageItem);

  //Si está vacio, inicializamos el array
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
  } else {
    parseItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parseItem);

  const handlerSaveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, handlerSaveItem];
}

export { useLocalStorage };

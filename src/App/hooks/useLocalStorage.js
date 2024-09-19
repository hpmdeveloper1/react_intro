import React from "react";

function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  //Simular tiempo de carga
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem = JSON.parse(localStorageItem);

        //Si está vacio, inicializamos el array
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          setItem(parseItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 3000)
  }, []);

  const handlerSaveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  console.log("ITEM", item)

  return {item, handlerSaveItem, loading, error};
}

export { useLocalStorage };

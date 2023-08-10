import React, { createContext, useContext, useState } from 'react';

const AddressContext = createContext();

export const useAddressContext = () => {
  return useContext(AddressContext);
};

export const AddressProvider = ({ children }) => {
  const [shippingAddress, setShippingAddress] = useState(null);

  return (
    <AddressContext.Provider value={{ shippingAddress, setShippingAddress }}>
      {children}
    </AddressContext.Provider>
  );
};

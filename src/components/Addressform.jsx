import React, { useState } from 'react';

const AddressForm = ({ onAddressAdded }) => {
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation on the address fields before adding it.
    // Assuming the address is validated, you can then proceed to add it.
    onAddressAdded(address);
    setAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button type="submit">Add Address</button>
    </form>
  );
};

export default AddressForm;

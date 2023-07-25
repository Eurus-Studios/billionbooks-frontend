import React from 'react';

const Account = () => {
  return (
    <div className="p-8 mx-auto">
     
      <div className="mb-4">
        <div className="flex flex-row">
          <div className="flex-grow flex flex-col mr-2">
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="firstName">
              First Name<span className="text-red-500"> *</span>
            </label>
            <input
              className="w-full px-4 py-2 border-2 focus:outline-none focus:border-gray-300"
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
            />
          </div>
          <div className="flex-grow flex flex-col">
            <label className="block text-gray-600 font-semibold mb-1" htmlFor="lastName">
              Last Name<span className="text-red-500"> *</span>
            </label>
            <input
              className="w-full px-4 py-2 border-2 - focus:outline-none focus:border-gray-200"
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
            />
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col mr-2">
        <label className="block text-gray-600 font-semibold mb-1" htmlFor="displayName">
          Display Name <span className="text-red-500"> *</span>
        </label>
        <input
          className="w-full px-4 py-2 border-2 focus:outline-none focus:border-gray-300"
          type="text"
          id="displayName"
          name="displayName"
          placeholder="Enter your name"
        />

        <p className='italic my-2 mb-6'>This will be how your name will be displayed in the account section and in reviews</p>
      </div>


      <div className="flex-grow flex flex-col mr-2">
        <label className="block text-gray-600 font-semibold mb-1" htmlFor="emailAddress">
          Email Address<span className="text-red-500"> *</span>
        </label>
        <input
          className="w-full px-4 py-2 border-2 focus:outline-none focus:border-gray-300"
          type="text"
          id="emailAddress"
          name="emailAddress"
          placeholder="Enter your mail"
        />

       
      </div>

          {/* Password Change section */}
          <div className="border-2 border-gray-200 mt-20 my-10 relative">
      <div className="flex justify-center">
    <h1 className="font-semibold absolute top-0 transform  ptitle px-4 popinsfont text-2xl bg-white">
      Password Change
    </h1>
  </div>


  <div className="p-12 ">
    <div className="mb-4">
      <label className="block text-gray-600 font-semibold mb-1" htmlFor="currentPassword">
        Current Password (leave blank to leave unchanged)
      </label>
      <input
        className="w-full px-4 py-2 border-2 focus:outline-none focus:border-gray-200"
        type="password"
        id="currentPassword"
        name="currentPassword"
        placeholder="Enter your current password"
      />
    </div>
    <div className="mb-4">
      <label className="block latofont text-gray-600 font-semibold mb-1" htmlFor="newPassword">
        New Password (leave blank to leave unchanged)
      </label>
      <input
        className="w-full px-4 py-2 border-2 focus:outline-none focus:border-blue-500"
        type="password"
        id="newPassword"
        name="newPassword"
        placeholder="Enter your new password"
      />
    </div>
    <div className="mb-8">
      <label className="block text-gray-600 font-semibold mb-1" htmlFor="confirmNewPassword">
        Confirm New Password
      </label>
      <input
        className="w-full px-4 py-2 border-2 focus:outline-none focus:border-blue-500"
        type="password"
        id="confirmNewPassword"
        name="confirmNewPassword"
        placeholder="Confirm your new password"
      />
    </div>
    <button className="bluebg hover:bg-blue-900 text-white font-semibold py-2 px-4 ">
      Save Changes
    </button>
  </div>
</div>


    </div>
  );
};

export default Account;
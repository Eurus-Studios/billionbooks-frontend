import { useState } from "react";
import { UserAuth } from "@/context/AuthContext";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { BsGoogle } from "react-icons/bs";

const SideLoginBar = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, googleSignIn, emailPasswordSignIn, logOut } = UserAuth();
  const Router = useRouter();
  const [isSideLoginOpen, setIsSideLoginOpen] = useState(false);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailPasswordSignIn = () => {
    try {
      emailPasswordSignIn(username, password);

      // onClose();

      Router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignIn = () => {
    console.log("I was clicked for logun");
    googleSignIn()
      ?.then((data) => {
        // Close the side login bar on successful login
        console.log("Data affter login", data);
        onClose();
        // Redirect the user to the /dashboard page
        console.log("trying to push");
        Router.push("/dashboard");
        console.log("Pushed ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSignOut = async () => {
  //   try {
  //     await logOut();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  
  return (
    <div>
    <div
      className={`overlay ${isSideLoginOpen ? 'active' : ''}`}
      onClick={onClose}
    ></div>

    <div className="fixed top-0  right-0 h-full bg-white w-80 shadow-lg overflow-y-auto z-50">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={handleEmailPasswordSignIn}
        >
          Sign In
        </button>
        <p className="mt-2 text-gray-600 text-sm">
          Don't have an account? <a href="#">Sign up</a>
        </p>
        <div className="mt-4">
          <button
            className="justify-center align-middle bg-red-600 flex w-full text-white px-4 py-2 rounded-md hover:bg-red-700 mr-3"
            onClick={handleSignIn}
          >
            <BsGoogle className=" text-center mt-1 mr-2 text-white" />
            Sign in with Google
          </button>

          {/* <button className="bg-black my-2 w-full text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Sign in with Apple
          </button> */}
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    </div>
  );
};

export default SideLoginBar;

// import { useState } from "react";
// import { UserAuth } from "@/context/AuthContext";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// import { BsGoogle } from "react-icons/bs";

// const SideLoginBar = ({ onClose }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const { user, googleSignIn, logOut } = UserAuth();
//   const Router = useRouter();

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSignIn = () => {
//     console.log("I was clicked for logun")
//     googleSignIn()
//       ?.then((data) => {
//         // Close the side login bar on successful login
//         console.log("Data affter login",data)
//         onClose();
//         // Redirect the user to the /dashboard page
//         console.log("trying to push");
//         Router.push("/dashboard");
//         console.log("Pushed ");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   // const handleSignOut = async () => {
//   //   try {
//   //     await logOut();
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   return (
//     <div className="fixed top-0  right-0 h-full bg-white w-80 shadow-lg overflow-y-auto z-50">
//       <div className="px-6 py-4">
//         <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
//         <div className="mb-4">
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Username
//           </label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             className="mt-1 p-2 w-full border rounded-md"
//           />
//         </div>
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//           Sign In
//         </button>
//         <p className="mt-2 text-gray-600 text-sm">
//           Don't have an account? <a href="#">Sign up</a>
//         </p>
//         <div className="mt-4">
//           <button
//             className="justify-center align-middle bg-red-600 flex w-full text-white px-4 py-2 rounded-md hover:bg-red-700 mr-3"
//             onClick={handleSignIn}
//           >
//             <BsGoogle className=" text-center mt-1 mr-2 text-white" />
//             Sign in with Google
//           </button>

//           {/* <button className="bg-black my-2 w-full text-white px-4 py-2 rounded-md hover:bg-gray-800">
//             Sign in with Apple
//           </button> */}
//         </div>
//       </div>
//       <button
//         onClick={onClose}
//         className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6 w-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default SideLoginBar;


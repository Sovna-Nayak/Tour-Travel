// // pages/Login.jsx
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Mail, Lock, LogIn } from 'lucide-react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Login attempt:', { email, password });
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
//         <div>
//           <div className="flex justify-center">
//             <LogIn className="h-12 w-12 text-blue-600" />
//           </div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Welcome Back to FirstTravel
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
//               Sign up here
//             </Link>
//           </p>
//         </div>
        
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Mail className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>
            
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <Lock className="h-5 w-5 text-gray-400" />
//                 </div>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                   placeholder="Enter your password"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
//                 Forgot your password?
//               </a>
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
//             >
//               Sign In
//             </button>
//           </div>

//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative flex justify-center text-sm">
//               <span className="px-2 bg-white text-gray-500">Or continue with</span>
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//               Google
//             </button>
//             <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//               Facebook
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;





// pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, Phone } from 'lucide-react';

const Login = () => {
  const [loginInput, setLoginInput] = useState(''); // email or phone
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Login attempt:', {
      loginInput,
      password
    });

    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Card */}
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        
        {/* Header */}
        <div>
          <div className="flex justify-center">
            <LogIn className="h-12 w-12 text-blue-600" />
          </div>

          <h2 className="mt-6 text-center text-3xl font-extrabold 
          bg-gradient-to-r from-blue-500 to-purple-600 
          bg-clip-text text-transparent">
            Welcome Back to FirstTravel
          </h2>

          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          
          {/* Email or Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email or Phone Number
            </label>

            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center gap-1 pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
                <Phone className="h-5 w-5 text-gray-400" />
              </div>

              <input
                type="text"
                required
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                placeholder="Enter email or phone"
                className="appearance-none block w-full pl-16 pr-3 py-3 border border-gray-300 rounded-lg 
                placeholder-gray-400 text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                hover:border-blue-400 
                transition-all duration-300"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>

              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg 
                placeholder-gray-400 text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                hover:border-blue-400 
                transition-all duration-300"
              />
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-900">Remember me</span>
            </div>

            <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-lg text-white 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            hover:from-blue-600 hover:to-indigo-700 
            transform hover:scale-105 
            transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Sign In
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="w-full py-2 px-4 border border-gray-300 rounded-lg 
            text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 
            transition-all duration-300">
              Google
            </button>

            <button className="w-full py-2 px-4 border border-gray-300 rounded-lg 
            text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 
            transition-all duration-300">
              Facebook
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;


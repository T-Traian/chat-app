import React, { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore.js';
import { Eye, EyeOff, MessageCircle, Users, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password.trim()) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/*LEFT SIDE*/}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-6">
          {/*LOGO*/}
          <div className="text-center">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">"Friendship is a single soul dwelling in two bodies." - Aristotle</h1>
              <p className="text-base-content/60 italic max-w-xs text-center">
                Create a free account today
              </p>
            </div>
          </div>

          {/*INPUTS*/}
          <form onSubmit={handleSubmit} className="space-y-2">
            {/*USERNAME*/}
            <div className="space-y-1">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </g>
                </svg>
                <input
                  type="text"
                  required
                  placeholder="Username"
                  minLength="3"
                  maxLength="30"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                />
              </div>
              <p className="text-sm text-gray-500">
                Must be 3 to 30 characters
              </p>
            </div>

            {/*EMAIL*/}
            <div className="space-y-1">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input 
                  type="email" 
                  placeholder="mail@site.com" 
                  required 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="text-sm text-gray-500">Enter valid email address</div>
            </div>

            {/*PASSWORD*/}
            <div className="space-y-1">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                    ></path>
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                  </g>
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  minLength="6"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <EyeOff className="size-5 text-gray-400"/>
                  ) : (
                    <Eye className="size-5 text-gray-400" />
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500">
                Must be more or equal to 6 characters
              </p>
            </div>

            {/*SUBMIT BUTTON*/}
            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}> 
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account? {" "}
              <Link to="/login" className="link link-primary">
                Sign in 
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/*RIGHT SIDE*/}
      <div className="hidden lg:flex flex-col justify-center items-center p-6 sm:p-12 bg-primary/5 relative overflow-hidden">
        {/*Background decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-ping" style={{animationDuration: '4s'}}></div>
        
        {/*Additional floating elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/8 rounded-full blur-lg animate-float-delayed"></div>
        
        {/*Main content */}
        <div className="relative z-10 text-center max-w-md space-y-8">
          {/*Welcome message */}
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-base-content">
              Welcome to <span className="text-primary">Amicus</span>
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed">
              Connect with friends, share moments, and build meaningful relationships.
            </p>
          </div>

          {/*Feature highlights */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-base-100/60 backdrop-blur-sm rounded-xl shadow-sm border border-base-200 hover:scale-105 transition-transform duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-base-content">Secure & Private</h3>
                <p className="text-sm text-base-content/60">Your conversations are protected with end-to-end encryption</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-base-100/60 backdrop-blur-sm rounded-xl shadow-sm border border-base-200 hover:scale-105 transition-transform duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-base-content">Lightning Fast</h3>
                <p className="text-sm text-base-content/60">Real-time messaging with instant delivery</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-base-100/60 backdrop-blur-sm rounded-xl shadow-sm border border-base-200 hover:scale-105 transition-transform duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-base-content">Build Community</h3>
                <p className="text-sm text-base-content/60">Create groups and connect with like-minded people</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SignUpPage
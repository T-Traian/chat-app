import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Users, Loader2 } from 'lucide-react';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {isLoggingIn, login} = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
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
              <h1 className="text-2xl font-bold mt-2">"Friendship is the shadow of the evening, which increases with the setting sun of life.” - Jean de La Fontaine</h1>
            </div>
          </div>

          {/*INPUTS*/}
          <form onSubmit={handleSubmit} className="space-y-2">
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
              <div className="text-sm text-gray-500">Enter your email address</div>
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
                    <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    <path
                      d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                    ></path>
                  </g>
                </svg>
                
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
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
                Enter your password
              </p>
            </div>

            {/*SUBMIT BUTTON*/}
            <button type="submit" className="btn btn-primary w-full" disabled={isLoggingIn}> 
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Signing In...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Don't have an account? {" "}
              <Link to="/signup" className="link link-primary">
                Sign up 
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
          <div className="space-y-6">
            <div className="animate-bounce">
              <div className="text-6xl mb-4">👋</div>
            </div>
            <h2 className="text-4xl font-bold text-base-content animate-fade-in">
              Welcome <span className="text-primary">Back</span>
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed animate-slide-up">
              We're glad to see you again! Sign in to continue your conversations and stay connected with friends.
            </p>
          </div>

          {/*Simple animated elements */}
          <div className="space-y-6">
            <div className="flex justify-center space-x-4">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
              <div className="w-4 h-4 bg-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-4 h-4 bg-primary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="bg-base-100/60 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-base-200 animate-fade-in-delayed">
              <div className="text-3xl mb-3">✨</div>
              <p className="text-base-content/80 text-sm">
                Ready to continue your journey with Amicus?
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LoginPage
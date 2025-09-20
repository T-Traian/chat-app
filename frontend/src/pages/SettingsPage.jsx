import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Palette, Sparkles, Check } from "lucide-react";
import { useState, useEffect } from "react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleThemeChange = (newTheme) => {
    setIsAnimating(true);
    setSelectedTheme(newTheme);
    setTheme(newTheme);
    
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200/30 to-base-100">
      <div className="container mx-auto px-4 pt-20 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-2xl bg-primary/10 animate-pulse">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Theme Studio
            </h1>
            <div className="p-3 rounded-2xl bg-secondary/10 animate-bounce">
              <Sparkles className="w-8 h-8 text-secondary" />
            </div>
          </div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Transform your chat experience with our collection of beautiful themes. 
            Each theme is carefully crafted to provide the perfect ambiance for your conversations.
          </p>
        </div>

        {/* Theme Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold">Choose Your Style</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {THEMES.map((t, index) => (
              <div
                key={t}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  className={`
                    w-full group relative overflow-hidden rounded-2xl transition-all duration-300 transform
                    ${selectedTheme === t 
                      ? "scale-105 shadow-2xl ring-4 ring-primary/30" 
                      : "hover:scale-105 hover:shadow-xl"
                    }
                    ${isAnimating && selectedTheme === t ? "animate-pulse" : ""}
                  `}
                  onClick={() => handleThemeChange(t)}
                >
                  {/* Theme Preview */}
                  <div className="relative h-20 w-full rounded-2xl overflow-hidden" data-theme={t}>
                    <div className="absolute inset-0 grid grid-cols-4 gap-1 p-2">
                      <div className="rounded-lg bg-primary animate-pulse" style={{ animationDelay: '0s' }}></div>
                      <div className="rounded-lg bg-secondary animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                      <div className="rounded-lg bg-accent animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="rounded-lg bg-neutral animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Selected Indicator */}
                    {selectedTheme === t && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-bounce">
                        <Check className="w-4 h-4 text-primary-content" />
                      </div>
                    )}
                  </div>
                  
                  {/* Theme Name */}
                  <div className="p-3 bg-base-100/80 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-center block truncate">
                      {t.charAt(0).toUpperCase() + t.slice(1)}
                    </span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-2xl font-bold">Live Preview</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-secondary/20 to-transparent"></div>
            <div className="px-3 py-1 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Real-time</span>
            </div>
          </div>
          
          <div className="relative">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl animate-pulse"></div>
            
            <div className="relative rounded-3xl border-2 border-base-300/50 overflow-hidden bg-base-100 shadow-2xl backdrop-blur-sm">
              <div className="p-6 bg-gradient-to-br from-base-200/50 to-base-300/30">
                <div className="max-w-2xl mx-auto">
                  {/* Chat Interface */}
                  <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
                    {/* Chat Header */}
                    <div className="px-6 py-4 border-b border-base-300 bg-gradient-to-r from-base-100 to-base-200">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-content font-bold text-lg shadow-lg">
                            O
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-base-100 animate-pulse"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">Omer Stone</h3>
                          <p className="text-sm text-base-content/70 flex items-center gap-2">
                            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                            Online now
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="p-6 space-y-6 min-h-[300px] max-h-[300px] overflow-y-auto bg-base-100">
                      {PREVIEW_MESSAGES.map((message, index) => (
                        <div
                          key={message.id}
                          className={`flex ${message.isSent ? "justify-end" : "justify-start"} animate-fade-in`}
                          style={{ animationDelay: `${index * 200}ms` }}
                        >
                          <div
                            className={`
                              max-w-[80%] rounded-2xl p-4 shadow-lg transform transition-all duration-300 hover:scale-105
                              ${message.isSent 
                                ? "bg-gradient-to-br from-primary to-primary/80 text-primary-content" 
                                : "bg-base-200 hover:bg-base-300"
                              }
                            `}
                          >
                            <p className="text-sm leading-relaxed">{message.content}</p>
                            <p
                              className={`
                                text-xs mt-2 opacity-70
                                ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
                              `}
                            >
                              21:05 PM
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-6 border-t border-base-300 bg-gradient-to-r from-base-100 to-base-200">
                      <div className="flex gap-3">
                        <input
                          type="text"
                          className="input input-bordered flex-1 text-sm h-12 rounded-xl focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                          placeholder="Type a message..."
                          value="This is a live preview ✨"
                          readOnly
                        />
                        <button className="btn btn-primary h-12 min-h-0 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                          <Send size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Current Theme Display */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-base-200/50 rounded-2xl backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-medium text-base-content/70">Current theme:</span>
            <span className="text-lg font-bold text-primary">
              {selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
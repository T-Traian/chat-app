import { MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
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
              <div className="text-6xl mb-4">🤙</div>
            </div>
            <h2 className="text-4xl font-bold text-base-content animate-fade-in">
              Welcome <span className="text-primary">to Amicus</span>
            </h2>
            <p className="text-lg text-base-content/70 leading-relaxed animate-slide-up">
              We're glad to see you! Select a conversation from the sidebar to start chatting.
            </p>
          </div>

          {/*Simple animated elements */}
          <div className="space-y-6">
            <div className="flex justify-center space-x-4">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
              <div className="w-4 h-4 bg-primary rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-4 h-4 bg-primary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default NoChatSelected;
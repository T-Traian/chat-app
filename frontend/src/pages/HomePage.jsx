import React from 'react'
import { useChatStore } from '../store/useChatStore.js'
import Sidebar from '../components/Sidebar'
import NoChatSelected from '../components/NoChatSelected'
import ChatContainer from '../components/ChatContainer'

const HomePage = () => {
  const {selectedUser} = useChatStore();

  return (
    <div className='h-screen bg-base-200'>

      {/*Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-bounce" style={{animationDuration: '3s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-primary/5 rounded-full blur-2xl animate-ping" style={{animationDuration: '4s'}}></div>
      
      {/*Additional floating elements */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-primary/8 rounded-full blur-lg animate-float-delayed"></div>

      <div className='flex items-center justify-center pt-20 px-4'>
        <div className='bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]'>
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {!selectedUser? <NoChatSelected/> : <ChatContainer/>}

          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage


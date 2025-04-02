import React from 'react'
import Right from './home/right/right'
import Left from './home/left/left'
import Logout from './home/left1/logout'

const App = () => {
  return (
    <div className="flex h-screen">
       <Logout></Logout>
       <Left></Left>
       <Right></Right>
    </div>
  )
}

export default App

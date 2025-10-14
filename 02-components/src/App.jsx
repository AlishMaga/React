import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Alish' age={22} description='This is alish description.'/>
      <Card user='Random' age={25} description='This is random description.'/>
      <Card user='Hari' age={28} description='This is your description.'/>
    </div>
    
  )
}

export default App

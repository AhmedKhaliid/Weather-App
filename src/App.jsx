import React from 'react';
//import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import Forecast from './component/Forecast'

const queryClient = new QueryClient()

function App() {

  return (
  <div className='w-full bg-backgroundColor  min-h-screen'>
    <QueryClientProvider client={queryClient}>
   <Forecast />
      </QueryClientProvider>
      </div>
  )
}
export default App
//  {
//   "semi": true,
//     "singleQuote": true,
//     "tabWidth": 2
//   }
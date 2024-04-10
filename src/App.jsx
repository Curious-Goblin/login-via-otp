// import { RecoilRoot } from 'recoil'
// import './Styles/App.css'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import React, { Suspense } from 'react'
// const Login = React.lazy(() => import("./Login"))
// const EnterOtp = React.lazy(() => import("./EnterOtp"))
// const ThankYou = React.lazy(() => import("./ThankYou"))
// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/login' element={<Suspense fallback={"loading..."}><Login /></Suspense>} />
//         <Route path='/enterOtp' element={<Suspense fallback={"loading..."}><EnterOtp /></Suspense>} />
//         <Route path='/thankYou' element={<Suspense fallback={"loading..."}><ThankYou /></Suspense>} />
//       </Routes>
//       <RecoilRoot>
//         <LandingPage />
//       </RecoilRoot>
//     </BrowserRouter>
//   )
// }

// function LandingPage() {
//   const navigate = useNavigate()
//   return (
//     <div>
//       <button id='login' onClick={() => { navigate("/login") }}>Login</button>
//     </div>
//   )
// }

// export default App

import { RecoilRoot } from 'recoil'
import './Styles/App.css'
import { BrowserRouter, Route, Routes, useNavigate, Outlet } from 'react-router-dom' // Import Outlet
import React, { Suspense } from 'react'
const Login = React.lazy(() => import("./Login"))
const EnterOtp = React.lazy(() => import("./EnterOtp"))
const ThankYou = React.lazy(() => import("./ThankYou"))
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} /> {/* Use LandingPage as the root route */}
        <Route path='/login' element={<Suspense fallback={"loading..."}><Login /></Suspense>} />
        <Route path='/enterOtp' element={<Suspense fallback={"loading..."}><EnterOtp /></Suspense>} />
        <Route path='/thankYou' element={<Suspense fallback={"loading..."}><ThankYou /></Suspense>} />
      </Routes>
      <RecoilRoot>
        <Outlet /> {/* Render child routes of the current route */}
      </RecoilRoot>
    </BrowserRouter>
  )
}

function LandingPage() {
  const navigate = useNavigate()
  return (
    <div>
      <button id='login' onClick={() => { navigate("/login") }}>Login</button>
    </div>
  )
}

export default App

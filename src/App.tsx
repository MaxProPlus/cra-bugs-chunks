import React, {Suspense} from 'react'
import './App.css'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import Loading from './Loading'

const Page1 = React.lazy(() => import('./Page1'))
const Page2 = React.lazy(() => import('./Page2'))
const Page3 = React.lazy(() => import('./Page3'))
const Page4 = React.lazy(() => import('./Page4'))

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Link to="/page1">Page1</Link><br/>
        <Link to="/page2">Page2 с красивой синенькой кнопочкой</Link><br/>
        <Link to="/page3">Page3</Link><br/>
        <Link to="/page4">Page4</Link><br/>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/page1' component={Page1} />
            <Route path='/page2' component={Page2} />
            <Route path='/page3' component={Page3} />
            <Route path='/page4' component={Page4} />
          </Switch>
        </Suspense>

      </div>
    </BrowserRouter>
  )
}

export default App

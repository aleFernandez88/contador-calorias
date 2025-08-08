
import './App.css'

import { Form } from './components/Form'
import { useReducer } from 'react'
import { activityReducer, initialState } from './reducers/activity-reducer'
import { ActivityList } from './components/ActivityList'


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  return (
    <>
      <div className='flex '>
        <Form
          dispatch={dispatch} />
        <ActivityList
          activities={state.activities} />
      </div>
    </>
  )
}

export default App


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
          dispatch={dispatch}
          state={state} />
        <ActivityList
          activities={state.activities}
          dispatch={dispatch} />
      </div>
    </>
  )
}

export default App

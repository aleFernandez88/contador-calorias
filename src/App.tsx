
import './App.css'

import { Form } from './components/Form'
import { useEffect, useReducer } from 'react'
import { activityReducer, initialState } from './reducers/activity-reducer'
import { ActivityList } from './components/ActivityList'
import { CaloriesTtracker } from './components/CaloriesTtracker'


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities]);

  return (
    <>
      <div className='max-w-6xl mx-auto md:flex'>
        <div className='flex flex-col md:w-1/2'>
          <Form
            dispatch={dispatch}
            state={state} />
          <CaloriesTtracker
            activities={state.activities} />
        </div>
        <ActivityList
          activities={state.activities}
          dispatch={dispatch} />
      </div>
    </>
  )
}

export default App

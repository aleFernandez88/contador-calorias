import React, { useMemo } from 'react'
import { ActivityT } from '../types'
import { categories } from '../data/data'
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { ActivityActions } from '../reducers/activity-reducer'

type ActivityListProps = {
    activities: ActivityT[],
    dispatch: React.Dispatch<ActivityActions>
}

export const ActivityList = ({ activities, dispatch }: ActivityListProps) => {

    const activityName = useMemo(
        () =>
            (category: ActivityT['category']) =>
                categories.map(cat => cat.id === category ? cat.name : "")
        , [activities]
    )
    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])


    return (
        <div className='min-h-screen bg-neutral-100 py-6 flex flex-col justify-center sm:py-12 sm:w-1/2'>
            <div className='flex flex-col sm:flex-row justify-around w-full items-center'>
                <h2 className='text-4xl font-bold text-neutral-600 text-center my-4'>Actividades y comidas</h2>
                <button
                    className="bg-gray-800 text-white rounded-md px-2 py-1 h-fit disabled:opacity-10 cursor-pointer"
                    disabled={isEmptyActivities}
                    onClick={() => dispatch({ type: 'restart-app' })}
                >
                    Reiniciar app
                </button>
            </div>
            {
                isEmptyActivities ? <p className='text-center my-2.5'>No hay actividades registradas...</p> :
                    activities.map(activity => (
                        <div key={activity.id} className=' rounded-2xl px-5 pt-10 pb-5 bg-white mt-5 flex justify-between w-5/6 mx-auto'>
                            <div className='space-y-2 relative'>
                                <p className={`absolute -top-8 -left-8 px-8 py-1 font-light text-white uppercase shadow-gray-600 shadow-md rounded-lg  ${activity.category === 1 ? 'bg-cyan-600' : 'bg-fuchsia-900'}`}>
                                    {activityName(+activity.category)}
                                </p>
                                <p className='text-2xl font-normal pt-1'>
                                    {activity.name}
                                </p>
                                <span className='font-black text-4xl text-lime-500'>
                                    {`${activity.calories} cal.`}
                                </span>

                            </div>
                            <div className='flex gap-5 items-center'>
                                <button
                                    onClick={() => dispatch({ type: "set-activeId", payload: { id: activity.id } })}
                                >
                                    <PencilSquareIcon
                                        className='h-8 w-8 text-gray-800' />
                                </button>
                                <button
                                    onClick={() => dispatch({ type: "delete-activity", payload: { id: activity.id } })}
                                >
                                    <XCircleIcon
                                        className='h-8 w-8 text-red-800' />
                                </button>
                            </div>

                        </div>
                    ))
            }
        </div>
    )
}

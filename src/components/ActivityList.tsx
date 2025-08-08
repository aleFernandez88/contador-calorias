import React from 'react'
import { ActivityT } from '../types'

type ActivityListProps = {
    activities: ActivityT[]
}

export const ActivityList = ({ activities }: ActivityListProps) => {
    return (
        <div className='min-h-screen bg-gray-600 py-6 flex flex-col justify-center sm:py-12 '>
            <h2 className='text-4xl font-bold text-slate-100 text-center'>Actividades y comidas</h2>
            {
                activities.map(activity => (
                    <div key={activity.id}>
                        <div className='space-y-2 relative'>
                            <p>
                                {activity.category}
                            </p>
                            <p className='text-2xl font-bold pt-5'>
                                {activity.name}
                            </p>
                            <p className='font-black text-4xl text-lime-500'>{activity.calories}{''}</p>
                        </div>
                        <div className='space-y-2 relative'></div>

                    </div>
                ))
            }
        </div>
    )
}

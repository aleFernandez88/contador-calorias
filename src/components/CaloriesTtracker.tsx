import { useMemo } from "react"
import { ActivityT } from "../types"
import { CaloriesDisplay } from "./CaloriesDisplay"

type CaloriesTrackerProps = {
    activities: ActivityT[]
}

export const CaloriesTtracker = ({ activities }: CaloriesTrackerProps) => {

    const caloriesConsumed = useMemo(() => activities.reduce((total, acti) => acti.category === 1 ? total + + acti.calories : total, 0), [activities])

    const caloriesBurned = useMemo(() => activities.reduce((total, acti) => acti.category === 2 ? total + + acti.calories : total, 0), [activities])

    const caloriesBalance = useMemo(() => caloriesConsumed - caloriesBurned, [activities])

    return (
        <>
            <h2 className='mt-9 text-4xl font-bold text-center text-gray-800'> Resumen de calorías</h2>
            <div className='flex items-center md:justify-between gap-5 mt-10'>
                <CaloriesDisplay
                    text={"Comida"}
                    calories={caloriesConsumed}
                    bg={"cyan-600"} />
                <CaloriesDisplay
                    text={"Ejercicio"}
                    calories={caloriesBurned}
                    bg={"fuchsia-900"} />
                <CaloriesDisplay
                    text={"Balance"}
                    calories={caloriesBalance}
                    bg={"gradient-to-r from-cyan-600 to-fuchsia-900"} />
            </div>
        </>
    )
}

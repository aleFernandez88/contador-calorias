import { useState, Dispatch, useEffect } from "react";
import { v4 as uuv4 } from 'uuid'

import { categories } from "../data/data"
import type { ActivityActions, ActivityState } from "../reducers/activity-reducer"
import type { ActivityT } from "../types"

// type FormProps = {
//     activity: {
//         category: number;
//         name: string;
//         calories: number;
//     },
//     setActivity: React.Dispatch<React.SetStateAction<{
//         category: number;
//         name: string;
//         calories: number;
//     }>>
// }

const initialState: ActivityT = {
    id: uuv4(),
    category: 1,
    name: '',
    calories: 0
}
type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}

export const Form = ({ dispatch, state }: FormProps) => {

    const [activity, setActivity] = useState<ActivityT>(initialState)

    useEffect(() => {

        if (state.activeId) {
            console.log("Ya hay algo en activeId");
            const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    }, [state.activeId]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== "" && calories > 0

    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('enviando...');
        dispatch({ type: 'save-activity', payload: { newActivity: activity } })
        setActivity({
            ...initialState,
            id: uuv4()
        })
    }

    return (

        <div className="min-h-screen bg-neutral-100 py-6 flex flex-col justify-center sm:py-12 w-1/2">
            <div className="relative py-3 w-5/6 sm:mx-auto ">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-fuchsia-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Calculadora de calorías</h1>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <label htmlFor="category" className=" left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Categorías</label>
                                    <select
                                        id="category"
                                        name="category"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        onChange={handleChange}
                                    >
                                        {
                                            categories.map(categorie =>
                                                <option
                                                    key={categorie.id}
                                                    value={categorie.id}

                                                >
                                                    {categorie.name}
                                                </option>
                                            )
                                        }
                                    </select>

                                </div>
                                <div className="relative">
                                    <label htmlFor="name" className=" left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Actividad</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Ej. Comida, Jugo de naranja, Ensalada, Ejercico, Pesas, Bicicleta."
                                        value={activity.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="calories" className=" left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ">Calorias</label>
                                    <input
                                        id="calories"
                                        name="calories"
                                        type="number"
                                        className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Calorias. Ej: 300 o 500."
                                        value={activity.calories}
                                        onChange={handleChange}
                                    />

                                </div>
                                <div className="relative">
                                    <input
                                        type="submit"
                                        className="bg-cyan-700 text-white rounded-md px-2 py-1 w-full disabled:opacity-10"
                                        value={activity.category === 1 ? "Guardar comida" : "Guardar ejercicio"}
                                        disabled={!isValidActivity()} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

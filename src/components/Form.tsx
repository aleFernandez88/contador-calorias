import { categories } from "../data/data"

export const Form = () => {

    return (
        <div >
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-4xl sm:mx-auto max-w-4xl">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Calculadora de calorías</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <label htmlFor="category" className=" left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Categorías</label>
                                        <select
                                            id="category"
                                            name="category"
                                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"

                                        >
                                            {
                                                categories.map(categorie =>
                                                    <option key={categorie.id}>
                                                        {categorie.name}
                                                    </option>
                                                )
                                            }
                                        </select>

                                    </div>
                                    <div className="relative">
                                        <label htmlFor="activity" className=" left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Categorias</label>
                                        <input
                                            id="activity"
                                            name="activity"
                                            type="text"
                                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Ej. Comida, Jugo de naranja, Ensalada, Ejercico, Pesas, Bicicleta."
                                        />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="activity" className=" left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Categorias</label>
                                        <input
                                            id="calories"
                                            name="calories"
                                            type="number"
                                            className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="Calorias. Ej: 300 o 500."
                                        />

                                    </div>
                                    <div className="relative">
                                        <button className="bg-green-700 text-white rounded-md px-2 py-1">Agregar calorias</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { useState } from "react"
import type { ActivityT } from "../types"


export function useForm() {

    const [activity, setActivity] = useState<ActivityT>({
        id: "",
        category: 1,
        name: '',
        calories: 0
    })
    return {
        activity,
        setActivity
    }
}
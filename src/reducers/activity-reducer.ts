import type { ActivityT } from "../types"

export type ActivityActions = {
    type: 'save-activity', payload: { newActivity: ActivityT }
}

type ActivityState = {
    activities: ActivityT[]
}

export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    switch (action.type) {
        case 'save-activity': {
            console.log(state.activities);
            return {
                ...state,
                activities: [...state.activities, action.payload.newActivity]
            }
        }
        default:
            console.log("Esto es default");

    }
    return state
}
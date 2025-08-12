import type { ActivityT } from "../types"

export type ActivityActions =
    { type: 'save-activity', payload: { newActivity: ActivityT } } |
    { type: 'set-activeId', payload: { id: ActivityT['id'] } } |
    { type: 'delete-activity', payload: { id: ActivityT['id'] } }

export type ActivityState = {
    activities: ActivityT[],
    activeId: ActivityT['id']
}

export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    switch (action.type) {
        case 'save-activity': {
            console.log(state.activities);
            let updateActivities: ActivityT[] = []
            if (state.activeId) {
                updateActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)
            }
            else {
                updateActivities = [...state.activities, action.payload.newActivity]
            }
            return {
                ...state,
                activities: updateActivities,
                activeId: ''
            }
        }
        case "set-activeId": {
            return {
                ...state,
                activeId: action.payload.id
            }
        }
        case "delete-activity": {
            console.log('delete activity');

            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload.id)
            }
        }
        default:
            console.log("Esto es default");

    }
    return state
}
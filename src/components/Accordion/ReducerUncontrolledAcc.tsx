export type ActionType = {
    type: string
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type StateType = {
    collapsed: boolean
}

export const reducerUncontrolledAcc = (state: StateType, action: ActionType) : StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            throw Error('Something go wrong')
    }
}
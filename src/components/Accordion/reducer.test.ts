import {reducerUncontrolledAcc, StateType, TOGGLE_COLLAPSED} from "./ReducerUncontrolledAcc";

test('reducer should change value to opposite value - true', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducerUncontrolledAcc(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)

})
test('reducer should change value to opposite value - false', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducerUncontrolledAcc(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)

})
test('reducer should throw error because action type is incorrect', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducerUncontrolledAcc(state, {type: TOGGLE_COLLAPSED})

    expect(() => reducerUncontrolledAcc(state, {type: 'faketype'})).toThrowError()

})
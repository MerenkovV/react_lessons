import ProfilePageReducer, { ChangeId } from "./ProfilePageReducer"

let state = {
    id: null
}

test('test Reducer with AC - ChangeId will change id in state', () => {
    let newId = 10
    let AC = ChangeId(newId)
    let newState = ProfilePageReducer(state, AC)
    expect(newState.id).toBe(10)
})

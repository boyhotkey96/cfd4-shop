export default function createSlice({ initialState, reducers, name }) {
  let action = {};

  let TYPE = {}

  for (let i in reducers) {
    let type = `${name}/${i}`;

    action[i] = (data) => ({
      type,
      payload: data
    })

    TYPE[i] = type
  }

  function reducer(state = initialState, action) {
    let type = action.type.split('/')[1];
    let newState = { ...state }

    if (type in reducers) {
      let stateTemp = reducers[type](newState, action);
      if (stateTemp) return stateTemp;

      return newState;
    }

    return state;
  }

  return {
    action,
    reducer,
    TYPE
  }
}

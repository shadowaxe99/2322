Sure, let's implement an additional feature to dispatch a request in order to fetch cardio workout data.

Firstly, let's define the action type:

```js
export const FETCH_CARDIO_WORKOUT_DATA = 'FETCH_CARDIO_WORKOUT_DATA';
```

Then, let's write the action creator function:

```js
export const fetchCardioWorkoutData = (data) => ({
  type: FETCH_CARDIO_WORKOUT_DATA,
  payload: data
});
```

Next, we'll simulate an API call to fetch cardio workout data and dispatch the relevant action. Let's write the action thunk:

```js
export function fetchCardioWorkoutDataThunk() {
  return async function(dispatch) {
    const response = await fetch('https://api.example.com/cardio-workout-data');
    if(response.ok) {
      const data = await response.json();
      dispatch(fetchCardioWorkoutData(data));
    } else {
      throw new Error('Error fetching cardio workout data');
    }
  };
}
```

Finally, we need to handle the new action in reducer. Here is a simplified example:

```js
const initialState = {
  cardioWorkoutData: null
};

function appReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CARDIO_WORKOUT_DATA:
      return {
        ...state,
        cardioWorkoutData: action.payload
      };
    // handling other actions...
    default:
      return state;
  }
}
```

This scenario demonstrates how to solve the problem using Redux with async actions. This is just one of many approaches you can take but I am confident it should give you a good starting point for structuring your solution and overcoming the challenge.
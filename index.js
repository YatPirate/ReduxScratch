import store from "./store";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store Changed !", store.getState());
});

store.dispatch(actions.bugAdded("StartBug"));

store.dispatch(actions.bugResolved(1));

// console.log(store.getState());

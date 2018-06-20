import {UserActions, UserActionTypes} from '../actions/user.actions';

export interface State {
  username: string;
  email: string;
}

export const initialState: State = {
  username: 'Nir Kaufman',
  email: 'nir@500tech.com'
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      return state;

    default:
      return state;
  }
}

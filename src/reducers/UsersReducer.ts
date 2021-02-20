interface Istate {
  users: [];
}

interface Iaction {
  type: string;
}

const initialState = <Istate>{};

export default (state = initialState, action: Iaction): Istate => {
  switch (action.type) {
    default:
      return state;
  }
};

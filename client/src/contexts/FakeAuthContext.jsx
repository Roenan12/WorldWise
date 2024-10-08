import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "error":
      return { ...state, error: true, message: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email !== FAKE_USER.email && password !== FAKE_USER.password)
      dispatch({
        type: "error",
        payload: alert("Invalid credentials"),
      });
    else if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
    else if (email !== FAKE_USER.email)
      dispatch({
        type: "error",
        payload: alert("Invalid email address"),
      });
    else if (password !== FAKE_USER.password)
      dispatch({
        type: "error",
        payload: alert("Incorrect password"),
      });
    else throw new Error("Unknown action");
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuthContext };

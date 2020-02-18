
const initialState = {
  isLoggedIn: false,
  sessionToken: null,
  token: null,
  companyId: "5e0e43d932be71118c080ec9",
  subCompanyId: "5e2b447cdb12b5001709914f",
  userId: null,
  error: null,
  loading: false,
  companies: [],
  subCompanies: [],
  notificationMsg: null,
  currentUser: null,
  sidebarItems : null
};
const reducer = (state = initialState, action) => {
  // ===============PANEL DE CONTROL =====================
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        sessionToken: action.sessionToken,
        dataToken: action.dataToken,
        isLoggedIn: true
      };

    case "SELECT_COMPANY":
      console.log(action.payload);
      return {
        ...state,
        sidebarItems: action.payload
      };
    case "SELECT_SUBCOMPANY":
      return {
        ...state,
        subCompanyId: action.payload
      };

    case "SET_COMPANIES":
      console.log(action.companies);
      return {
        ...state,
        companies: action.payload
      };
    case "SET_SUBCOMPANIES":
      console.log(action.companies);
      return {
        ...state,
        subcompanies: action.payload
      };

    // ===============PANEL DE CONTROL =====================
    case "GET_USERS":
      console.log(action.payload);
      return {
        ...state,
        allUsers: action.payload
      };
    case "GET_SINGLE_USER":
      console.log(action.payload);
      return {
        ...state,
        currentUser: action.payload
      };

    case "GET_INPC":
      console.log(action.payload);
      return {
        ...state,
        allUsers: action.payload
      };
    case "GET_ROLES":
      console.log(action.payload);
      return {
        ...state,
        roles: action.payload
      };
    case "GET_TDC":
      console.log(action.payload);
      return {
        ...state,
        tdc: action.payload
      };

    // Post user
    case "POST_USER":
      console.log(action.payload);
      return {
        // ...state,
        // subcompanies: action.payload
      };
          // Post user
    case "POST_PROJECT":
      console.log(action.payload);
      return {
        // ...state,
        // subcompanies: action.payload
      };

      case "SET_NOTIFICATION":
        console.log(action.payload);
        return {
          ...state,
          notificationMsg: action.payload
        };
      

    default:
  }
  return state;
};

export default reducer;

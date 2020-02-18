import axios from "axios";
export const GET_CAMERA = "GET_CAMERA";
export const GET_MISSION = "GET_MISSION";
export const SET_MISSION = "SET_MISSION";
export const GET_DATE = "GET_DATE";

// ==========================LOG IN===========================
export const logIn = (sessionToken, dataToken) => {
  return {
    type: "LOG_IN",
    sessionToken: sessionToken,
    dataToken: dataToken
  };
};

// =======================SELECT COMPANY =====================
export const selectCompany = items => {
  console.log(items);
  return {
    type: "SELECT_COMPANY",
    payload: items
  };
};

export const selectSubCompany = subCompanyId => {
  return {
    type: "SELECT_SUBCOMPANY",
    payload: subCompanyId
  };
};

// =======================SELECT COMPANY =====================

const setCompanies = companyData => {
  console.log(companyData);
  return {
    type: "SET_COMPANIES",
    payload: companyData.company
  };
};

// =======================SELECT COMPANY =====================

const setSubCompanies = subCompanyData => {
  console.log(subCompanyData);
  return {
    type: "SET_SUBCOMPANIES",
    payload: subCompanyData.empresa
  };
};
// =======================USERS COMPANY =====================


const postUser = userData => {
  console.log(userData);
  return {
    type: "POST_USER",
    payload: userData
  };
};
const getSingleUser = userData => {
  console.log(userData);
  return {
    type: "GET_SINGLE_USER",
    payload: userData
  };
};

const postProject = proyectData => {
  console.log(proyectData);
  return {
    type: "POST_PROJECT",
    payload: proyectData
  };
};

const editProject = proyectData => {
  console.log(proyectData);
  return {
    type: "POST_PROJECT",
    payload: proyectData
  };
};


// Can concatenate url with dynamic values before
export const apiCall = (method, url, headers, data, dispatcher) => {
  // const userData = data
  console.log(data)
  let finalAction = null;

  
  switch (dispatcher) {
    case "setCompanies":
      finalAction = setCompanies;
      break;
    case "setSubCompanies":
      finalAction = setSubCompanies;
      break;
      case "postUser": //Check With Backend so 
        finalAction = postUser;
        break;
      case "getSingleUser":
        finalAction = getSingleUser;
        break;
        case "postProject":
          finalAction = postProject;
          break;
          case "editProject":
            finalAction = editProject;
            break;
        default : 
          break;
  }
  

  // ONE API CALL TO RULE THEM ALL 
  return dispatch => {
    axios({
      method: method,
      url: url,
      headers: headers,
      data: data
    })
      .then(res => {
        const responseData = res.data;
        console.log(responseData)
        dispatch(finalAction(responseData));
      })
      .catch(error => {
        console.log(error);
      });
  };
};




// =======================SELECT COMPANY =====================

const setNotificationMsg = msg => {
  console.log(msg);
  return {
    type: "SET_NOTIFICATION_MESSAGE",
    payload: msg
  };
};

// =======================SELECT COMPANY =====================
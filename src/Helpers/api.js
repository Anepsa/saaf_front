import axios from "axios";

// url: `https://murmuring-journey-73788.herokuapp.com/empresa/${companyId}?desde=0&limite=99`,





// ================Get Companies=====================
export const getCompanies = (method, url, companyId, desde, limite) => {
  axios({
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {})
    .catch(error => {});
};




// ================Get Sub Companies=====================
export const getSubCompanies = (method, url, companyId, desde, limite) => {
  axios({
    method: method,
    url: url,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => {})
    .catch(error => {});

};



// ================Get Sub Company=====================
export const getSubcompany = (method, url, companyId, desde, limite) => {
  axios({
    method: method,
    url: `https://murmuring-journey-73788.herokuapp.com/empresa/${companyId}?desde=0&limite=99`,
    headers: {
      "Content-Type": "application/json"
    }


  })
    .then(res => {})
    .catch(error => {});
};



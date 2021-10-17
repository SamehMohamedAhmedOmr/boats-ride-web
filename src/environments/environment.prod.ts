
export const environment = {
  production: true,
  apisVersion: "v1" ,
 //  baseUrl: 'http://boats-ride-backend.sameh.store',
  baseUrl: 'https://backend.boatsride.com',

  url : function url (version = null) {
    return environment.baseUrl + '/api/' + ((version) ? version+'/' : '');
  }

};

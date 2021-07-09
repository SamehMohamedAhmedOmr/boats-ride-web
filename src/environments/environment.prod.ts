
export const environment = {
  production: false,
  apisVersion: "v1" ,
  baseUrl: 'http://boats-ride-backend.sameh.store',

  url : function url (version = null) {
    return environment.baseUrl + '/api/' + ((version) ? version+'/' : '');
  }

};

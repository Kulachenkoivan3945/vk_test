import VK from "vk-openapi";

class vk_api {
  constructor() {
    /* (this.appID = "51774176"), */
      (this.appID = "51776175"),
      (this.v = "5.154"),
      this.init();
  }

  init() {
    VK.init({
      apiId: this.appID,
    });
/*     VK.Auth.logout(); */
  }

  checkConnection(cbFunc){
    VK.Auth.getLoginStatus(cbFunc);
  }

  login(cbFunc){
    VK.Auth.login(cbFunc);
  }
  getInfo(request, params, cbFunc) {
    params.v = this.v;
    VK.Api.call(request, params, cbFunc);
  }
}

export default new vk_api();

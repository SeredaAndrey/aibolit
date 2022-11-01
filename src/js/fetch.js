const request = require('axios').default;

const BASE_URL = 'http://localhost:3000';

export default class PageService {
  constructor(heroElement) {
    this.resourcesGet = heroElement;
  }
  async fetchArticles() {
    try {
      const responce = await request.get(`${BASE_URL}/${this.resourcesGet}`);
      console.log(responce);
      return responce;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(payload) {
    try {
      const result = await this.repository.create(payload);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw {error};
    }
  }

  async destroy(id) {
    try {
      const result = await this.repository.destroy(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw {error};
    }
  }

  async get(id) {
    try {
      const result = await this.repository.get(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw {error};
    }
  }

  async getAll() {
    try {
      const result = await this.repository.getAll();
      return result;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw {error};
    }
  }

  async update(id) {
    try {
      const result = await this.repository.update(id, payload);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw {error};
    }
  }
}


module.exports = CrudService;
class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(payload) {
    try {
      const result = await this.model.create(payload);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await this.model.find({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const result = await this.model.destroy({
        where: {
          id: id,
        },
      });
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await this.model.findAll();
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async update(payload,id) {
    try {
        const result = await this.model.update(payload,{
          where: {
            id: id,
          },
        });
        return result;
      } catch (error) {
        console.log("Something went wrong in crud repo");
        throw error;
      }
  }
}

module.exports = CrudRepository;

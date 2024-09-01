import { CreateUserUsecase } from "../usecase/create-user/create-user";

export class UserService {
  private createUserUsecase: CreateUserUsecase;

  constructor() {
    this.createUserUsecase = new CreateUserUsecase();
  }

  async createUser(body: any) {
    return await this.createUserUsecase.execute(body);
  }
}

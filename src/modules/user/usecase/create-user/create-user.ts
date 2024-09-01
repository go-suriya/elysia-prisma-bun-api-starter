import { UserRepository } from "../../repository/user-repository/user-repository";

export class CreateUserUsecase {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(body: any) {
    const result = await this.userRepository.create(body);
    return result;
  }
}

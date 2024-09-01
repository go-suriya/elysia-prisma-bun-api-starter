import { UserService } from "../service/user-service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(body: any) {
    return await this.userService.createUser(body);
  }
}

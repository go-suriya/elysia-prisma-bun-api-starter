export class PosController {
  async login() {
    return {
      message: "User logged in successfully!",
      data: "token",
    };
  }
}

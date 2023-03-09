import { User as UserType } from "../types";

class User {
  user: UserType

  setUser(user: UserType) {
    this.user = user;
  }

  getUser() {
    return this.user
  }
}
  
export default new User();
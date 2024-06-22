import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const registerUserIntoDB = async (user: TUser) => {
  const result = await User.create(user);
  const { password, ...userWithoutPassword } = result.toObject();
  return userWithoutPassword;
};

export const AuthServices = {
  registerUserIntoDB,
};

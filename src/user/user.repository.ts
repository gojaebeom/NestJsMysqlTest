import { EntityRepository, Repository } from "typeorm";
import { User } from "./entitiy/user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User>{ }
import { IUserRepository, ICreateUserGateway, CreateUserGatewayParams, CreateUserData } from '../interfaces/';
import { UserEntity } from '../entities/user.entity';
import { MixCreateUserService } from '../../../adapters/gateways/create.user.gateway';


export class CreateUserGateway extends MixCreateUserService implements ICreateUserGateway {
  userRepository: IUserRepository;

  constructor(params: CreateUserGatewayParams) {
    super();
    this.userRepository = params.repository;
  }

  async createUser(data: CreateUserData): Promise<UserEntity> {
    return this.userRepository.create(data);
  }

  async findUserByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.find({ email});
  };
}
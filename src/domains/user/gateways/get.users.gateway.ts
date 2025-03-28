import { IUserRepository, IGetUsersGateway, GetUsersGatewayParams, FindCriteria } from '../interfaces/';
import { UserEntity } from '../entities/user.entity';
import { MixGetUsersService } from '../../../adapters/gateways/get.users.gateway';

export class GetUsersGateway extends MixGetUsersService implements IGetUsersGateway {
  userRepository: IUserRepository;

  constructor(params: GetUsersGatewayParams) {
    super(params);
    this.userRepository = params.repository;
  }

  async getUsers(data: FindCriteria): Promise<UserEntity[] | null> {
    return this.userRepository.findAll(data);
  }
}

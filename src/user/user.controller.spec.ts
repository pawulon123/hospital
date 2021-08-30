import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Parmas } from '../shared/params';
describe('UserController', () => {
  let controller: UserController;
  const mockUserService = {
    create: jest.fn(dto => {
      return {
        id: Date.now(),
        ...dto
      }
    }),
    update: jest.fn().mockImplementation((id, dto) => true),
    destroy: jest.fn().mockImplementation(params => true),
    findOne: jest.fn().mockImplementation(params => {
      return {
        id: Number(params),
        mail: 'pawulon@open.pl',
        password: 'password'
      }
    }),
    index: jest.fn().mockImplementation(() => {
      return [{
        id: 1,
        mail: 'pawulon@open.pl',
        password: 'password'

      }]
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService]
    })
      .overrideProvider(UserService)
      .useValue(mockUserService)
      .compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  }),

  it('should create a user', () => {
    const body = {
      id: 1,
      mail: 'pawulon@open.pl',
      password: 'password'
    }
    expect(controller.create(body))
      .toEqual(Object.assign(body, { id: expect.any(Number) }))
    expect(mockUserService.create).toHaveBeenCalledWith(body);
  }),
  it('should update a user', () => {
    const body = {
      id: 1,
      mail: 'pawulon@open.pl',
      password: 'password'
    }
    let params: Parmas = {id:'1'};
    expect(controller.update(params, body)).toEqual(expect.any(Boolean))
    expect(mockUserService.update).toHaveBeenCalledWith(params.id, body);   
  }),
  it('should deleted a user', () => {
    let params: Parmas = {id:'1'};
    expect(controller.destroy(params)).toEqual(expect.any(Boolean));
    expect(mockUserService.destroy).toHaveBeenCalledWith(params.id);
  }),
  it('should give one bed', () => {
    let params: Parmas = {id:'1'};
    const user = {
      id: 1,
      mail: 'pawulon@open.pl',
      password: 'password'
    }
    expect(controller.one(params)).toEqual(user);
    expect(mockUserService.findOne).toHaveBeenCalledWith(params.id);
  }),
  it('should give  users', () => {
    
    expect(controller.all()[0]).toHaveProperty('id',1);
    expect(mockUserService.index).toHaveBeenCalled();
  })
});

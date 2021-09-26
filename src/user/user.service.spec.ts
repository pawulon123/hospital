import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { WardUserService } from '../ward-user/ward-user.service';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
export class MockWardUserService implements Partial<WardUserService> {

} 
describe('UserService', () => {
  let service: UserService;
  // let mockWardUserService = new MockWardUserService();

  let mockUserRepository = {
    save: jest.fn().mockImplementation(user => {
      return Promise.resolve({
        id: Date.now(),
        ...user
      })
    }),
    update: jest.fn().mockImplementation((id, body) => {
      return Promise.resolve({
        affected: 1
      })
    }),
    delete: jest.fn().mockImplementation(id => {
      return Promise.resolve({
        affected: 1
      })
    }),
    findOne: jest.fn().mockImplementation(id => {
      return Promise.resolve({
        id: Number(id),
        mail: 'pawulon@open.pl',
        password: 'password'
      })
    }),
    find: jest.fn().mockImplementation(() => {
      return Promise.resolve([{
        id: 1,
        mail: 'pawulon@open.pl',
        password: 'password'
      }])
    })
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, 
        {
        provide: getRepositoryToken(UserEntity),
        useValue: mockUserRepository
      },
    ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // it('should create new bed record and return that', async () => {
  //   const body = {
  //     id: 1,
  //     mail: 'pawulon@open.pl',
  //     password: 'password'
  //   }
  //   expect(await service.create(body)).toEqual({
  //     id: expect.any(Number),
  //     ...body
  //   })
  //   expect(await mockUserRepository.save).toHaveBeenCalledWith(body)
  // });
  // it('should update  bed record and return true', async () => {
  //   const body = {
  //     id: 1,
  //     mail: 'pawulon@open.pl',
  //     password: 'password'
  //   }
  //   expect(await service.update('1', body)).toBeTruthy();
  //   expect(await mockUserRepository.update).toHaveBeenCalledWith('1', body)
  // });
  // it('should delete  bed  and return true', async () => {
  //   expect(await service.destroy('1')).toBeTruthy();
  //   expect(await mockUserRepository.delete).toHaveBeenCalledWith('1')
  // });
  it('should give one bed record ', async () => {
    const bed = {
      id: 1,
      mail: 'pawulon@open.pl',
      password: 'password'
    }
    expect(await service.findOne('1')).toEqual(bed);
    expect(await mockUserRepository.findOne).toHaveBeenCalledWith('1');
  });
  it('should give beds  ', async () => {
    expect((await service.index())[0]).toHaveProperty('id');
    expect(await mockUserRepository.find).toHaveBeenCalled();
  });
});

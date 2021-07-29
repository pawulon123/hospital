import { BedEntity } from '../bed/bed.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { BedService } from './bed.service';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('BedService', () => {
  let service: BedService;
  let mockBedRepository = {
    save: jest.fn().mockImplementation(bed => {
      return Promise.resolve({
        id: Date.now(),
        ...bed
      })}),
    update: jest.fn().mockImplementation((id, body) => {
      return Promise.resolve ({
        affected: 1
      })
    }),
    delete: jest.fn().mockImplementation(id => {
      return Promise.resolve ({
        affected: 1
      })
    }),
    findOne: jest.fn().mockImplementation(id => {
      return Promise.resolve({
        id: Number(id),
        id_room: 1,
        x_svg: 2,
        y_svg: 5,
        rotate: 18,
        type: "basic"
      })}),
      find: jest.fn().mockImplementation(() => {
        return Promise.resolve([{
          id: 1,
          id_room: 1,
          x_svg: 2,
          y_svg: 5,
          rotate: 18,
          type: "basic"
        }])})   
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BedService,{
        provide: getRepositoryToken(BedEntity),
        useValue: mockBedRepository
      }],
    }).compile();

    service = module.get<BedService>(BedService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create new bed record and return that', async () => {
    const body = {
      id_room: 1,
      x_svg: 2,
      y_svg: 5,
      rotate: 18,
      type: "basic"
    }
    expect(await service.create(body)).toEqual({
      id: expect.any(Number),
      ...body
    })
    expect(await mockBedRepository.save).toHaveBeenCalledWith(body)
  });

  it('should update  bed record and return true', async () => {
    const body = {
      id_room: 1,
      x_svg: 2,
      y_svg: 5,
      rotate: 18,
      type: "basic"
    }
    expect(await service.update('1', body)).toBeTruthy();
    expect(await mockBedRepository.update).toHaveBeenCalledWith('1',body)
  });
  it('should delete  bed  and return true', async () => {
    expect(await service.destroy('1')).toBeTruthy();
    expect(await mockBedRepository.delete).toHaveBeenCalledWith('1')
  });
  it('should give one bed record ', async () => {
    const bed = {
      id: 1,
      id_room: 1,
      x_svg: 2,
      y_svg: 5,
      rotate: 18,
      type: "basic"
    }
    expect(await service.findOne('1')).toEqual(bed);
    expect(await mockBedRepository.findOne).toHaveBeenCalledWith('1');
  });
  it('should give beds  ', async () => {
    expect((await service.index())[0]).toHaveProperty('id_room');
    expect(await mockBedRepository.find).toHaveBeenCalled();
  });

});

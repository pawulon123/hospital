import { Test, TestingModule } from '@nestjs/testing';
import { Parmas } from 'src/shared/params';
import { BedController } from './bed.controller';
import { BedService } from './bed.service';


describe('BedController', () => {
  let controller: BedController;
  const mockBedService = {
    create: jest.fn(dto => {
      return {
        id: Date.now(),
        ...dto
      }
    }),
    // other way
    update: jest.fn().mockImplementation((id,dto) => true),
    destroy: jest.fn().mockImplementation(params => true),
    findOne: jest.fn().mockImplementation(params => {
        return {
        id: Number(params),
        id_room: 1,
        x_svg: 2,
        y_svg: 5,
        rotate: 18,
        type: "basic"
        
      }
    }),
    index: jest.fn().mockImplementation(() => {
      return [{
        id: 1,
        id_room: 1,
        x_svg: 2,
        y_svg: 5,
        rotate: 18,
        type: "basic"
        
      }]
    })
   
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BedController],
      providers: [BedService]
    })
      .overrideProvider(BedService)
      .useValue(mockBedService)
      .compile();

    controller = module.get<BedController>(BedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a bed', () => {
    const body = {
      id_room: 1,
      x_svg: 2,
      y_svg: 5,
      rotate: 18,
      type: "basic"
    }
    expect(controller.create(body))
      .toEqual(Object.assign(body, { id: expect.any(Number) }))
    expect(mockBedService.create).toHaveBeenCalledWith(body);
  }),
  it('should update a bed', () => {
    const body = {
      id_room: 1,
      x_svg: 2,
      y_svg: 5,
      rotate: 18,
      type: "basic"
    }
    let params: Parmas = {id:'1'};
    expect(controller.update(params, body)).toEqual(expect.any(Boolean))  //toEqual();
    expect(mockBedService.update).toHaveBeenCalledWith(params.id, body);   
  })
  
  it('should deleted a bed', () => {
    let params: Parmas = {id:'1'};
    expect(controller.destroy(params)).toEqual(expect.any(Boolean));
    expect(mockBedService.destroy).toHaveBeenCalledWith(params.id);
  })

  it('should give one bed', () => {
    let params: Parmas = {id:'1'};
    const bed = {
      id: 1,
      id_room: 1,
      x_svg: 2,
      y_svg: 5,
      rotate: 18,
      type: "basic"
    }
    expect(controller.one(params)).toEqual(bed);
    expect(mockBedService.findOne).toHaveBeenCalledWith(params.id);
  })
  it('should give  beds', () => {
    
    expect(controller.all()[0]).toHaveProperty('id_room',1);
    expect(mockBedService.index).toHaveBeenCalled();
  })

});


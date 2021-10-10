import { Inject, Injectable } from '@nestjs/common';
import {
  GetAllTaskDTO,
  IGetAllTaskQueryService,
} from './QueryServiceInterface/GetAllTask.queryServiceInterface';

@Injectable()
export class GetAllTaskUseCase {
  public constructor(
    @Inject('IGetAllTaskQueryService')
    private readonly getAllTaskQueryService: IGetAllTaskQueryService,
  ) {}

  public async execute(): Promise<GetAllTaskDTO[]> {
    try {
      return await this.getAllTaskQueryService.getAll();
    } catch (error) {
      throw error;
    }
  }
}

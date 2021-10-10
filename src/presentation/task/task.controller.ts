import { Controller, Get } from '@nestjs/common';
import { GetAllTaskUseCase } from 'src/usecase/task/GetAllTask.usecase';
import { GetAllTaskResponse } from './response/GetAllTask.response';

@Controller({ path: 'tasks' })
export class TaskController {
  constructor(private readonly getAllTaskUseCase: GetAllTaskUseCase) {}

  @Get('/')
  async getAllTasks(): Promise<GetAllTaskResponse> {
    const tasks = await this.getAllTaskUseCase.execute();
    const response = new GetAllTaskResponse({ tasks });
    return response;
  }
}

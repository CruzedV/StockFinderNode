import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

// Контроллер для сервиса операций. Операции по портфелю, покупки, продажи
@Controller()
export class OperationsController {
  @GrpcMethod('OperationsService', 'GetOperations')
  findOne(data, metadata, call) {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}

import { Catch, ExceptionFilter, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { HttpAdapterHost, AbstractHttpAdapter } from '@nestjs/core';
import { MetricsService } from '../metrics/metrics.service';
import { Request } from 'express';
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private httpAdapter: AbstractHttpAdapter;

  constructor(adapterHost: HttpAdapterHost, private readonly metricsService: MetricsService) {
    this.httpAdapter = adapterHost.httpAdapter;
  }

  catch(exception: Error, host: ArgumentsHost) {
    try {
      const contexto = host.switchToHttp();
      const requisicao = contexto.getRequest<Request>();
      const resposta = contexto.getResponse();

      const { status, body } =
        exception instanceof HttpException
          ? {
              status: exception.getStatus(),
              body: exception.getResponse(),
            }
          : {
              status: HttpStatus.INTERNAL_SERVER_ERROR,
              body: {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                message: exception.message,
                path: requisicao.path,
              },
            };

      this.metricsService.error(
        requisicao.route?.path ?? requisicao.path,
        requisicao.method,
        status,
        exception.message,
      );

      this.httpAdapter.reply(resposta, body, status);
    } catch (error) {}
  }
}

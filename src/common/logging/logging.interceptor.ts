import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { MetricsService } from '../metrics/metrics.service';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly metricsService: MetricsService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();

    if (request.path === '/metrics') {
      return next.handle();
    }

    this.metricsService.log(request.path);

    return next.handle();
    // .pipe(tap((r) => console.log(r, `After... ${Date.now() - now}ms`)));
  }
}

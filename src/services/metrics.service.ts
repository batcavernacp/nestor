import { Injectable } from "@nestjs/common";
import { InjectMetric } from "@willsoto/nestjs-prometheus";
import { Counter } from "prom-client";

@Injectable()
export class MetricsService {
  constructor(@InjectMetric("visita") private counter: Counter<string>) {
  }

  log(uri: string) {
    this.counter.inc({ uri })
  }
}

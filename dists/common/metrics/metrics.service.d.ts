import { Counter } from "prom-client";
export declare class MetricsService {
    private counter;
    constructor(counter: Counter<string>);
    log(uri: string): void;
}

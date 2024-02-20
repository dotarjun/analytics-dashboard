type AnalyticsArgs = {
  retention?: number;
};

export class Analytics {
  private retention: number = 60 * 60 * 24 * 7;

  constructor(opts?: AnalyticsArgs) {
    this.retention = opts?.retention || this.retention;
  }
}

const analytics = new Analytics();

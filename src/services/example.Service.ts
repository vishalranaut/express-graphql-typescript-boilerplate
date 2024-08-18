import { samples, Sample } from "../mockdata/sample";

export class SampleService {
  public async findSampleById(id: string): Promise<Sample | undefined> {
    return samples.find((sample) => sample.id === id);
  }
}

export default new SampleService();

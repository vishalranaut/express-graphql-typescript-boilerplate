import { Sample } from "../mockdata/sample";
import ExampleService from "../services/example.Service";

export const resolvers = {
  Query: {
    async matches(
      _: any,
      { sampleId }: { sampleId: string }
    ): Promise<Sample[]> {
      const sample = await ExampleService.findSampleById(sampleId);

      if (!sample) {
        return [];
      }

      return [sample];
    },
  },
};

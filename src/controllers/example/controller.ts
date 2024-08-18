import { Request, Response } from "express";
import SampleService from "../../services/example.Service";

export class SampleController {
  findSampleById = async (req: Request, res: Response) => {
    const sampleId = req.query.sampleId as string;

    if (!sampleId) {
      return res.status(400).json({ error: "Sample ID is required" });
    }

    try {
      const sample = await SampleService.findSampleById(sampleId);

      if (!sample) {
        return res.status(404).json({ error: "Sample not found" });
      }

      res.json(sample);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  };
}

export default new SampleController();

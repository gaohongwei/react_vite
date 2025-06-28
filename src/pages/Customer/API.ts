export interface Feature {
  featureId: string;
  featureValues: (string | null)[];
}

export interface SplitMetadata {
  splitId: string;
  modelIds: string[];
  dataCollection: string;
  features: Feature[];
}

export const existingDataPromise: Promise<SplitMetadata[]> = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          splitId: "test",
          modelIds: ["january", "feburary", "q1"],
          dataCollection: "winter",
          features: [
            {
              featureId: "age",
              featureValues: ["44", "10", "9", "20", "93", "35", "24"],
            },
            {
              featureId: "gender",
              featureValues: ["f", "f", "m", "m", "m", "f", "f"],
            },
          ],
        },
        {
          splitId: "test2",
          modelIds: ["january", "feburary", "q1"],
          dataCollection: "winter",
          features: [
            {
              featureId: "age",
              featureValues: ["44", "10", "9", "20", "93", "35", "24"],
            },
            {
              featureId: "gender",
              featureValues: ["f", "f", "m", "m", "m", "f", "f"],
            },
          ],
        },
      ]);
    }, 3000);
  }
);

export const newDataPromise: Promise<SplitMetadata[]> = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          splitId: "train",
          modelIds: ["june", "august", "q3"],
          dataCollection: "summer",
          features: [
            {
              featureId: "age",
              featureValues: ["55", "56", "23", null, "100", "63", "13"],
            },
            {
              featureId: "gender",
              featureValues: ["m", "f", "m", "m", "f", null, "f"],
            },
          ],
        },
      ]);
    }, 5000);
  }
);

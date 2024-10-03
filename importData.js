import fs from 'fs';
import csv from 'csv-parser';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const results = [];

  fs.createReadStream("assignmentData.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      for (const item of results) {
        await prisma.deviceData.create({
          data: {
            device: item.device,
            start_time: parseInt(item.start_time),
            data_extra: item.data_extra,
            mbrt: parseInt(item.mbrt),
          },
        });
      }
      console.log("Data imported successfully!");
      await prisma.$disconnect();
    });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

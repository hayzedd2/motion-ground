import fs from "fs";
import path from "path";

export interface ExperimentMetadata {
  title: string;
  summary: string;
  date: string;
  tags?: string[];
  slug: string;
  isArchive?:boolean
}

export async function getAllExperiments(): Promise<ExperimentMetadata[]> {
  const experimentsDir = path.join(process.cwd(), "app/(lab)");
  const entries = fs.readdirSync(experimentsDir, { withFileTypes: true });
  const experimentFolders = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  const experiments: ExperimentMetadata[] = [];

  for (const folder of experimentFolders) {
    try {
      // Check if metadata.ts exists
      const metadataPath = path.join(experimentsDir, folder, "metadata.ts");

      if (fs.existsSync(metadataPath)) {
        // Dynamically import the metadata file
        const { metadata } = await import(`@/app/(lab)/${folder}/metadata`);
        experiments.push({
          ...metadata,
          slug: folder,
        });
      }
    } catch (error) {
      console.warn(`Could not load experiment: ${folder}`, error);
    }
  }

  return experiments.filter((exp)=>exp.isArchive !== true).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export function getAdjacentExperiments(
  currentSlug: string,
  allExperiments: ExperimentMetadata[],
): { previous: ExperimentMetadata | null; next: ExperimentMetadata | null } {
  const currentIndex = allExperiments.findIndex(
    (exp) => exp.slug === currentSlug,
  );

  return {
    previous: currentIndex > 0 ? allExperiments[currentIndex - 1] : null,
    next:
      currentIndex < allExperiments.length - 1
        ? allExperiments[currentIndex + 1]
        : null,
  };
}

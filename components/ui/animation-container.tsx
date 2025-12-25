import { ExperimentMetadata } from "@/lib/experiments";
import { cn } from "@/lib/utils";

export const AnimationContainer = ({
  children,
  metadata,
  className,
}: {
  children: React.ReactNode;
  metadata: Omit<ExperimentMetadata, "slug">;
  className?: string;
}) => {
  const { title, summary } = metadata;
  return (
    <div>
      <div className="w-full pb-5">
        <h1 className="text-[1.2rem]">{title}</h1>
        <p className="text-[0.85rem]">{summary}</p>
      </div>
      <div
        className={cn(
          "min-h-[400px] max-h-[400px]  flex relative gap-2 px-3 bg-[#0B0B09] bx-shadow rounded-xl xl:min-w-[37.5rem] xl:max-w-[400px] sm:w-full overflow-hidden items-center justify-center border-2 border-[hsla(0,0%,100%,.03)]",
          className, // put this last so it overrides
        )}
      >
        {children}
      </div>
    </div>
  );
};

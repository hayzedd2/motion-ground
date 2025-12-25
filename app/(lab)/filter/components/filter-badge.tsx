import { FilterProp } from "../../../components/type";

export const FilterBadge = ({ name, svg, color }: FilterProp) => {
  
  return (
    <div className="rounded-lg bx-shadow bg-inherit px-[0.5rem] py-1 flex gap-2 cursor-pointer items-center">
      <div
        className={`w-[1em] h-[1em]`}
        style={{
          color: color,
        }}
      >
        {svg}
      </div>
      <p className="text-[0.8rem] font-[400]">{name}</p>
    </div>
  );
};

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CSSProperties } from "react";

interface SvgItemProps {
  id: string;
  svg: string;
  name: string;
}

export const SvgItem = ({ id, svg, name }: SvgItemProps) => {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });
  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    // transition,
  };

  return (
    <div
      {...attributes}
      {...listeners}
      style={style}
      ref={setNodeRef}
      className="flex flex-col gap-2 items-center flex-grow min-w-20 h-full overflow-hidden"
    >
      <div className="flex-grow h-1 [&_svg]:w-full [&_svg]:h-full" dangerouslySetInnerHTML={{ __html: svg }} />
      <p className="h-10">{name}</p>
    </div>
  )
}

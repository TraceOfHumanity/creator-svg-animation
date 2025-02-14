import {
  DndContext,
  closestCenter,
  DragEndEvent,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SvgItem } from "./SvgItem";

interface ListOfFramesProps {
  svgs: { id: string, svg: string, name: string }[];
  handleDragEnd: (event: DragEndEvent) => void;
}

export const ListOfFrames = ({ svgs, handleDragEnd }: ListOfFramesProps) => {
  return (
    <div className="flex gap-4 overflow-x-auto overflow-y-hidden min-h-56">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToHorizontalAxis]}
      >
        <SortableContext
          items={svgs.map((svg) => svg.id)}
          strategy={horizontalListSortingStrategy}
        >
          {svgs.map((svg, index) => (
            <SvgItem key={index} id={svg.id} svg={svg.svg} name={svg.name} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  )
}

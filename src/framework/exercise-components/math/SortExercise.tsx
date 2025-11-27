import {type ReactNode, useState} from "react";
import {closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors,} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {Button} from "@mui/material";
import {createIndexArray} from "../../util/createIndexArray.ts";
import {getShuffled} from "../../util/random/getShuffled.ts";
import type {ExerciseComponentProps} from "../../types.tsx";
import {useExerciseFeedback} from "../useExerciseFeedback.tsx";

export interface SortExerciseProps extends ExerciseComponentProps {
    description: ReactNode;
    items: ReactNode[];
}

export function SortExercise(props: SortExerciseProps) {
    const feedback = useExerciseFeedback();
    const disabled = props.finished || feedback.disabled;
   
    const [itemIds, setitemIds] = useState(getShuffled(createIndexArray(props.items.length)));

    function onClickCheckButton() {
        feedback.finish(props, itemIds.every((itemId, index) => itemId === index));
    }

    function handleDragEnd(event: any) {
        const {active, over} = event;

        if (active.id !== over.id) {
            setitemIds((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    
    return <>
        <p>{props.description}</p>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={itemIds} strategy={verticalListSortingStrategy} disabled={disabled}>
                {itemIds.map(id => <Item key={id} id={id} content={props.items[id]} />)}
            </SortableContext>
        </DndContext>
        <p style={{textAlign: "center"}}>
            <Button variant="contained" onClick={onClickCheckButton} disabled={disabled}>{"check"}</Button>
        </p>
    </>;
}

// --------------------------------------------------------------------------------------------------------------------
// item
// --------------------------------------------------------------------------------------------------------------------

interface ItemProps {
    id: number;
    content: ReactNode;
}

export function Item(props: ItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        border: "2px solid #aaa",
        marginBottom: "0.6em",
        backgroundColor: "#eee",
        borderRadius: "2em",
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {props.content}
        </div>
    );
}

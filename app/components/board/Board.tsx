import React, { useEffect, useState } from 'react';
import {Button} from "@nextui-org/react";
import { FaBeer, FaTextWidth } from "react-icons/fa";
import { FaHandsBubbles } from 'react-icons/fa6';
import { CgFormatText, CgImage } from "react-icons/cg";
import {DragOverlay, useDroppable} from '@dnd-kit/core';
import {useDraggable} from '@dnd-kit/core';

import {DndContext} from '@dnd-kit/core';
import {Draggable} from '../Draggable';
import {Droppable} from '../Droppable';

import { nanoid } from 'nanoid'

const Board = () => {

    // const [parent, setParent] = useState(null);

    const [parents, setParents]: any[] = useState([])
    const [activeId, setActiveId] = useState(null);

    const [menuItems, setMenuItems] = useState({
        bubbles: {
            "title": "Bubbles",
            menu: [
                {
                    techId: nanoid(),
                    title: "Text",
                    icon: <CgFormatText className="ml-1" size={24}/>
                },
                {
                    techId: nanoid(),
                    title: "Image",
                    icon: <CgImage className="ml-1" size={24}/>
                }
            ]
        },
        inputs: [],
        logics: [],
        integrations: []
    });


    useEffect( () => {
        console.log(parents);
    }, [parents]);

    function handleDragEnd ({over}: {over:any}) {
        if ( over && over.id ) {
            setParents([...parents, {overId:over.id, techId: activeId}])
        }
    }

    function handleDragStart( event:any ) {
        setActiveId(event.active.id)
    }


    return ( 
        <div className="mx-auto container bg-red-600">
            <div className='flex'>
                <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
                    <div className='w-[30%]'>
                        <div className='flex space-x-1 p-2'>
                            {
                                menuItems.bubbles.menu.map((item, index) => {
                                    return (
                                        <Draggable id={`${item.techId}`}>
                                            <div key={index} className='flex bg-blue-200 rounded-lg py-1 px-1'>
                                                <p>{item.title}</p>
                                                <div>{item.icon}</div>
                                            </div>
                                        </Draggable>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className='w-[70%] bg-green-100'>

                        <Droppable id="droppable">
                            {
                                parents.length > 0 ? 
                                (
                                    parents.map((parent: any, index: number) => {
                                        return (
                                            <div key={index} className='flex bg-blue-200 rounded-lg py-1 px-1'>
                                                <p>{parent.techId}</p>
                                                <p>{menuItems.bubbles.menu.filter(mitem => mitem.techId  === parent.techId )[0].title}</p>
                                                <div>{menuItems.bubbles.menu.filter(mitem => mitem.techId  === parent.techId )[0].icon}</div>
                                            </div>
                                        );
                                    })
                                )
                                : "Drop here"
                            }
                        </Droppable>

                        

                    </div>
                    <DragOverlay dropAnimation={null}> {/** here to disable animation, div not "go back" to the menu with animation */}
                        {
                            activeId ? 
                                <div key={activeId} className='flex bg-blue-200 rounded-lg py-1 px-1'>
                                    <p>{menuItems.bubbles.menu.filter(mitem => mitem.techId  === activeId )[0].title}</p>
                                    <div>{menuItems.bubbles.menu.filter(mitem => mitem.techId  === activeId )[0].icon}</div>
                                </div>
                            : null
                        }
                    </DragOverlay>
                </DndContext>
            </div>
        </div>
    )
}

// const Board = () => {

//     useEffect(() => {
//         const workspace = d3.select("#board").style("width", "10000em").style("height", "10000em").style("overflow", "hidden")
//         // const workspace = d3.select("#board")
//         //     .style("position", "relative")
//         //     .style("width", "100%") // Use viewport width (vw) or a fixed px value
//         //     .style("height", "100%") // Use viewport height (vh) or a fixed px value
//         //     .style("border", "1px solid black");

//         const nodes = [
//             { x: 0, y: 0, width: 100, height: 100, fill: "red" },
//             { x: 100, y: 100, width: 100, height: 100, fill: "blue" }
//         ];

//         const path = d3.path().lineTo(100, 200);

//         // show line
//         workspace.append("path")
//             .attr("d", "M0,0 L100,200") // Replace d3.path().lineTo(100, 200) with a valid path string
//             .attr("stroke", "black")
//             .attr("stroke-width", 2)
//             .attr("fill", "none");
        
//         nodes.forEach((node) => {
//             const div = workspace.append("div")
//                 .attr("class", "draggable")
//                 .style("position", "absolute")
//                 .style("cursor", "move") // Make it obvious it's draggable
//                 .style("left", node.x + "px")
//                 .style("top", node.y + "px")
//                 .style("width", node.width + "px")
//                 .style("height", node.height + "px")
//                 .style("background-color", node.fill);

//             // Initialize 24drag behavior
//             const dragHandler = d3.drag()
//                 .on("start", function (event) {
//                     const current = d3.select(this);
//                     d3.select(this).raise(); // Bring to front
//                 })
//                 .on("drag", function (event) {
//                     d3.select(this)
//                         .style("left", event.x + "px")
//                         .style("top", event.y + "px");
//                 });

//             dragHandler(div as any);
//         });

//         return () => {
//             // avoid create duplicate due to useEffect !
//             workspace.selectAll(".draggable").remove();
//         }
//     }, []);

//     return <div id="board"></div>;
// }

export default Board;

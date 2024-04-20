import React, { useState } from 'react';
import {Button} from "@nextui-org/react";
import { FaBeer } from "react-icons/fa";

const Board = () => {

    const [m, setM] = useState({
        bubbles: {
            "title": "Bubbles",
            menu: [
                {
                    title: "Text",
                    icon: <FaBeer></FaBeer>
                }
            ]
        },
        inputs: [],
        logics: [],
        integrations: []
    });

    return ( 
        <div className="mx-auto container bg-red-600">
            <div className='flex'>
                <div className='w-[30%]'>
                    <Button color="primary" variant="shadow">
                        Shadow
                    </Button>
                    <Button color="primary" variant="shadow">
                        Shadow
                    </Button>

                    <div>
                        {
                            m.bubbles.menu.map((item, index) => {
                                return (
                                    <div key={index} className='flex'>
                                        <p>{item.title}</p>
                                        <p>{item.icon}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-[70%] bg-green-100'>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                    <p>Get Started</p>
                </div>
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

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Board = () => {
    return ( 

        <div className='mx-auto container h-screen'>
            <div className='p-6 text-5xl font-extrabold leading-tight flex'>
                <p>TypeBot</p>
                <Image
                        src="/bot.png"
                        alt="Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                    />
            </div>
            {/* <div className='px-2 text-xl text-[#666666]'>
                    MMMp
                </div> */}
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

import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Board = () => {

    useEffect(() => {
            
        const workspace = d3.select("#board")
            .style("position", "relative")
            .style("width", "100vw") // Use viewport width (vw) or a fixed px value
            .style("height", "100vh") // Use viewport height (vh) or a fixed px value
            .style("border", "1px solid black");

        const nodes = [
            { x: 0, y: 0, width: 100, height: 100, fill: "red" },
            { x: 100, y: 100, width: 100, height: 100, fill: "blue" }
        ];

        nodes.forEach((node) => {
            const div = workspace.append("div")
                .attr("class", "draggable")
                .style("position", "absolute")
                .style("cursor", "move") // Make it obvious it's draggable
                .style("left", node.x + "px")
                .style("top", node.y + "px")
                .style("width", node.width + "px")
                .style("height", node.height + "px")
                .style("background-color", node.fill);

            // Initialize drag behavior
            const dragHandler = d3.drag()
                .on("start", function (event) {
                    d3.select(this).raise(); // Bring to front
                })
                .on("drag", function (event) {
                    d3.select(this)
                        .style("left", event.x + "px")
                        .style("top", event.y + "px");
                });

            dragHandler(div as any);
        });

        return () => {
            // avoid create duplicate due to useEffect !
            workspace.selectAll(".draggable").remove();
        }
    }, []);

    return <div id="board"></div>;
}

export default Board;

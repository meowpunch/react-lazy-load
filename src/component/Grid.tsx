import React from "react";
import Functions from "../util/Functions";

interface GridProps {
    arr: JSX.Element[]
    c: number
}

/*
    - chunk by col
    - spread them in Grid
 */
const Grid = (props: GridProps) => {
    const {arr, c} = props;

    const chunks: JSX.Element[][] = Functions.chunk(arr, c);

    return (
        <div>
            {chunks.map((c, i) => <div style={{width: 900, height: 300}} key={i}>{c}</div>)}
        </div>
    )
}


export default Grid;
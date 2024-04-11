// export default async function Compo() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos');
//     for ( let i = 0; i < 30; i++ ) {
//         let x = await fetch('https://jsonplaceholder.typicode.com/todos');
//         await x.json();
//         console.log(i);
//     }
//     const data = await res.json()
//     return (
//         <div>
//             {
//                 data.map((item:any) => (
//                     <div key={item.id}>
//                         <h1>{item.title}</h1>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }

import { wait } from "../lib/posts"



async function Compo() {

    await wait( Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000 )
    return ( 
        <div>
            <p>xm</p>
        </div>
    )
}

export default Compo
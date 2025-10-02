
// export async function TestAPI() {
//   const res = await fetch("http://localhost:3000/api", { cache: "no-store" });
//   const data = await res.json();

//   return (
//     <div>
//       {Object.entries(data).map(([category, items]) => (
//         <div key={category} style={{ marginBottom: "2rem" }}>
//           <h2>{category}</h2>

//           {items.map((item: any, index: number) => (
//             <div
//               key={index}
//               style={{
//                 marginBottom: "1rem",
//                 padding: "1rem",
//                 border: "1px solid #ccc",
//                 borderRadius: "8px",
//               }}
//             >
//               <p><strong>Canal:</strong> {item.channel}</p>
//               <p><strong>Música:</strong> {item.music}</p>
//               <iframe
//                 width="300"
//                 height="169"
//                 src={item.link}
//                 title={item.music}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

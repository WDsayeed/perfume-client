// import { useEffect, useState } from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// const MonthlySalesChart = () => {
//   const [salesData, setSalesData] = useState([]);

//   useEffect(() => {
//     // Fetch monthly sales data from your Express API
//     fetch("https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/monthly-sales")
//       .then((response) => response.json())
//       .then((data) => setSalesData(data))
//       .catch((error) => console.error(error));
//   }, []);

//   // // Check if salesData is an array before mapping
//   // const chartData = Array.isArray(salesData)
//   //   ? salesData.map((item) => ({
//   //       month: `${item.year}-${item.month}`,
//   //       totalSales: item.totalSales,
//   //     }))
//   //   : [];

//   const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
//   const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//     ${x + width / 2}, ${y}
//     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//     Z`;
//   };
  
//   const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;
  
//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//   };
  

//   return (
//     <BarChart
//     width={500}
//     height={300}
//     data={salesData}
//     margin={{
//       top: 20,
//       right: 30,
//       left: 20,
//       bottom: 5,
//     }}
//   >
//     <CartesianGrid strokeDasharray="3 3" />
//     <XAxis dataKey="totalSales" />
//     <YAxis />
//     <Bar dataKey="month" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//       {salesData.map((entry, index) => (
//         <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//       ))}
//     </Bar>
//   </BarChart>
//   );
// };

// export default MonthlySalesChart;


import React from 'react'
import {
  Tooltip,
  PieChart,
  Pie,
  Legend,
  ResponsiveContainer,
  Cell,Text
} from "recharts";
import './DonutChart.css'

const DonutChart = ({children}) => {
  const color = ["#4A148C", "#CFD8DC"]
  const data = [
    { data: [{name: "PS", value: 80},{ value: 20}]},
    { data: [{name: "IA", value: 80},{ value: 20}]},
    { data: [{name: "XD", value: 80},{ value: 20}]},
    { data: [{name: "score", value: 80},{ value: 20}]},
    { data: [{name: "score", value: 80},{ value: 20}]},
    { data: [{name: "score", value: 80},{ value: 20}]},
    { data: [{name: "score", value: 80},{ value: 20}]},
    { data: [{name: "score", value: 80},{ value: 20}]},
    { data: [{name: "score", value: 80},{ value: 20}]},
    { data: [{name: "score", value: 80},{ value: 20}]}
  ];
    return (
      <div id="container">
      <div className="pie-row">
        {data.map((obj, i) =>
          <div className="pie-wrap">
            <ResponsiveContainer height={120}>
              <PieChart>
                <Pie
                  dataKey="value"
                  data={obj.data}
                  outerRadius={33}
                  innerRadius={28}
                  startAngle={90}
                  endAngle={450}
                  cx={28}
                  cy={28}
                >
                  {color.map((obj, i) => <Cell key={i} fill={obj} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="dayWrap">
              <p>
              text
              </p>
            </div>
          </div>
        )}
      </div>
      </div>
    );
}

export default DonutChart

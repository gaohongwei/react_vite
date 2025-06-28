import Plot from "react-plotly.js";
const SimplePlot = () => {
  const xValues = ['Monday', 'Tuesday', 'Wednesday'];
  const yValues = ['Morning', 'Afternoon', 'Evening'];
  const zValues = [[1, 20, 30], [20, 1, 100], [30, 60, 1]];
  const data = [
    {
      z: zValues,
      x: xValues,
      y: yValues,
      type: "heatmap",
    },
  ];

  // z是每个小方格代表的颜色值。 x.length = 5; y.length = 3,so z.length = x.length * y.length;
  // 这样就很明显了， 获取数据源，然后计算数据就可以得到data数据，然后渲染出混淆矩阵

  let plotLayout = { width: 840, height: 840, title: "Confusion Matrix", annotations: [] };
  
  for(let i=0; i < yValues.length; i++ ) {
    for(let j = 0; j < xValues.length; j++ ) {
      const result = {
        x: xValues[j],
        y: yValues[i],
        text: zValues[i][j],
        showarrow: false,
        font: {
          color: 'white',
          size: 18
        }
      }
      plotLayout.annotations.push(result);
    }
  }

  return <Plot data={data} layout={plotLayout} />;
};

export default SimplePlot;

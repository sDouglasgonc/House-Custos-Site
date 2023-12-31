
import React from "react";
import { Chart } from "react-google-charts"
import "./PieChart.css"
import { useMediaQuery } from "react-responsive";
const data = [
  ["Task", "Hours per Day"],
  ["Água", 11],
  ["Energia", 2],
  ["Gás", 2],
  ["Cartão", 2],
  ["Mercado", 7],
  ["Previdencia Social", 6]
]

const options = {
  width: 320,
  height: 300,
  title: "% DE VALOR DAS CONTAS",
  is3D: true
}

const MobileS = {
  width: 200,
  height: 198,
  title: "% DE VALOR DAS CONTAS",
  is3D: true
}
const MobileMid = {
  width: 200,
  height: 200,
  title: "% DE VALOR DAS CONTAS",
  is3D: true
}
const MobileG = {
  width: 276,
  height: 200,
  title: "% DE VALOR DAS CONTAS",
  is3D: true
}
const Tablet = {
  width: 376,
  height: 290,
  title: "% DE VALOR DAS CONTAS",
  is3D: true
}


function Mobilefirst() {
  const smallScreen = useMediaQuery({
    query: "screen and (max-width: 320px)"
  })
  const middleScreen = useMediaQuery({
    query: "(min-width:321px) and (max-width: 375px)"
  })
  const grandScreen = useMediaQuery({
    query: "(min-width:376px) and (max-width: 425px)"
  })
  const TabletScreen = useMediaQuery({
    query: "(min-width:426px) and (max-width: 768px)"
  })
  if (smallScreen === true) {
    return MobileS
  } if (middleScreen === true) {
    return MobileMid
  }if(grandScreen == true){
return MobileG
  }if(TabletScreen == true){
return Tablet
  } else {
    return options
  }
}


function PieChart() {
  return (
    <div className="chart_pie">
      <Chart
        style={{
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
        chartType="PieChart"
        options={Mobilefirst()}
        data={data}

      />
    </div>
  )
}
export default PieChart
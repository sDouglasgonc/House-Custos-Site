import { Chart } from "react-google-charts"
import "./Charts.css"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
// aqui fica as opções do grafico de barras

const options = {
  width: 820,
  height: 360,
  chartArea: { width: "50%" },
  title: "LEVANTAMENTO DOS CUSTOS DA CASA",
  legend: { position: "right" },
  isStacked: true,
}

const MobileS = {
  width: 200,
  height: 200,
  chartArea: { width: "50%" },
  title: "LEVANTAMENTO DOS CUSTOS DA CASA",
  legend: { position: "right" },
  isStacked: true,
}

const MobileM = {
  width: 250,
  height: 200,
  chartArea: { width: "50%" },
  title: "LEVANTAMENTO DOS CUSTOS DA CASA",
  legend: { position: "right" },
  isStacked: true,
}
const MobileG = {
  width: 340,
  height: 200,
  chartArea: { width: "50%" },
  title: "LEVANTAMENTO DOS CUSTOS DA CASA",
  legend: { position: "right" },
  isStacked: true,
}
const Tablet = {
  width: 670,
  height: 364,
  chartArea: { width: "50%" },
  title: "LEVANTAMENTO DOS CUSTOS DA CASA",
  legend: { position: "right" },
  isStacked: true,
}

function Charts({ submitData, confirmPressed }) {
  // aqui fica os valores iniciais do grafico de barras
  const [chartData, setChartData] = useState([
    ["Meses do ano", "Água", "Energia", "Gás", "Cartão", "Mercado", "Previdencia Social", { role: 'anotation' }],
    ["Janeiro", 0, 0, 0, 0, 0, 0, ''],
    ["Fevereiro", 0, 0, 0, 0, 0, 0, ''],
    ["Março", 0, 0, 0, 0, 0, 0, ''],
    ["Abril", 0, 0, 0, 0, 0, 0, ''],
    ["Maio", 0, 0, 0, 0, 0, 0, ''],
    ["Jun", 0, 0, 0, 0, 0, 0, ''],
    ["Jul", 0, 0, 0, 0, 0, 0, ''],
    ["Ago", 0, 0, 0, 0, 0, 0, ''],
    ["Set", 0, 0, 0, 0, 0, 0, ''],
    ["Out", 0, 0, 0, 0, 0, 0, ''],
    ["Nov", 0, 0, 0, 0, 0, 0, ''],
    ["Dez", 0, 0, 0, 0, 0, 0, ''],])

  // aqui é o useEffect que é usado para atribuir os novos valores ao grafico de acordo com o numero preenchido nas boxes
  useEffect(() => {
    if (confirmPressed) {
      const newChartSData = [
        ["Meses do ano", "Água", "Energia", "Gás", "Cartão", "Mercado", "Previdencia Social", { role: 'anotation' }],
        ["Janeiro", 0, 0, 0, 0, 0, 0, ''],
        ["Fevereiro", 0, 0, 0, 0, 0, 0, ''],
        ["Março", 0, 0, 0, 0, 0, 0, ''],
        ["Abril", 0, 0, 0, 0, 0, 0, ''],
        ["Maio", 0, 0, 0, 0, 0, 0, ''],
        ["Jun", 0, 0, 0, 0, 0, 0, ''],
        ["Jul", 0, 0, 0, 0, 0, 0, ''],
        ["Ago", submitData["1"]?.valor || 0, submitData["2"]?.valor || 0, submitData["3"]?.valor || 0, submitData["4"]?.valor || 0, submitData["5"]?.valor || 0, submitData["6"]?.valor || 0, ''],
        ["Set", 0, 0, 0, 0, 0, 0, ''],
        ["Out", 0, 0, 0, 0, 0, 0, ''],
        ["Nov", 0, 0, 0, 0, 0, 0, ''],
        ["Dez", 0, 0, 0, 0, 0, 0, '']
      ]
      setChartData(newChartSData)

    }
  }, [submitData, confirmPressed])

  function Mobilefirst() {
    const smallScreen = useMediaQuery({
      query: " (max-width: 320px)"
    })
    const middleScreen = useMediaQuery({
      query: " (min-width:321px) and (max-width:375px)"
    })
    const GrandScreen = useMediaQuery({
      query: " (min-width:376px) and (max-width:425px)"
    })
    const TabletScreen = useMediaQuery({
      query: " (min-width:426px) and (max-width:768px)"
    })

    if (smallScreen === true) {
      return MobileS
    } if (middleScreen === true) {
      return MobileM
    } if (GrandScreen === true) {
      return MobileG
    } if(TabletScreen == true){
      return Tablet
    }else {
      return options
    }
  }
  console.log(Mobilefirst())

  // aqui fica o gráfico em si 
  return (
    <>
      <div className="grafico">
        <Chart
          style={{ width: "100%", display: "flex", justifyContent: "center", alignContent: "center", marginTop: 5 }}
          chartType="ColumnChart"
          data={chartData}
          options={Mobilefirst()}
          chartLanguage="pt-BR"
        />
      </div>
    </>
  )
}
export default Charts
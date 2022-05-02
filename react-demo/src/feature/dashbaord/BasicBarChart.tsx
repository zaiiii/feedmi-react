import React, { useEffect } from 'react'
//import './BasicBarChart.scss'
import * as d3 from 'd3'
import { Types } from './types'

interface ResponseData {
  count: number,
  emotion: string
}

interface IBasicBarChartProps {
  width: number
  height: number
  top: number
  right: number
  bottom: number
  left: number
  fill: string
  data: ResponseData[]
}

const BasicBarChart = (props: IBasicBarChartProps) => {
  useEffect(() => {
    draw();
  }, []);

  const draw = () => {

    const width = props.width - props.left - props.right
    const height = props.height - props.top - props.bottom
    const x = d3.scaleBand().range([0, width]).padding(0.1)
    const y = d3.scaleLinear().range([height, 0])
    console.log(d3
      .select('.basicBarChart'));
    const svg = d3
      .select('.basicBarChart')
      .append('svg')
      .attr('width', width + props.left + props.right)
      .attr('height', height + props.top + props.bottom)
      .append('g')
      .attr('transform', `translate(${props.left},${props.top})`)

    d3.dsv(',', './Data.csv', (d) => {
      return (d as unknown) as Types.Data
    }).then((data) => {
      // x.domain(
      //   data.map((d) => {
      //     return d.framework
      //   })
      // )
      // y.domain([
      //   0,
      //   d3.max(data, (d) => {
      //     return Math.max(...data.map((dt) => (dt as Types.Data).value), 0)
      //   }),
      // ] as number[])
      // console.log(svg.selectAll('.data'))
      // svg
      //   .selectAll('.bar')
      //   .data(data)
      //   .enter()
      //   .append('rect')
      //   .attr('fill', props.fill)
      //   .attr('class', 'bar')
      //   .attr('x', (d) => {
      //     return x(d.framework) || 0
      //   }).attr('width', x.bandwidth())
      //   .attr('y', (d) => {
      //     return y(d.value)
      //   })
      //   .attr('height', (d) => {
      //     return height - y(d.value)
      //   })
      // svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x))

      // svg.append('g').call(d3.axisLeft(y))
    })

    const data = [
      {'framework': 'jQuery', value: 43.3},
      {'framework': 'React.js', value: 35.9},
      {'framework': 'Angular', value: 25.1},
      {'framework': 'ASP.NET', value: 21.9},
      {'framework': 'Express', value: 21.2},
      {'framework': '.NET Core', value: 19.1},
    ];

    const data2 = props.data
  

    x.domain(
      data2.map((d) => {
        return d.emotion
      })
    )
    y.domain([
      0,
      d3.max(data2, (d) => {
        return Math.max(...data2.map((dt) => (dt as ResponseData).count), 0)
      }),
    ] as number[])
    console.log(svg.selectAll('.data'))
    svg
      .selectAll('.bar')
      .data(data2)
      .enter()
      .append('rect')
      .attr('fill', props.fill)
      .attr('class', 'bar')
      .attr('x', (d) => {
        return x(d.emotion) || 0
      }).attr('width', x.bandwidth())
      .attr('y', (d) => {
        return y(d.count)
      })
      .attr('height', (d) => {
        return height - y(d.count)
      })
    svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x))

    svg.append('g').call(d3.axisLeft(y))
  }
  return <div className="basicBarChart" />
}  

export default BasicBarChart
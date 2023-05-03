import React from "react";
import { useEffect, useState } from "react";
// import "./App.css";
import * as d3 from "d3";
import { useSelector } from "react-redux";

function GraphRelevances() {
  const { isLoading, isError, region, countries, sectors, relevances } =
    useSelector((state) => state.regionsData);

  useEffect(() => {
    // document.getElementById("chart").innerHTML = "";
    getGraph();
  }, [region]);

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  function getGraph() {
    const data = [];

    // Create data array in the required format
    for (let i = 0; i < countries.length; i++) {
      for (let j = 0; j < sectors.length; j++) {
        data.push({
          country: countries[i],
          sector: sectors[j],
          relevance: relevances[i][j] + 10,
        });
      }
    }

    // Set the dimensions and margins of the chart
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Set the x and y scales
    const x = d3.scaleBand().rangeRound([0, width]).padding(0.4);
    const y = d3.scaleLinear().rangeRound([height, 0]);

    // Append the svg element to the chart container
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Set the domains for the x and y scales
    x.domain(sectors);
    y.domain([0, 60]);

    // Append the bars
    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("stroke", "yellow")
      .attr("fill", "blue")
      .attr("x", (d) => x(d.sector))
      .attr("y", (d) => y(d.relevance))
      .attr("width", x.bandwidth() / countries.length)
      .attr("height", (d) => height - y(d.relevance))
      .attr("transform", (d, i) => {
        let translate = [0, 0];
        for (let i = 0; i < countries.length; i++) {
          if (d.country == countries[i]) {
            translate = [(x.bandwidth() / countries.length) * i, 0];
            break;
          }
        }
        return "translate(" + translate + ")";
      });

    // Append the labels for each bar
    svg
      .selectAll(".label")
      .data(data)
      .enter()
      // .call(d3.axisLeft(y).ticks(10))
      .append("text")
      .attr("class", "label")
      .text((d) => d.country)
      .style("fill", "yellow")
      .style("stroke", "purple")
      .style("font-size", "16px")
      .attr("x", (d) => x(d.sector))
      .attr("y", (d) => y(d.relevance) - 10)
      .style("text-anchor", "end")
      .style("alignment-baseline", "middle")
      .style("writing-mode", "vertical-rl")
      .style("glyph-orientation-vertical", 0)

      // .attr("transform", "rotate(-90)")
      // .attr("text-anchor", "middle")
      // .style("text-anchor", "end")
      .attr("font-size", "20px")
      .attr("transform", (d, i) => {
        let translate = [0, 0];

        for (let i = 0; i < countries.length; i++) {
          if (d.country == countries[i]) {
            translate = [(x.bandwidth() / countries.length) * i, 0];
            break;
          }
        }
        return "translate(" + translate + ")";
      });
    // Append the x axis
    svg
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Append the y axis
    svg.append("g").attr("class", "axis").call(d3.axisLeft(y).ticks(10));
  }
}

export default GraphRelevances;

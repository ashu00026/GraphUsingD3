/////////////////////////////////////   DRAW REGION GRAPHS    //////////////////////////////////////////////

function displayIntensityGraphRegion(countries, sectors, intensities) {
  const data = [];
  // Create data array in the required format
  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < sectors.length; j++) {
      data.push({
        country: countries[i],
        sector: sectors[j],
        intensity: intensities[i][j] + 10,
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
    .attr("fill", "red")
    .attr("x", (d) => x(d.sector))
    .attr("y", (d) => y(d.intensity))
    .attr("width", x.bandwidth() / countries.length)
    .attr("height", (d) => height - y(d.intensity))
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
    .style("stroke", "black")
    .style("font-size", "14px")
    .attr("x", (d) => x(d.sector))
    .attr("y", (d) => y(d.intensity) - 10)
    .style("text-anchor", "end")
    .style("alignment-baseline", "middle")
    .style("writing-mode", "vertical-rl")
    .style("glyph-orientation-vertical", 0)

    // .attr("transform", "rotate(-90)")
    // .attr("text-anchor", "middle")
    // .style("text-anchor", "end")
    .attr("font-size", "20px")
    .attr("transform", (d, i) => {
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

function displayLiklihoodGraphRegion(countries, sectors, likelihoods) {
  const data = [];

  // Create data array in the required format
  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < sectors.length; j++) {
      data.push({
        country: countries[i],
        sector: sectors[j],
        likelihood: likelihoods[i][j] + 10,
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
    .attr("fill", "green")
    .attr("x", (d) => x(d.sector))
    .attr("y", (d) => y(d.likelihood))
    .attr("width", x.bandwidth() / countries.length)
    .attr("height", (d) => height - y(d.likelihood))
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
    .style("stroke", "brown")
    .style("font-size", "16px")
    .attr("x", (d) => x(d.sector))
    .attr("y", (d) => y(d.likelihood) - 10)
    .style("text-anchor", "end")
    .style("alignment-baseline", "middle")
    .style("writing-mode", "vertical-rl")
    .style("glyph-orientation-vertical", 0)

    // .attr("transform", "rotate(-90)")
    // .attr("text-anchor", "middle")
    // .style("text-anchor", "end")
    .attr("font-size", "20px")
    .attr("transform", (d, i) => {
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

function displayRelevenceGraphRegion(countries, sectors, relevances) {
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
window.myJavascriptFileRegion = {
  processData: function (data) {
    const {
      finalCountryRelevaces,
      finalCountryLiklihoods,
      finalCountryIntensities,
      theCountries,
      theSectors,
    } = data;
    // console.log("in d3js file :"+theCountries);
    // console.log("in d3js file :"+theSectors);

    document.getElementById("chart").innerHTML = "";
    document.getElementById("chart2").innerHTML = "";

    displayIntensityGraphRegion(
      theCountries,
      theSectors,
      finalCountryIntensities
    );
    displayLiklihoodGraphRegion(
      theCountries,
      theSectors,
      finalCountryLiklihoods
    );
    displayRelevenceGraphRegion(
      theCountries,
      theSectors,
      finalCountryRelevaces
    );
  },
};

//----------------------------------------------------------------------------------------------------------------------//

/////////////////////////////////////   DRAW SECTOR GRAPHS    //////////////////////////////////////////////

function displayIntensityGraphSector(countries, sectors, intensities) {
  const data = [];

  // Create data array in the required format
  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < sectors.length; j++) {
      data.push({
        country: countries[i],
        sector: sectors[j],
        intensity: intensities[i][j] + 10,
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
    .select("#chart2")
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
    .attr("fill", "red")
    .attr("x", (d) => x(d.sector))
    .attr("y", (d) => y(d.intensity))
    .attr("width", x.bandwidth() / countries.length)
    .attr("height", (d) => height - y(d.intensity))
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
    .style("stroke", "black")
    .style("font-size", "16px")
    .attr("x", (d) => x(d.sector))
    .attr("y", (d) => y(d.intensity) - 10)
    .style("text-anchor", "end")
    .style("alignment-baseline", "middle")
    .style("writing-mode", "vertical-rl")
    .style("glyph-orientation-vertical", 0)

    // .attr("transform", "rotate(-90)")
    // .attr("text-anchor", "middle")
    // .style("text-anchor", "end")
    .attr("font-size", "20px")
    .attr("transform", (d, i) => {
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
function displayLiklihoodGraphSector(countries, sectors, likelihoods) {
  const data = [];

  // Create data array in the required format
  for (let i = 0; i < countries.length; i++) {
    for (let j = 0; j < sectors.length; j++) {
      data.push({
        country: countries[i],
        sector: sectors[j],
        likelihood: likelihoods[i][j] + 10,
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
    .select("#chart2")
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
    .attr("fill", "green")
    .attr("x", (d) => x(d.sector))
    .attr("y", (d) => y(d.likelihood))
    .attr("width", x.bandwidth() / countries.length)
    .attr("height", (d) => height - y(d.likelihood))
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
    .style("stroke", "brown")
    .style("font-size", "16px")
    .attr("x", (d) => x(d.sector))
    .attr("y", (d) => y(d.likelihood) - 10)
    .style("text-anchor", "end")
    .style("alignment-baseline", "middle")
    .style("writing-mode", "vertical-rl")
    .style("glyph-orientation-vertical", 0)

    // .attr("transform", "rotate(-90)")
    // .attr("text-anchor", "middle")
    // .style("text-anchor", "end")
    .attr("font-size", "20px")
    .attr("transform", (d, i) => {
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
function displayRelevenceGraphSector(countries, sectors, relevances) {
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
    .select("#chart2")
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

window.myJavascriptFileSector = {
  processData: function (data) {
    // console.log("in d3 file :" + Object.values(data) );
    const {
      countries,
      topics,
      finalIntensities,
      finalLikelihoods,
      finalRelevances,
    } = data;
    // console.log("in d3js sector file :"+countries);
    const sectors = topics;
    const intensities = finalIntensities;
    const likelihoods = finalLikelihoods;
    const relevances = finalRelevances;

    // console.log("in d3js sector file :"+sectors);

    document.getElementById("chart2").innerHTML = "";

    displayIntensityGraphSector(countries, sectors, intensities);
    displayLiklihoodGraphSector(countries, sectors, likelihoods);
    displayRelevenceGraphSector(countries, sectors, relevances);
  },
};

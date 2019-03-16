var data = [{
    type:'scattermapbox',
    lat:['-32.149206','-31.877463', '-32.059687'],
    lon:['116.013326', '115.776993', '115.956365'],
    mode:'markers',
    marker: {
      size:14,
      color: 'red'
    },
    text:['Armadale','Karrinyup','Thornlie'],
    
  }]
  
  var links = ['https://google.com/', 'http://google.com/', 'http://google.com/'];
  
  var layout = {
    title: 'Perth Suburbs',
    autosize: true,
    hovermode:'closest',
    mapbox: {
      bearing:0,
      center: {
        lat:-31.948318,
        lon:115.866594
      },
      pitch:0,
      zoom:9,
      around: [-32.020565, 115.909786]
    },
  }
  
  Plotly.setPlotConfig({
    mapboxAccessToken: 'pk.eyJ1IjoiZXRwaW5hcmQiLCJhIjoiY2luMHIzdHE0MGFxNXVubTRxczZ2YmUxaCJ9.hwWZful0U2CQxit4ItNsiQ'
  })
  
  var myPlot = document.getElementById('myDiv');
  Plotly.newPlot(myPlot, data, layout);
  myPlot.on('plotly_click', function(data){
    if (data.points.length === 1) {
      var link = links[data.points[0].pointNumber];
      
      // Note: window navigation here.
      window.location = link;
    }
  });
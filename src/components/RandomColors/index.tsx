const color1:any = () => {
    const colors = [
      'rgb(0,250,154)',
      'rgb(143,188,143)',
      'rgb(147,112,219)',
      'rgb(186,85,211)',
      'rgb(65,105,225)',
      'rgb(70,130,180)',
      'rgb(219,112,147)',
      'rgb(255,140,0)',
      'rgb(255,215,0)',
      'rgb(218,165,32)',
      'rgb(139,69,19)',
      'rgb(205,133,63)',
      'rgb(50,205,50)',
      'rgb(255,20,147)',
      'rgb(220,20,60)',
      'rgb(255,105,180)',
      'rgb(255,127,80)',
      'rgb(50,205,50)',
      'rgb(255,160,122)',
      'rgb(255,0,0)',
      'rgb(255,255,0)',
      'rgb(0,255,255)',
      'rgb(106,90,205)',
      'rgb(221,160,221)',
      'rgb(220,20,100)',
      'rgb(240,230,140)',
  
  
    ]
      const index = 0 + Math.floor((colors.length - 0) * Math.random());
  
      const colorRandom = colors[index]
  
      return colorRandom;
  }
  
  export default color1;
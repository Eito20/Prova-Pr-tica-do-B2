// 1. Array of colors from the w3schools page (manually added for demonstration)
const colors = [
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 
    'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown',
    'burlywood', 'cadetblue', 'chartreuse'
    // ... more colors would be here in real implementation
  ].map(color => color.toLowerCase())
  
  // 2. Function to select 10 random colors
  function selectTenRandomColors(allColors) {
    const shuffled = [...allColors]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled.slice(0, 10)
  }
  
  // 3. Function to select one random color from the ten
  function selectOneRandomColor(tenColors) {
    const randomIndex = Math.floor(Math.random() * tenColors.length)
    return tenColors[randomIndex]
  }
  
  // Execute the functions
  const tenRandomColors = selectTenRandomColors(colors)
  console.log('Ten random colors:', tenRandomColors)
  
  const finalColor = selectOneRandomColor(tenRandomColors)
  console.log('Final selected color:', finalColor)
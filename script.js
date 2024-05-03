const init = ()=> {

  const totalDotCount = 1000;
  const blackProportion = Array.from({length: Math.floor(totalDotCount * 0.585)}, (_, i) => "blackDot")
  const whiteHispanicProportion = Array.from({length: Math.floor(totalDotCount * 0.203)}, (_, i) => "whiteHispanicDot")
  const blackHispanicProportion = Array.from({length: Math.floor(totalDotCount * 0.101)}, (_, i) => "blackHispanicDot")
  const whiteProportion =  Array.from({length: Math.floor(totalDotCount * 0.054)}, (_, i) => "whiteDot")
  const asianProportion =  Array.from({length: Math.floor(totalDotCount * 0.016)}, (_, i) => "asianDot")


  const dotArray = [...blackProportion, ...whiteHispanicProportion,...blackHispanicProportion,...whiteProportion,...asianProportion]
 console.log(dotArray)
      let dots = document.getElementById("dots")

      dotArray.forEach((dot)=>{
        dots.innerHTML+= `<div class="${dot}"></div>`
      })

      const AAnumber = document.getElementById("AAnumber");
      const WHnumber = document.getElementById("WHnumber");
      const BHnumber = document.getElementById("BHnumber");
      const EAnnumber = document.getElementById("EAnnumber");
      const APInumber = document.getElementById("APInumber");
    
      AAnumber.innerHTML = "58.5%";
      WHnumber.innerHTML = "20.3%";
      BHnumber.innerHTML = "10.1%";
      EAnnumber.innerHTML = "5.4%";
      APInumber.innerHTML = "1.6%";


}




  window.addEventListener("load",init)









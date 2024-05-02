const init = ()=> {

  const totalDotCount = 500;
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

  // fetch('Data.json') // Or specify the exact path if necessary
  // .then(response => response.json())
  // .then(data => {
  //   let slicedata = data.slice(0,100)
  //   console.log(data);


  //   slicedata.forEach((point)=>(
      
  //     let raceClass = point.race.split
  //   )
  // })
  // .catch(error => {
  //   console.error('Error fetching JSON:', error);
  // });
}


  // const init = ()=>{

  // const AAnumber = document.getElementById("AAnumber");
  // const BHnumber = document.getElementById("BHnumber");
  // const WHnumber = document.getElementById("WHnumber");
  // const EAnnumber = document.getElementById("EAnnumber");

  // AAnumber.innerHTML = "79%";
  // BHnumber.innerHTML = "79%";
  // WHnumber.innerHTML = "79%";
  // EAnnumber.innerHTML = "79%";

  // }


  window.addEventListener("load",init)









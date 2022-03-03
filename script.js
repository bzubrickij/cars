/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch(ENDPOINT)
  .then(response => response.json())
  .then(data => {
    for (let x of data) {
      let slide = document.createElement("div");
      let output = document.getElementById("output");

      slide.innerHTML = `
        <div  class="slide" id="slide">
          <h1 class="brand">${x.brand}</h1>
          <h3 class="model">
           <ul>
             ${x.models.map(x => `<li>${x}</li>`).join("")}
           </ul>
          </h3>
        </div>`;
      output.append(slide);
    }
    console.log(data);
  })
  .catch(e => console.log(e));

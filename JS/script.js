const loadCartFirst = async (dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    // allData = data.data.tools;
    // console.log(allData);

    alldisplayAiToolsData(data, dataLimit);
  } catch (error) {
    console.log(error);
  }
};

/* AI Universe Hub-card-section-add */
const alldisplayAiToolsData = (tools, dataLimit) => {
  const cardSection = document.getElementById("car-section-id");
  let toolList = tools.data.tools;
  if (toolList.length > dataLimit) {
    tools.data.tools = tools.data.tools.slice(0, 6);
  }
  cardSection.innerHTML = "";
  tools.data.tools.forEach((tool) => {
    // console.log(tool.name);

    const divMake = document.createElement("div");
    divMake.classList.add("date-Divs-Class");
    // card-div--byInnerHtml

    divMake.innerHTML = `
        <div class="col h-100">
              <div class="card h-100">
                <img src="${
                  tool.image
                }" class="card-img-top h-100 p-3 rounded-5 img-fluid" alt="...">
                <div class="card-body">
                  <h4 class="card-title">Features</h4>
                  <ol>
                      ${tool.features[0] ? `<li>${tool.features[0]}</li>` : ""} 
                      ${tool.features[1] ? `<li>${tool.features[1]}</li>` : ""} 
                      ${tool.features[2] ? `<li>${tool.features[2]}</li>` : ""} 
                     ${tool.features[3] ? `<li>${tool.features[3]}</li>` : ""}  
                  </ol>
                  <hr>
               <div class ="d-flex justify-content-between">
               <div>
               <h4 class="card-title">${tool.name}</h4>
               <p class="text-light-emphasis">
               <i class="fa-regular fa-calendar-days"></i> <span>${
                 tool.published_in
               }</span> </p>
               </div>

               <div onclick ="toolsDtls('${
                 tool.id
               }')" data-bs-toggle="modal" data-bs-target="#exampleModal">

               <i style="background-color: #FEF7F7;"
               class="fa-solid fa-arrow-right text-danger p-3 rounded-5 mt-4 "></i>
               </div>     
               </div>
                </div>
              </div>
            </div>
        `;

    cardSection.appendChild(divMake);
  });

  /*  / loding-off */

  lodingTogles(false);
};

/* see-more-btn-section */

const seeMore = (dataLimit) => {
  loadCartFirst(dataLimit);
};
document.getElementById("see-more-btn").addEventListener("click", function () {
  // loding-on

  lodingTogles(true);
  seeMore();
});

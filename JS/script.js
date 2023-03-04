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
// loding-toggles

const lodingTogles = (loding) => {
  const LodingSection = document.getElementById("loding-d-none");
  if (loding) {
    LodingSection.classList.remove("d-none");
  } else {
    LodingSection.classList.add("d-none");
  }
};
loadCartFirst(6);

/* AI Universe Hub-Modal
 */
 const toolsDtls = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  toolDtlsShowInWebsite(data.data);
};

const toolDtlsShowInWebsite = (data) => {
  const modalIDSection = document.getElementById("modal-body");
  modalIDSection.innerHTML = "";
  modalIDSection.innerHTML = `
      <div class="d-lg-flex  ">
             <div class ="col-sm-6  mb-3 mb-sm-0 card p-3 border-2 border-danger   " style="background-color: rgb(235, 87, 87, 0.05)" class="card-body border border-danger rounded-2  ">
                  <h5 id="description" class="card-title fw-bold p-lg-3 w-75   ">
                  ${
                    data.description !== null
                      ? data.description
                      : "No data Found"
                  }</h5>
                  
                  <div  class="card-group rounded-3  ">
                    <div class="card p-3 text-center text-success border-danger-subtle ">
                        <h5 id="price-text">
                        ${
                          data?.pricing && data.pricing[0]?.price
                            ? data.pricing[0].price
                            : "Free of Cost"
                        }</h5>
                        <h5 id="plan-text">${
                          data?.pricing && data.pricing[0]?.plan
                            ? data.pricing[0].plan
                            : "Basic"
                        }</h5>
                    </div>
                    <div style="color: #F28927;" class="card p-3 text-center border-danger-subtle  ">
                        <h5 id="price-text2">
                        ${
                          data?.pricing && data.pricing[1]?.price
                            ? data.pricing[1].price
                            : "Free of Cost"
                        }</h5>
                        <h5 id="plan-text2">${
                          data?.pricing && data.pricing[1]?.plan
                            ? data.pricing[1].plan
                            : "Pro"
                        }</h5>
                    </div>
                    <div class="card p-3 text-center text-danger border-danger-subtle ">
                       
                        <h5 id="price-text3">
                        ${
                          data?.pricing && data.pricing[2]?.price
                            ? data.pricing[2].price
                            : "Free of Cost"
                        }</h5>
                        <h5 id="plan-text3">
                        ${
                          data?.pricing && data.pricing[2]?.plan
                            ? data.pricing[2].plan
                            : "Enterprice"
                        }</h5>

                    </div>
                  </div>
  
                  <div class="d-flex justify-content-between mt-4 ">
                    <div class="features">
                        <h4 class="fw-bold mt-2 mb-3 ">Features</h4>
                        <ul>
                            <li>
                                <h6 id ="featuresIntegrations1">${
                                  data.features[1].feature_name
                                }</h6>
                            </li>
                            <li>
                                <h6 id="featuresIntegrations2">${
                                  data.features[2].feature_name
                                }</h6>
                            </li>
                            <li>
                                <h6 id="featuresIntegrations3">${
                                  data.features[3].feature_name
                                }</h6>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="fw-bold mt-2 mb-3 ms-2">Integrations</h4>
                        <ul>
                            <li>
                                <h6 id ="featuresIntegrations11">${
                                  data.integrations && data.integrations[0]
                                    ? data.integrations[0]
                                    : "No data Found"
                                }</h6>
                            </li>
                            <li>
                                <h6 id="featuresIntegrations22">${
                                  data.integrations && data.integrations[1]
                                    ? data.integrations[1]
                                    : "No data Found"
                                }</h6>
                            </li>
                            <li>
                                <h6 id="featuresIntegrations33">${
                                  data.integrations && data.integrations[2]
                                    ? data.integrations[2]
                                    : "No data Found"
                                }</h6>
                            </li>
                        </ul>

                    </div>
                  </div>
                  
                </div>
                <div>
               <div class=" h-100 ms-lg-4  ">
              <div class="card p-5 border-1  border-danger-subtle">
              <img class="img-fluid rounded mb-2 "
              src="${data.image_link[0]}"
              alt="x-photo">
              ${
                data.accuracy.score !== null
                  ? `<button class ="btn btn-danger position-absolute top-0 end-0 rounded-3 me-3 mt-4  ">${Math.floor(
                      data.accuracy.score * 100 ? data.accuracy.score * 100 : 0
                    )}% accuracy </button>`
                  : ""
              }
              <h5 class ="fw-bold mt-4 mb-2 text-center ">${
                data?.input_output_examples &&
                data.input_output_examples[1]?.input
                  ? data.input_output_examples[1].input
                  : "Can you give any example?"
              }</h5>
              <p class ="mt-3 text-center text-light-emphasis">${
                data?.input_output_examples &&
                data.input_output_examples[0]?.output
                  ? data.input_output_examples[0].output
                  : "No! Not Yet! Take a break!!!"
              }</p>
              </div>
            </div>
</div>
</div> 

 `;
  modalIDSection.appendChild(mAkeModalDiv);
};
"use strict";
// let models:Array<Object> = [];
const deleteRow = (id) => {
    var _a;
    const elem = document.getElementById(id);
    (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(elem);
};
const generateElem = (obj) => {
    const myClass = document.querySelector('.wrapper');
    if (obj.type == 'Undefined') {
        myClass.innerHTML += `
    <div class="row">
      <div class="col-lg-12 content" id="${obj.id}">
        <div class="row row-item-red">
          <div class="col-lg-12">
            <h4>FIELD KOSONG</h4>
          </div>
        </div>
      </div>
    </div>`;
    }
    else {
        myClass.innerHTML += `
    <div class="row">
      <div class="col-lg-12 content" id="${obj.id}">
        <div class="row row-item row-item-${obj.type == 'Cash In' ? 'green' : 'red'}">
          <div class="col-lg-6">
            <h4>${obj.type}</h4>
            <p>Anda telah ${obj.name} sebesar ${obj.jumlah} untuk ${obj.details}</p>
          </div>
          <div class="col-lg-6">
            <p class="ml-auto button-right">
              <button type="button" class="btn btn-danger" onclick="deleteRow('${obj.id}')">Delete</button>
            </p>          
          </div>
        </div>
      </div>
    </div>`;
    }
};
const collectData = (id, type, name, details, jumlah) => ({
    id,
    type,
    name,
    details,
    jumlah
});
const getInput = () => {
    let tipe = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let details = document.getElementById('details').value;
    let amounts = parseFloat(document.getElementById('amount').value);
    let uuid = "id" + Math.random().toString(16).slice(2);
    let parsed = tipe == "1" ? 'Cash In' : tipe == "0" ? 'Undefined' : 'Cash Out';
    generateElem(collectData(uuid, parsed, name, details, amounts));
};

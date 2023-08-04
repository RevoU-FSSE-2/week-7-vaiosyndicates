// let models:Array<Object> = [];

interface Expenses {
  id: string;
  type: string;
  name: string;
  details: string;
  jumlah: number;
}

const deleteRow = (id: string) => {
  const elem: HTMLInputElement | null = document.getElementById(id) as HTMLInputElement;
  elem.parentElement?.removeChild(elem);
}
 
const generateElem = (obj: {id: string, type: string, name: string, details: string, jumlah: number }) => {
  const myClass: HTMLInputElement | null = document.querySelector('.wrapper') as HTMLInputElement;
  if(obj.type == 'Undefined') {
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
  } else {
    myClass.innerHTML += `
    <div class="row">
      <div class="col-lg-12 content" id="${obj.id}">
        <div class="row row-item row-item-${obj.type == 'Cash In' ? 'green' : 'red' }">
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
}

const collectData = (id: string, type: string, name: string, details: string, jumlah: number): Expenses => ({
  id,
  type,
  name,
  details,
  jumlah
});

const getInput = () => {
  
  let tipe = (document.getElementById('type') as HTMLInputElement).value;
  let name = (document.getElementById('name') as HTMLInputElement).value;
  let details = (document.getElementById('details') as HTMLInputElement).value;
  let amounts = parseFloat((<HTMLInputElement>document.getElementById('amount')).value);
  let uuid = "id" + Math.random().toString(16).slice(2)
  let parsed = tipe == "1" ? 'Cash In' : tipe == "0" ? 'Undefined' : 'Cash Out' 

  generateElem(collectData(uuid, parsed, name, details, amounts))
}


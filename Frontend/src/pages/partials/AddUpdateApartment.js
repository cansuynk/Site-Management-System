import '../css/adminPage.css';

const blocks = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M"];
const types = ["1+0", "1+1", "2+0", "2+1", "3+0", "3+1", "4+0", "4+1", "5+0", "5+1", "6+0", "6+1", "dubleks", "tripleks"];
const floor = [-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function AddUpdateApartment() {
    return (
        <div>
        <div className='center'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="100"><path fill-rule="evenodd" d="M11.03 2.59a1.5 1.5 0 011.94 0l7.5 6.363a1.5 1.5 0 01.53 1.144V19.5a1.5 1.5 0 01-1.5 1.5h-5.75a.75.75 0 01-.75-.75V14h-2v6.25a.75.75 0 01-.75.75H4.5A1.5 1.5 0 013 19.5v-9.403c0-.44.194-.859.53-1.144l7.5-6.363zM12 3.734l-7.5 6.363V19.5h5v-6.25a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v6.25h5v-9.403L12 3.734z"></path></svg>

        
        </div>
        <p className='center'>Add a new apartment or update existing apartment!</p>
        <form className='formDiv'>

        <div class="form-outline mb-4 input-group-lg">
        <label class="form-label" for="form6Example3">Select Block</label>
        <select class="form-control">
        <option selected>Open this select menu</option>
        {blocks.map((b,index) => <option value={b}>{b}</option>)}
        </select>
        </div>

        <div class="form-outline mb-4 input-group-lg">
        <label class="form-label" for="form6Example3">Select Apartment Type</label>
        <select class="form-control">
        <option selected>Open this select menu</option>
        {types.map((t,index) => <option value={t}>{t}</option>)}
        </select>
        </div>

        <div class="form-outline mb-4 input-group-lg">
        <label class="form-label" for="form6Example3">Select Floor</label>
        <select class="form-control">
        <option selected>Open this select menu</option>
        {floor.map((f,index) => <option value={f}>{f}</option>)}
        </select>
        </div>

        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">No</label>
            <input type="number" id="form6Example3" class="form-control" />
        </div>
        
        <label class="form-check-label" for="flexRadioDefault1">Apartment Status</label>
        <div class="radio">
        <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked/>
            Empty
        </label>
        </div>
        <div class="radio">
        <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
            Full
        </label>
        </div>

        <div class="form-outline mb-4 input-group-lg">
            <label class="form-label" for="form6Example3">Resident Name Surname</label>
            <input type="text" id="form6Example3" class="form-control" />
        </div>

        <br/>
        <button type="submit" class="btn-lg btn-primary btn-block">Submit</button>
        </form>
        </div>
    );
  }
  
  export default AddUpdateApartment;
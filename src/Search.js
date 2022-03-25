import alphabets from './config/alphabets.json';
import Alphabet from './Alphabet';


function Search(props) {

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Suomen nimet</h2>
          <p className="lead">Valitse ensin sukunimi ja tee haku valitsemalla etunimi</p>

          <hr className="my-4" />

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row g-3 mb-3">
              <div className="col">
                <select className="form-select" id="state" required="" value={props.selection} onChange={event => props.onChange(event.target.value)}>
                  <option value="miehet">Miesten etunimet</option>
                  <option value="naiset">Naisten etunimet</option>
                </select>
              </div>
            </div>

            <hr className="my-4" />

            <h5 className="mb-3">Nimien lukumäärä Suomessa</h5>

            <div className="row g-3 mb-3">
              <div className="col">
                <select className="form-select" id="state" required="" value={props.namesMinimum} onChange={event => props.onNamesMinimum(event.target.value)}>
                  <option value="500">Vähintään 500</option>
                  <option value="1500">Vähintään 1500</option>
                  <option value="2500">Vähintään 2500</option>
                </select>
              </div>
            </div>

            <hr className="my-4" />

            <h5 className="mb-3">Sukunimet aakkosittain</h5>

            <div className="my-3">
              <div className="row">
                {
                  alphabets.map((element, index) => {
                    return (
                      <Alphabet key={index} alphabet={element} checked={props.alphabet} onChecked={val => props.onChecked(val)} />
                    );
                  })
                }
              </div>
            </div>

            <hr className="my-4" />

            <h5 className="mb-3">Haku</h5>

            <div className="row g-3 mb-3">
              <div className="col">
                <input type="text" className="form-control" id="place" placeholder="Paikka (postinumero)" value={props.location} onChange={event => props.onLocation(event.target.value)}></input>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => props.onSearch()}>Aloita</button>
          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <a href='https://www.avoindata.fi/data/fi/dataset/none'>Väestötietojärjestelmän suomalaisten nimiaineistot</a>
        <p class="mb-1">Versio 1.2</p>
      </footer>
    </div>
  );
}


export default Search;
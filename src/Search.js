import alphabets from './config/alphabets.json';
import Alphabet from './Alphabet';


function Search(props) {

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Suomen sukunimet</h2>
          <p className="lead">Hae sukunimiä aakkosittain.</p>

          <hr className="my-4" />

          <h4 className="mb-3">Haun tulos</h4>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row g-3">
              <div className="col">
                <select className="form-select" id="state" required="" value={props.selection} onChange={event => props.onChange(event.target.value)}>
                  <option value="nimi">Sukunimi ja lyhenne</option>
                  <option value="lyhenne">Ainoastaan lyhenne</option>
                </select>
              </div>
            </div>

            <hr className="my-4" />

            <h4 className="mb-3">Valittu aakkonen</h4>

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

            <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => props.onSearch()}>Hae sukunimistä</button>
          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <a href='https://www.avoindata.fi/data/fi/dataset/none'>Väestötietojärjestelmän suomalaisten nimiaineistot</a>
      </footer>
    </div>
  );
}


export default Search;
import alphabets from './config/alphabets.json';
import Alphabet from './Alphabet';

function Search(props) {
  const onChecked = alphabet => {
    console.log(alphabet);
  }

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Suomen sukunimet</h2>
          <p className="lead">Hae sukunimiä aakkosittain.</p>

          <hr className="my-4" />

          <h4 className="mb-3">Lyhenteen pituus</h4>

          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row g-3">
              <div className="col">
                <select className="form-select" id="state" required="">
                  <option>max 2 ensimmäistä kirjainta</option>
                  <option>max 4 ensimmäistä kirjainta</option>
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
                      <Alphabet key={index} alphabet={element} checked={false} onChecked={alphabet => onChecked(alphabet)} />
                    );
                  })
                }
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => console.log('onPress')}>Hae sukunimistä</button>
          </div>
        </div>
      </main>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">sami.pyy@gmail.com</p>
      </footer>
    </div>
  );
}


export default Search;
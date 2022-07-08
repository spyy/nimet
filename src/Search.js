

function Search(props) {

  const renderButton = props => {
    if (props.location.length && props.lastname.length) {
      return (
        <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => props.onSearch()}>Aloita</button>
      );
    } else {
      return (
        <button className="w-100 btn btn-primary btn-lg" type="button" onClick={() => props.onSearch()} disabled>Aloita</button>
      );
    }
  }

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2>Nimi haku</h2>
          <p className="lead">Anna ensin paikka ja sukunimi. Paina sitten aloita.</p>

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

            <h5 className="mb-3">Haku</h5>

            <div className="row g-3 mb-3">
              <div className="col">
                <input type="text" className="form-control" id="place" placeholder="Paikka (postinumero)" value={props.location} onChange={event => props.onLocation(event.target.value)}></input>
              </div>
            </div>

            <div className="row g-3 mb-3">
              <div className="col">
                <input type="text" className="form-control" id="lastname" placeholder="Sukunimi" value={props.lastname} onChange={event => props.onLastname(event.target.value)}></input>
              </div>
            </div>

            <hr className="my-4" />

            { renderButton(props) }
          </div>
        </div>

        <div className="form-check">
          <input type="checkbox" class="form-check-input" id="same-address" checked={props.useTablet} onChange={e => props.onUseTablet()}></input>
          <label className="form-check-label" for="same-address">Käytän tablettia</label>
        </div>
      </main>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <a href='https://www.avoindata.fi/data/fi/dataset/none'>Väestötietojärjestelmän suomalaisten nimiaineistot</a>
        <p class="mb-1">Versio 1.4</p>
      </footer>
    </div>
  );
}


export default Search;
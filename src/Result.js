import Row from './Row';

import * as tilasto from './config/sukunimitilasto-2021-08-09-dvv.json';


const Result = props => {

  const filter = name => {
    let re = new RegExp('^' + props.alphabet, 'i');

    return name.match(re) ? true : false;
  }

  const res = tilasto.Sukunimi.filter(name => filter(name));
  const names = res.sort()

  return (
    <div className="container">
      <main>
        <div className="float-end py-3">
          <button type="button" className="btn-close" aria-label="Close" onClick={() => props.onClose()}></button>
        </div>

        <div className="float-none py-5">

          <hr className="my-3" />

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sukunimi</th>
                <th scope="col">Lyhenne</th>
              </tr>
            </thead>
            <tbody>
              {
                names.map((element, index) => {
                  return (
                    <Row key={index} number={index + 1} name={element} abbreviation={4} />
                  );
                })
              }
            </tbody>
          </table>

        </div>
      </main>
    </div>
  );
}


export default Result;
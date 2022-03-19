import * as miehet from './config/miehet.json';

import Firstname from './Firstname';


const Firstnames = props => {
  let filteredFirstNames = [];

  const filterMinCount = (item, minCount) => {
    const count = Number.parseInt(item.count);

    return count < minCount ? false : true;
  }

  switch (props.selection) {
    case 'naiset':
    case 'miehet':
    default:
      filteredFirstNames = miehet.nimet.filter(item => filterMinCount(item, props.namesMinimum));
  }

  const render = props => {
    return (
      <table className="table table-striped caption-top">
        <caption>{ '1-' + filteredFirstNames.length}</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Etunimi</th>
            <th scope="col">Lukumäärä</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            filteredFirstNames.map((element, index) => {
              return (
                <Firstname key={index} number={index + 1} lastname={props.lastname} item={element} location={props.location} />
              );
            })
          }
        </tbody>
      </table>
    );
  }

  return (
    <div className="container">
      <main>
        <div className="float-end py-3">
          <button type="button" className="btn-close" aria-label="Close" onClick={() => props.onClose()}></button>
        </div>

        <div className="py-3">
          <h4>{props.lastname}</h4>
        </div>

        <div className="float-none py-5">

          { render(props) }

        </div>
      </main>
    </div>
  );
}


export default Firstnames;
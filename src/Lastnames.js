import * as sukunimet from './config/sukunimet.json';

import Lastname from './Lastname';



const Lastnames = props => {

  const filterLetter = (item, letter, minCount) => {
    let re = new RegExp('^' + letter, 'i');
    const count = Number.parseInt(item.count);
    const min = Number.parseInt(minCount);

    if (count < min) {
      return false;
    } else {
      return item.name.match(re) ? true : false;
    }
  }

  const filteredLastnames = sukunimet.nimet.filter(item => filterLetter(item, props.alphabet, props.namesMinimum));

  const render = props => {
    return (
      <table className="table table-striped caption-top">
        <caption>{ '1-' + filteredLastnames.length}</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sukunimi</th>
            <th scope="col">Määrä</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            filteredLastnames.map((element, index) => {
              return (
                <Lastname key={index} number={index + 1} item={element} onSelect={name => props.onLastnameSelected(name)} />
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

        <div className="float-none py-5">

          { render(props) }

        </div>
      </main>
    </div>
  );
}


export default Lastnames;
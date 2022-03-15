import Row from './Row';

import * as sukunimet from './config/sukunimet.json';
import * as miehet from './config/miehet.json';

//const sukunimet = require('./config/sukunimitilasto-2022-02-07-dvv.json');
//const miehet = require('./config/etunimitilasto-2022-02-07-dvv.miehet.json');


const Result = props => {

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

  const filterMinCount = (item, minCount) => {
    const count = Number.parseInt(item.count);

    return count < minCount ? false : true;
  }


  console.log(props);


  const filteredLastnames = sukunimet.nimet.filter(item => filterLetter(item, props.alphabet, props.namesMinimum));
  let filteredFirstNames = [];
  let result = [];

  switch (props.selection) {
    case 'naiset':
    case 'miehet':
    default:
      filteredFirstNames = miehet.nimet.filter(item => filterMinCount(item, props.namesMinimum));
  }

  let lastNames = filteredLastnames.map(element => element.name);
  let firstNames = filteredFirstNames.map(element => element.name);

  console.log(lastNames.length);
  console.log(firstNames.length);


  lastNames.sort().forEach(lastName => {
    firstNames.sort().forEach(firstName => {
      result.push(lastName + ' ' + firstName);
    });
  });


  console.log(result.length);


  const render = props => {
    return (
      <table className="table table-striped caption-top">
        <caption>{ '1-' + result.length}</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sukunimi</th>
            <th scope="col">Etunimi</th>
            <th scope="col">Kopioi</th>
          </tr>
        </thead>
        <tbody>
          {
            result.map((element, index) => {
              return (
                <Row key={index} number={index + 1} name={element} />
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


export default Result;
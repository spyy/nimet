import Row from './Row';

import * as tilasto from './config/sukunimitilasto-2021-08-09-dvv.json';


const Result = props => {

  const filter = name => {
    let re = new RegExp('^' + props.alphabet, 'i');

    return name.match(re) ? true : false;
  }

  const res = tilasto.Sukunimi.filter(name => filter(name));
  const names = res.sort()

  const abbreviation = name => {
    const replaced = name.replace('-', '');

    return replaced.slice(0, 4);
  }

  const generateAbbreviations = () => {
    const set = new Set()

    names.forEach(element => {
      const abbr = abbreviation(element);

      set.add(abbr);
    });

    return Array.from(set.values());
  }

  const renderAbbreviationOnly = props => {
    const abbreviations = generateAbbreviations();

    return (
      <table className="table table-striped caption-top">
        <caption>{ '1-' + abbreviations.length}</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Lyhenne</th>
          </tr>
        </thead>
        <tbody>
          {
            abbreviations.map((element, index) => {
              return (
                <Row key={index} number={index + 1} abbreviation={element} abbreviationOnly={true} />
              );
            })
          }
        </tbody>
      </table>
    );
  }

  const renderNameAndAbbreviation = props => {
    return (
      <table className="table table-striped caption-top">
        <caption>{ '1-' + names.length}</caption>
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
                <Row key={index} number={index + 1} name={element} abbreviation={abbreviation(element)} abbreviationOnly={false} />
              );
            })
          }
        </tbody>
      </table>
    );
  }

  const render = props => {
    console.log(props.selection);

    switch (props.selection) {
      case 'lyhenne':
        return renderAbbreviationOnly(props);
      case 'nimi':
      default:
        return renderNameAndAbbreviation(props);
    }
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
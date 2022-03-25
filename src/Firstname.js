import * as config from './config/conf.json';

import * as util from './util';

import ArrowRightCircle from './ArrowRightCircle';



const Firstname = props => {
  const what = props.lastname + '+' + props.item.name;
  const location = 'location=' + props.location;
  const uri = config.address.replace('what', what);
  const url = uri.replace('location', location);

  const onSelect = () => {
    const y = window.scrollY;

    //props.onWinY(y);

    util.openRequestedSinglePopup(url);
  }

  return (
    <tr>
      <th scope="row">{ props.number }</th>
      <td>{ props.item.name }</td>
      <td>{ props.item.count }</td>
      <td>
        <ArrowRightCircle onPress={onSelect} />
      </td>
    </tr>
  );
}


export default Firstname;
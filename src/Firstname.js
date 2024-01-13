import * as config from './config/conf.json';

import * as util from './util';

import ArrowRightCircle from './ArrowRightCircle';



const Firstname = props => {
  const what = props.location + '+' + props.lastname + '+' + props.item.name;
  const url = config.address.replace('what', what);
  
  const onSelect = () => {

    util.openRequestedSinglePopup(url);
  }

  return (
    <tr>
      <th scope="row">{ props.number }</th>
      <td>{ props.item.name }</td>
      <td>{ props.item.count }</td>
      <td>
        <ArrowRightCircle useTablet={props.useTablet} url={url} onPress={onSelect} />
      </td>
    </tr>
  );
}


export default Firstname;
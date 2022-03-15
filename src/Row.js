import Clipboard from './Clipboard';

const Row = props => {
  const names = props.name.split(' ');
  const id = 'id' + props.number;

  return (
    <tr>
      <th scope="row">{ props.number }</th>
      <td>{ names[0] }</td>
      <td id={ id }>{ names[1] }</td>
      <td>
        <Clipboard querySelector={ id } name={ props.name } />
      </td>
    </tr>
  );
}


export default Row;
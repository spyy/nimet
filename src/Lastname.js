import ArrowRightCircle from './ArrowRightCircle';

const Lastname = props => {

  const onSelect = () => {
    props.onSelect(props.item.name);
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


export default Lastname;
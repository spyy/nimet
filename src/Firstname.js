import ArrowRightCircle from './ArrowRightCircle';

const Firstname = props => {

  const onSelect = () => {
    console.log(props.item.name);

    //props.onSelect(props.item.name);
  }

  return (
    <tr>
      <th scope="row">{ props.number }</th>
      <td>{ props.lastname }</td>
      <td>{ props.item.name }</td>
      <td>{ props.item.count }</td>
      <td>
        <ArrowRightCircle onPress={onSelect} />
      </td>
    </tr>
  );
}


export default Firstname;
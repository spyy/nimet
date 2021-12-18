const Row = props => {
  if (props.abbreviationOnly) {
    return (
      <tr>
        <th scope="row">{ props.number }</th>
        <td>{ props.abbreviation }</td>
      </tr>
    );

  } else {
    return (
      <tr>
        <th scope="row">{ props.number }</th>
        <td>{ props.name }</td>
        <td>{ props.abbreviation }</td>
      </tr>
    );
  }
}


export default Row;
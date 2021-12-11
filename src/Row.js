const Row = props => {
  const abbreviation = () => {
    const replaced = props.name.replace('-', '');

    return replaced.slice(0, props.abbreviation);
  }

  return (
    <tr>
      <th scope="row">{ props.number }</th>
      <td>{ props.name }</td>
      <td>{ abbreviation() }</td>
    </tr>
  );
}


export default Row;
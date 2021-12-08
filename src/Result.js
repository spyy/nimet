
function Result(props) {
  return (
    <div class="container">
      <main>
        <div class="float-end py-3">
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>

        <div class="float-none py-5">
          
          <hr class="my-3" />

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Sukunimi</th>
                <th scope="col">Lyhenne</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
              </tr>
            </tbody>
          </table>
    
        </div>
      </main>
    </div>
  );
}


export default Result;
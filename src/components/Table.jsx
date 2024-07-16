import "../styles/Table.css";
function Table() {
    return (
      <div id="table">
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>25</td>
                    <td>Male</td>
                    <td>USA</td>
                    <td>New York</td>
                    <td>1234567890</td>
                    <td>john.doe@gmail.com</td>
                    <td>123 Main St, New York, NY 10001</td>
                </tr>
            </tbody>
        </table>

      </div>
    );
  }
  
  export default Table;

const data =
  [
    {
      fisrtName: "Murali",
      lastName: "Krishna",
      rollNumber: "21C51A0522"
    },
    {
      fisrtName: "Hemanth",
      lastName: "Singh",
      rollNumber: "21C51A0520"
    },
    {
      fisrtName: "Davud",
      lastName: "Baba",
      rollNumber: "21C51A0540"
    }
  ]

let TableData = (props) => {
  return (
    <tr>
      <td>{props.fisrtName}</td>
      <td>{props.lastName}</td>
      <td>{props.rollNumber}</td>
    </tr>
  );
}

function App() {
  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>FirstName</td>
              <td>LastName</td>
              <td>RollNumber</td>
            </tr>
            {data.map((item, index) => (
              <TableData
                key={index}
                fisrtName={item.fisrtName}
                lastName={item.lastName}
                rollNumber={item.rollNumber}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App

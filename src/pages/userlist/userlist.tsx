
import React from "react";
import MaterialTable from "material-table";

export const UserList = function() {
  const [state, setState] = React.useState({
    columns: [
      {
        title: "Email",
        field: "email",
      },
      { title: "Name", field: "name" }
    ],
    data: [
      { email: "Mehmet", name: "Baran" },
      {
        email: "Zerya Betül",
        name: "Baran"
      }
    ],
    options: {
      headerStyle: {backgroundColor:"#3f51b5",color:"white"},
      actionsColumnIndex: -1,
    },
  });

  return (
    <MaterialTable
      title="User List"
      columns={state.columns}
      data={state.data}
      options={state.options}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 500);
          })
      }}
    />
  );
}






// LoginForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

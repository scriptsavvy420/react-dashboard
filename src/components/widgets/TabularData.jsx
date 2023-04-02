import React, { useEffect, useMemo, useState } from "react";
import "./css/widgets.css";
import { useTable } from "react-table";
import axios from "axios";

//* https://blog.logrocket.com/react-table-complete-guide/

const getdata = () => {
  return axios.get("https://easy-red-fly-hose.cyclic.app/fakedata");
};

const TabularData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getdata().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "IP Address",
        accessor: "ip_address",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  if (data.length == 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='sbox'>
        <div className='tablecontainer'>
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default TabularData;

import React, { useState, useEffect } from "react";

function ExcelTable() {
  const [formTable1Values, setFormTable1Values] = useState({
    xvalue01: "",
    yvalue01: "",
  });

  const [formTable2Values, setFormTable2Values] = useState({
    orden01Value: "",
  });

  const handleInputChangetable1 = (e) => {
    const { name, value } = e.target;
    const uppercaseValue = value.toUpperCase();
    setFormTable1Values((prevState) => ({
      ...prevState,
      [name]: uppercaseValue,
    }));
  };

  const handleInputChangetable2 = (e) => {
    const { name, value } = e.target;
    const uppercaseValue = value.toUpperCase();
    setFormTable2Values((prevState) => ({
      ...prevState,
      [name]: uppercaseValue,
    }));
  };

  const [tableData1, setTableData1] = useState(
    Array.from({ length: 20 }, () => Array(15).fill(""))
  );

  const [tableData2, setTableData2] = useState(
    Array.from({ length: 20 }, () => Array(19).fill(""))
  );

  const handleInputChange = (e, rowIndex, colIndex, tableIndex) => {
    const { value } = e.target;
    const newData = [...(tableIndex === 1 ? tableData1 : tableData2)];
    newData[rowIndex][colIndex] = value;
    (tableIndex === 1 ? setTableData1 : setTableData2)(newData);
  };

  const handlePaste = (e, startRowIndex, startColIndex, tableIndex) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    const rows = pasteData.split("\n").slice(0, 20);

    const newData = [...(tableIndex === 1 ? tableData1 : tableData2)];

    rows.forEach((row, rowIndex) => {
      const cells = row.split("\t").slice(0, tableIndex === 1 ? 15 : 19);
      cells.forEach((cell, colIndex) => {
        if (
          newData[startRowIndex + rowIndex] &&
          newData[startRowIndex + rowIndex][startColIndex + colIndex] !==
            undefined
        ) {
          newData[startRowIndex + rowIndex][startColIndex + colIndex] = cell;
        }
      });
    });

    setTimeout(() => {
      (tableIndex === 1 ? setTableData1 : setTableData2)(newData);
    }, 0);
  };

  const clearAllInputs = (tableIndex) => {
    const clearedData =
      tableIndex === 1
        ? Array.from({ length: 20 }, () => Array(15).fill(""))
        : Array.from({ length: 20 }, () => Array(19).fill(""));
    (tableIndex === 1 ? setTableData1 : setTableData2)(clearedData);
  };

  useEffect(() => {
    if (
      tableData1 &&
      tableData1.length > 0 &&
      tableData1[0] &&
      tableData1[0].length > 0
    ) {
      const xvalue = tableData1[1][8];
      const yvalue01 = tableData1[1][9];
      const xvalue02 = tableData1[2][8];
      const yvalue02 = tableData1[2][9];
      const xvalue03 = tableData1[3][8];
      const yvalue03 = tableData1[3][9];
      const xvalue04 = tableData1[4][8];
      const yvalue04 = tableData1[4][9];
      setFormTable1Values({
        xvalue01: xvalue,
        yvalue01: yvalue01,
        xvalue02: xvalue02,
        yvalue02: yvalue02,
        xvalue03: xvalue03,
        yvalue03: yvalue03,
        xvalue04: xvalue04,
        yvalue04: yvalue04,
      });

      console.log("valorCeldaTabla1:", xvalue, yvalue01);
    }
  }, [tableData1]);

  useEffect(() => {
    if (
      tableData2 &&
      tableData2.length > 0 &&
      tableData2[0] &&
      tableData2[0].length > 0
    ) {
      const orden01Value = tableData2[2][8];
      const distancevalue01 = tableData2[2][12];
      const colindantevalue01 = tableData2[2][7];
      const numpredcolinvalue01 = tableData2[2][10];
      const orden02Value = tableData2[3][8];
      const distancevalue02 = tableData2[3][12];
      const colindantevalue02 = tableData2[3][7];
      const numpredcolinvalue02 = tableData2[3][10];
      const ordenValue03 = tableData2[4][8];
      const distancevalue03 = tableData2[4][12];
      const colindantevalue03 = tableData2[4][7];
      const numpredcolinvalue03 = tableData2[4][10];
      const ordenValue04 = tableData2[5][8];
      const distancevalue04 = tableData2[5][12];
      const colindantevalue04 = tableData2[5][7];
      const numpredcolinvalue04 = tableData2[5][10];

      console.log("valorCeldaTabla2:", orden01Value);
      setFormTable2Values({
        orden01Value: orden01Value,
        distancevalue01: distancevalue01,
        colindantevalue01: colindantevalue01,
        numpredcolinvalue01: numpredcolinvalue01,
        orden02Value: orden02Value,
        distancevalue02: distancevalue02,
        colindantevalue02: colindantevalue02,
        numpredcolinvalue02: numpredcolinvalue02,
        ordenValue03: ordenValue03,
        distancevalue03: distancevalue03,
        colindantevalue03: colindantevalue03,
        numpredcolinvalue03: numpredcolinvalue03,
        ordenValue04: ordenValue04,
        distancevalue04: distancevalue04,
        colindantevalue04: colindantevalue04,
        numpredcolinvalue04: numpredcolinvalue04,
      });
    }
  }, [tableData2]);

  return (
    <div>
      <h3>DATOS COLINDANTES - Tabla 1</h3>
      <table>
        <thead>
          <tr>
            {[...Array(15)].map((_, index) => (
              <th key={index}>Columna {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData1.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex + 1}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, colIndex, 1)
                    }
                    onPaste={(e) => handlePaste(e, rowIndex, colIndex, 1)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={() => clearAllInputs(1)}>Borrar todos los datos</button>
      <h3>DATOS COLINDANTES - Tabla 2</h3>
      <table>
        <thead>
          <tr>
            {[...Array(19)].map((_, index) => (
              <th key={index}>Columna {index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData2.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex + 1}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      handleInputChange(e, rowIndex, colIndex, 2)
                    }
                    onPaste={(e) => handlePaste(e, rowIndex, colIndex, 2)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={() => clearAllInputs(2)}>Borrar todos los datos</button>
      <br /> <br />
      <br />
      <div>
        <table border="1">
          <thead>
            <tr>
              <th colSpan={4}>DATOS DEL PREDIO</th>
              <th colSpan={2}>DATOS DEL COLINDANTE</th>
            </tr>
            <tr>
              <th rowSpan={2}>ORDEN DE VERTICE</th>
              <th colSpan={2}>COORDENADAS PLANAS</th>
              <th rowSpan={2}>DISTANCIA LINDERO (m.)</th>
              <th rowSpan={2}>NOMBRES Y APELLIDOS</th>
              <th rowSpan={2}>NÚMERO PREDIAL</th>
            </tr>

            <tr>
              <th>ESTE (m.)</th>
              <th>NORTE (m.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{formTable2Values.orden01Value}</td>
              <td>{formTable1Values.xvalue01}</td>
              <td>{formTable1Values.yvalue01}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue01}</td>
              <td>{formTable2Values.colindantevalue01}</td>
              <td>{formTable2Values.numpredcolinvalue01}</td>
            </tr>
            <tr>
              <td>{formTable2Values.orden02Value}</td>
              <td>{formTable1Values.xvalue02}</td>
              <td>{formTable1Values.yvalue02}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue02}</td>
              <td>{formTable2Values.colindantevalue02}</td>
              <td>{formTable2Values.numpredcolinvalue02}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue03}</td>
              <td>{formTable1Values.xvalue03}</td>
              <td>{formTable1Values.yvalue03}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue03}</td>
              <td>{formTable2Values.colindantevalue03}</td>
              <td>{formTable2Values.numpredcolinvalue03}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue04}</td>
              <td>{formTable1Values.xvalue04}</td>
              <td>{formTable1Values.yvalue04}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue04}</td>
              <td>{formTable2Values.colindantevalue04}</td>
              <td>{formTable2Values.numpredcolinvalue04}</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
            <tr>
              <td>01</td>
              <td>1088138,43</td>
              <td>1105501,18</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>198,1</td>
              <td>JOSE ANANIAS NUMPAQUE NUMPAQUE</td>
              <td>151870000000000030156000000000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExcelTable;

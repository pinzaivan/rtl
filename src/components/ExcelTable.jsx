import React, { useState, useEffect } from "react";

function ExcelTable({ formValues }) {
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
      const xvalue05 = tableData1[5][8];
      const yvalue05 = tableData1[5][9];
      const xvalue06 = tableData1[6][8];
      const yvalue06 = tableData1[6][9];
      const xvalue07 = tableData1[7][8];
      const yvalue07 = tableData1[7][9];
      const xvalue08 = tableData1[8][8];
      const yvalue08 = tableData1[8][9];
      const xvalue09 = tableData1[9][8];
      const yvalue09 = tableData1[9][9];
      const xvalue10 = tableData1[10][8];
      const yvalue10 = tableData1[10][9];
      const xvalue11 = tableData1[11][8];
      const yvalue11 = tableData1[11][9];
      const xvalue12 = tableData1[12][8];
      const yvalue12 = tableData1[12][9];
      const xvalue13 = tableData1[13][8];
      const yvalue13 = tableData1[13][9];
      const xvalue14 = tableData1[14][8];
      const yvalue14 = tableData1[14][9];
      const xvalue15 = tableData1[15][8];
      const yvalue15 = tableData1[15][9];
      setFormTable1Values({
        xvalue01: xvalue,
        yvalue01: yvalue01,
        xvalue02: xvalue02,
        yvalue02: yvalue02,
        xvalue03: xvalue03,
        yvalue03: yvalue03,
        xvalue04: xvalue04,
        yvalue04: yvalue04,
        xvalue05: xvalue05,
        yvalue05: yvalue05,
        xvalue06: xvalue06,
        yvalue06: yvalue06,
        xvalue07: xvalue07,
        yvalue07: yvalue07,
        xvalue08: xvalue08,
        yvalue08: yvalue08,
        xvalue09: xvalue09,
        yvalue09: yvalue09,
        xvalue10: xvalue10,
        yvalue10: yvalue10,
        xvalue11: xvalue11,
        yvalue11: yvalue11,
        xvalue12: xvalue12,
        yvalue12: yvalue12,
        xvalue13: xvalue13,
        yvalue13: yvalue13,
        xvalue14: xvalue14,
        yvalue14: yvalue14,
        xvalue15: xvalue15,
        yvalue15: yvalue15,
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
      const ordenValue05 = tableData2[6][8];
      const distancevalue05 = tableData2[6][12];
      const colindantevalue05 = tableData2[6][7];
      const numpredcolinvalue05 = tableData2[6][10];
      const ordenValue06 = tableData2[7][8];
      const distancevalue06 = tableData2[7][12];
      const colindantevalue06 = tableData2[7][7];
      const numpredcolinvalue06 = tableData2[7][10];
      const ordenValue07 = tableData2[8][8];
      const distancevalue07 = tableData2[8][12];
      const colindantevalue07 = tableData2[8][7];
      const numpredcolinvalue07 = tableData2[8][10];
      const ordenValue08 = tableData2[9][8];
      const distancevalue08 = tableData2[9][12];
      const colindantevalue08 = tableData2[9][7];
      const numpredcolinvalue08 = tableData2[9][10];
      const ordenValue09 = tableData2[10][8];
      const distancevalue09 = tableData2[10][12];
      const colindantevalue09 = tableData2[10][7];
      const numpredcolinvalue09 = tableData2[10][10];
      const ordenValue10 = tableData2[11][8];
      const distancevalue10 = tableData2[11][12];
      const colindantevalue10 = tableData2[11][7];
      const numpredcolinvalue10 = tableData2[11][10];
      const ordenValue11 = tableData2[12][8];
      const distancevalue11 = tableData2[12][12];
      const colindantevalue11 = tableData2[12][7];
      const numpredcolinvalue11 = tableData2[12][10];
      const ordenValue12 = tableData2[13][8];
      const distancevalue12 = tableData2[13][12];
      const colindantevalue12 = tableData2[13][7];
      const numpredcolinvalue12 = tableData2[13][10];
      const ordenValue13 = tableData2[14][8];
      const distancevalue13 = tableData2[14][12];
      const colindantevalue13 = tableData2[14][7];
      const numpredcolinvalue13 = tableData2[14][10];
      const ordenValue14 = tableData2[15][8];
      const distancevalue14 = tableData2[15][12];
      const colindantevalue14 = tableData2[15][7];
      const numpredcolinvalue14 = tableData2[15][10];
      const ordenValue15 = tableData2[16][8];
      const distancevalue15 = tableData2[16][12];
      const colindantevalue15 = tableData2[16][7];
      const numpredcolinvalue15 = tableData2[16][10];

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
        ordenValue05: ordenValue05,
        distancevalue05: distancevalue05,
        colindantevalue05: colindantevalue05,
        numpredcolinvalue05: numpredcolinvalue05,
        ordenValue06: ordenValue06,
        distancevalue06: distancevalue06,
        colindantevalue06: colindantevalue06,
        numpredcolinvalue06: numpredcolinvalue06,
        ordenValue07: ordenValue07,
        distancevalue07: distancevalue07,
        colindantevalue07: colindantevalue07,
        numpredcolinvalue07: numpredcolinvalue07,
        ordenValue08: ordenValue08,
        distancevalue08: distancevalue08,
        colindantevalue08: colindantevalue08,
        numpredcolinvalue08: numpredcolinvalue08,
        ordenValue09: ordenValue09,
        distancevalue09: distancevalue09,
        colindantevalue09: colindantevalue09,
        numpredcolinvalue09: numpredcolinvalue09,
        ordenValue10: ordenValue10,
        distancevalue10: distancevalue10,
        colindantevalue10: colindantevalue10,
        numpredcolinvalue10: numpredcolinvalue10,
        ordenValue11: ordenValue11,
        distancevalue11: distancevalue11,
        colindantevalue11: colindantevalue11,
        numpredcolinvalue11: numpredcolinvalue11,
        ordenValue12: ordenValue12,
        distancevalue12: distancevalue12,
        colindantevalue12: colindantevalue12,
        numpredcolinvalue12: numpredcolinvalue12,
        ordenValue13: ordenValue13,
        distancevalue13: distancevalue13,
        colindantevalue13: colindantevalue13,
        numpredcolinvalue13: numpredcolinvalue13,
        ordenValue14: ordenValue14,
        distancevalue14: distancevalue14,
        colindantevalue14: colindantevalue14,
        numpredcolinvalue14: numpredcolinvalue14,
        ordenValue15: ordenValue15,
        distancevalue15: distancevalue15,
        colindantevalue15: colindantevalue15,
        numpredcolinvalue15: numpredcolinvalue15,
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
        <table border="1" class="firstTable">
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
              <td>{formTable2Values.ordenValue05}</td>
              <td>{formTable1Values.xvalue05}</td>
              <td>{formTable1Values.yvalue05}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue05}</td>
              <td>{formTable2Values.colindantevalue05}</td>
              <td>{formTable2Values.numpredcolinvalue05}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue06}</td>
              <td>{formTable1Values.xvalue06}</td>
              <td>{formTable1Values.yvalue06}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue06}</td>
              <td>{formTable2Values.colindantevalue06}</td>
              <td>{formTable2Values.numpredcolinvalue06}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue07}</td>
              <td>{formTable1Values.xvalue07}</td>
              <td>{formTable1Values.yvalue07}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue07}</td>
              <td>{formTable2Values.colindantevalue07}</td>
              <td>{formTable2Values.numpredcolinvalue07}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue08}</td>
              <td>{formTable1Values.xvalue08}</td>
              <td>{formTable1Values.yvalue08}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue08}</td>
              <td>{formTable2Values.colindantevalue08}</td>
              <td>{formTable2Values.numpredcolinvalue08}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue09}</td>
              <td>{formTable1Values.xvalue09}</td>
              <td>{formTable1Values.yvalue09}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue09}</td>
              <td>{formTable2Values.colindantevalue09}</td>
              <td>{formTable2Values.numpredcolinvalue09}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue10}</td>
              <td>{formTable1Values.xvalue10}</td>
              <td>{formTable1Values.yvalue10}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue10}</td>
              <td>{formTable2Values.colindantevalue10}</td>
              <td>{formTable2Values.numpredcolinvalue10}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue11}</td>
              <td>{formTable1Values.xvalue11}</td>
              <td>{formTable1Values.yvalue11}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue11}</td>
              <td>{formTable2Values.colindantevalue11}</td>
              <td>{formTable2Values.numpredcolinvalue11}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue12}</td>
              <td>{formTable1Values.xvalue12}</td>
              <td>{formTable1Values.yvalue12}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue12}</td>
              <td>{formTable2Values.colindantevalue12}</td>
              <td>{formTable2Values.numpredcolinvalue12}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue13}</td>
              <td>{formTable1Values.xvalue13}</td>
              <td>{formTable1Values.yvalue13}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue13}</td>
              <td>{formTable2Values.colindantevalue13}</td>
              <td>{formTable2Values.numpredcolinvalue13}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue14}</td>
              <td>{formTable1Values.xvalue14}</td>
              <td>{formTable1Values.yvalue14}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue14}</td>
              <td>{formTable2Values.colindantevalue14}</td>
              <td>{formTable2Values.numpredcolinvalue14}</td>
            </tr>
            <tr>
              <td>{formTable2Values.ordenValue15}</td>
              <td>{formTable1Values.xvalue15}</td>
              <td>{formTable1Values.yvalue15}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>{formTable2Values.distancevalue15}</td>
              <td>{formTable2Values.colindantevalue15}</td>
              <td>{formTable2Values.numpredcolinvalue15}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <p>
        El inmueble denominado con un área de {formValues.area_Ha} ha +{" "}
        {formValues.area_m2} m² según levantamiento planimétrico, con referencia
        catastral {formValues.codigo}
        dirección catastral {formValues.dirCatastro}, presenta los siguientes
        linderos, referidos al sistema de referencia oficial Magna Sirgas con
        origen central:
        <br></br>
        <br></br> <b>COLINDANTES</b>
        <br></br>
        <br></br>
        NORTE: {formValues.colin_Norte}
        <br></br>
        ESTE: {formValues.colin_Este}
        <br></br>
        SUR: {formValues.colin_Sur}
        <br></br>
        OESTE: {formValues.colin_Oeste}
        <br></br>
        <br></br>
        PUNTO DE PARTIDA: Del punto de partida número 01 con coordenadas planas
        X={formTable1Values.xvalue01}m y Y={formTable1Values.yvalue01}m, ubicado
        en la parte noroeste del predio, donde concurren las colindancias de{" "}
        {formValues.colin_Norte}, predio identificado con número predial
        nacional {formTable2Values.numpredcolinvalue01}, JUAN CARLOS MARTINEZ
        NONSOQUE, predio identificado con número predial nacional
        151870000000000020131000000000 y el predio en mención.<br></br>
        <br></br> COLINDA ASÍ:<br></br>
        <br></br>
        NORTE: Del punto de partida número 01 en dirección sureste en línea
        <input type="text" placeholder="recta/quebrada" /> y en una distancia de{" "}
        {formTable2Values.distancevalue01}m, hasta encontrar el punto número 02
        de coordenadas planas X={formTable1Values.xvalue01}m y Y=
        {formTable1Values.yvalue02}m, colindando con{" "}
        {formTable2Values.colindantevalue02}, predio identificado con número
        predial nacional {formTable2Values.numpredcolinvalue02}.<br></br>
        <br></br>
        ESTE: Del punto número 02 en dirección suroeste en línea recta y en una
        distancia de 33,7m, hasta encontrar el punto número 03 de coordenadas
        planas X=1091473,23m y Y=1105486,81m, colindando con LUIS ANTONIO
        NONSOQUE RUÍZ, predio identificado con número predial nacional
        151870000000000020807000000000.<br></br>
        <br></br>
        SUR: Del punto número 03 en dirección noroeste en línea recta y en una
        distancia de 37,1m, hasta encontrar el pudnto número 04 de coordenadas
        planas X=1091447,67m y Y=1105513,75m, colindando con JOSE HELADIO
        MARTINEZ NONZOQUE, predio identificado con número predial nacional
        151870000000000020131000000000.<br></br>
        <br></br> OESTE: Del punto número 04 en dirección noreste en línea recta
        y en una distancia de 29,3m, hasta encontrar el punto número 01 de
        coordenadas planas X=1091464,34m y Y=1105537,84m, colindando con VÍA DE
        ACCESO AL MEDIO, EN FRENTE; BLANCA LILIA MORCOTE DE CASTELBLANCO, predio
        identificado con número predial nacional 151870000000000020131000000000
        y cierra. <br></br>
        <br></br>
        DESCRIPCIÓN TÉCNICA DE LINDEROS POLIGONOS DE AFECTACIÓN PARCIAL<br></br>
        <br></br>
        NO APLICA<br></br>
        <br></br>
        DESCRIPCIÓN TÉCNICA DE LINDEROS PREDIO DE MAYOR EXTENSIÓN.<br></br>
        <br></br>
        Para el presente caso no aplica la descripción técnica de linderos del
        predio de mayor extensión, ya que el número predial nacional
        151870000000000020131000000000 afectado no tiene folio de matrícula
        inmobiliaria asociado; por lo tanto, está asociado al predio de mayor
        extensión circunscrito dentro del referido TÍTULO HISTÓRICO RESGUARDO
        CHIVATÁ I – departamento de Boyacá
      </p>
    </div>
  );
}

export default ExcelTable;

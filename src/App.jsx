import { useState, useEffect } from "react";
import "./App.css";
import ExcelTable from "./components/ExcelTable";

function App() {
  const [formValues, setFormValues] = useState({
    direction: "",
    area_Ha: "",
    area_m2: "",
    codigo: "",
    dirCatastro: "",
    colin_Norte: "",
    colin_Este: "",
    colin_Sur: "",
    colin_Oeste: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const uppercaseValue = value.toUpperCase();
    setFormValues((prevState) => ({
      ...prevState,
      [name]: uppercaseValue,
    }));
  };

  return (
    <>
      <h1>REDACCION TECNICA DE LINDEROS SSJ</h1>
      <section>
        <input
          className="large"
          type="text"
          name="direction"
          value={formValues.direction}
          onChange={handleInputChange}
          placeholder="Direccion"
        />
        <div class="areasquare">
          <input
            className="large"
            type="text"
            name="area_Ha"
            value={formValues.area_Ha}
            onChange={handleInputChange}
            placeholder="Area Ha"
          />

          <input
            className="large"
            type="text"
            name="area_m2"
            value={formValues.area_m2}
            onChange={handleInputChange}
            placeholder="Area m2"
          />
        </div>
        <input
          className="large"
          type="text"
          name="codigo"
          value={formValues.codigo}
          onChange={handleInputChange}
          placeholder="Numero predial"
        />
        <input
          className="large"
          type="text"
          name="dirCatastro"
          value={formValues.dirCatastro}
          onChange={handleInputChange}
          placeholder="Direccion de catastro"
        />
        <table>
          <thead>
            <tr>
              <th>COLINDANTES</th>
              <th>NOMBRE COMPLETO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NORTE</td>
              <td>
                {" "}
                <input
                  className="large"
                  type="text"
                  name="colin_Norte"
                  value={formValues.colin_Norte}
                  onChange={handleInputChange}
                  placeholder="Colindantes Norte"
                />
              </td>
            </tr>
            <tr>
              <td>ESTE</td>
              <td>
                {" "}
                <input
                  className="large"
                  type="text"
                  name="colin_Este"
                  value={formValues.colin_Este}
                  onChange={handleInputChange}
                  placeholder="Colindante Este"
                />
              </td>
            </tr>
            <tr>
              <td>SUR</td>
              <td>
                {" "}
                <input
                  className="large"
                  type="text"
                  name="colin_Sur"
                  value={formValues.colin_Sur}
                  onChange={handleInputChange}
                  placeholder="Colindantes Sur"
                />
              </td>
            </tr>
            <tr>
              <td>OESTE</td>
              <td>
                {" "}
                <input
                  className="large"
                  type="text"
                  name="colin_Oeste"
                  value={formValues.colin_Oeste}
                  onChange={handleInputChange}
                  placeholder="Colindantes Oeste"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <div className="App">
        <ExcelTable formValues={formValues} />
        <br />
      </div>
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
        X=1091464,34m y Y=1105537,84m, ubicado en la parte noroeste del predio,
        donde concurren las colindancias de VÍA DE ACCESO AL MEDIO, EN FRENTE;
        BLANCA LILIA MORCOTE DE CASTELBLANCO, predio identificado con número
        predial nacional 151870000000000020131000000000, JUAN CARLOS MARTINEZ
        NONSOQUE, predio identificado con número predial nacional
        151870000000000020131000000000 y el predio en mención.<br></br>
        <br></br> COLINDA ASÍ:<br></br>
        <br></br>
        NORTE: Del punto de partida número 01 en dirección sureste en línea
        recta y en una distancia de 45,2m, hasta encontrar el punto número 02 de
        coordenadas planas X=1091498,93m y Y=1105508,67m, colindando con JUAN
        CARLOS MARTINEZ NONSOQUE, predio identificado con número predial
        nacional 151870000000000020131000000000.<br></br>
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
    </>
  );
}

export default App;

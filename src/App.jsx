import { useState } from "react";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({
    direction: "",
    area_Ha: "",
    area_m2: "",
    codigo: "",
    dirCatastro: "",
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
          type="text"
          name="direction"
          value={formValues.direction}
          onChange={handleInputChange}
          placeholder="Direccion"
        />
        <div class="areasquare">
          <input
            type="text"
            name="area_Ha"
            value={formValues.area_Ha}
            onChange={handleInputChange}
            placeholder="Area Ha"
          />

          <input
            type="text"
            name="area_m2"
            value={formValues.area_m2}
            onChange={handleInputChange}
            placeholder="Area m2"
          />
        </div>
        <input
          type="text"
          name="codigo"
          value={formValues.codigo}
          onChange={handleInputChange}
          placeholder="Numero predial"
        />
        <input
          type="text"
          name="dirCatastro"
          value={formValues.dirCatastro}
          onChange={handleInputChange}
          placeholder="Direccion de catastro"
        />
      </section>
      <p>
        El inmueble denominado {formValues.direction} con un área de{" "}
        {formValues.area_Ha} ha + {formValues.area_m2} m² según levantamiento
        planimétrico, con referencia catastral {formValues.codigo}
        dirección catastral {formValues.dirCatastro}, presenta los siguientes
        linderos, referidos al sistema de referencia oficial Magna Sirgas con
        origen central:
        <br></br>
        <br></br> <b>COLINDANTES</b>
        <br></br>
        <br></br>
        NORTE: JUAN CARLOS MARTINEZ NONSOQUE<br></br>
        ESTE: LUIS ANTONIO NONSOQUE RUÍZ<br></br>
        SUR: JOSE HELADIO MARTINEZ NONZOQUE<br></br>
        OESTE: VÍA DE ACCESO - BLANCA LILIA MORCOTE DE CASTELBLANCO<br></br>
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

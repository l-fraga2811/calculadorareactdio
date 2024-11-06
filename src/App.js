import { Container, Content, Row } from "./styles";
import { useState } from "react";

import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  const [firstNum, setFirstNum] = useState("0");
  const [currentNum, setCurrentNum] = useState("0");
  const [operation, setOperation] = useState(null);

  //adicionar numeros ao input
  const handleAddNum = (num) => {
    setCurrentNum((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  //limpar numeros
  const handleClear = () => {
    setCurrentNum("0");
    setFirstNum("0");
    setOperation(null);
  };

  //soma
  const handleSum = () => {
    if (firstNum === "0") {
      setFirstNum(String(currentNum));
      setCurrentNum("0");
      setOperation("+");
    } else {
      const sum = Number(firstNum) + Number(currentNum);
      setCurrentNum(String(sum));
    }
  };

  //subtracao
  const handleSub = () => {
    if (firstNum === "0") {
      setFirstNum(String(currentNum));
      setCurrentNum("0");
      setOperation("-");
    } else {
      const sub = Number(firstNum) - Number(currentNum);
      setCurrentNum(String(sub));
    }
  };

  //multiplicacao
  const handleMult = () => {
    if (firstNum === "0") {
      setFirstNum(String(currentNum));
      setCurrentNum("0");
      setOperation("x");
    } else {
      const mult = Number(firstNum) * Number(currentNum);
      setCurrentNum(String(mult));
    }
  };

  //divisao
  const handleDiv = () => {
    if (firstNum === "0") {
      setFirstNum(String(currentNum));
      setCurrentNum("0");
      setOperation("/");
    } else {
      const div = Number(firstNum) / Number(currentNum);
      setCurrentNum(String(div));
    }
  };
  const handleEquals = () => {
    if (firstNum !== "0" && operation !== null && currentNum !== "0") {
      switch (operation) {
        case "+":
          handleSum();
          break;
        case "-":
          handleSub();
          break;
        case "x":
          handleMult();
          break;
        case "/":
          handleDiv();
          break;
        default:
          break;
      }
    } else {
      const sum = Number(firstNum) + Number(currentNum);
      setCurrentNum(String(sum));
      setOperation(null);
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNum} />
        <Row>
          <Button label={"x"} onClick={handleMult} />
          <Button label={"/"} onClick={handleDiv} />
          <Button label={"+"} onClick={handleSum} />
          <Button label={"-"} onClick={handleSub} />
        </Row>
        <Row>
          <Button label={"7"} onClick={() => handleAddNum("7")} />
          <Button label={"8"} onClick={() => handleAddNum("8")} />
          <Button label={"9"} onClick={() => handleAddNum("9")} />
        </Row>
        <Row>
          <Button label={"4"} onClick={() => handleAddNum("4")} />
          <Button label={"5"} onClick={() => handleAddNum("5")} />
          <Button label={"6"} onClick={() => handleAddNum("6")} />
        </Row>
        <Row>
          <Button label={"1"} onClick={() => handleAddNum("1")} />
          <Button label={"2"} onClick={() => handleAddNum("2")} />
          <Button label={"3"} onClick={() => handleAddNum("3")} />
        </Row>
        <Row>
          <Button label={"0"} onClick={() => handleAddNum("0")} />
          <Button label={"="} onClick={handleEquals} />
          <Button label={"c"} onClick={handleClear} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;

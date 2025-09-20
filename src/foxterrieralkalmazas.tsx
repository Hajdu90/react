import Paragraph from "./components/Paragraph";
import Vizsla from'./images/labrador.jpg';

function FoxterrierAlkalmazas() {
  return (
    <>
    <Paragraph description="Vizsla leírása" title="Vizsla">
      <div>
        Ez itt egy gyerekelem
      </div>
      </Paragraph>
    <Paragraph description="Labrador leírása"title="Labrador"/>
      <img src={Vizsla}></img>
    <Paragraph description="Foxterrier leírása"title="Foxterrier"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </>
  );
}

export default FoxterrierAlkalmazas;

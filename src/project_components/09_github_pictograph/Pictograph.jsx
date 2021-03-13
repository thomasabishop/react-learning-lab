import './Pictograph.scss';
import { generateYear } from './generateData.js';

function Pictograph() {
  const data = generateYear();
  console.log(data);
  return (
    <div className="Pictorgraph">
      <div className="year">
        {data.map((items, index) => {
          return (
            <div key={index} className="week">
              {items.map((subItems, index) => {
                return (
                  <div className={`day-color-${subItems}`} key={index}></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pictograph;

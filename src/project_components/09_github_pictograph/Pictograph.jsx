import './Pictograph.scss';
import { generateYear, generateCommitData } from './generateData.js';
import { Button, ButtonGroup } from '@material-ui/core';

function Pictograph(props) {
  //const data = generateYear();
  //const data = generateCommitData('empty');
  return (
    <div className="Pictograph">
      <div className="year">
        {props.data.map((items, index) => {
          return (
            <div key={index} className="week">
              {items.map((subItems, index) => {
                return subItems === 0 ? (
                  <div className={`day-color-start`} key={index}></div>
                ) : (
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

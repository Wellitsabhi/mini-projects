import React, { useState } from "react";
import { data } from "./data.js";
import "./style.css";
// singe selection
// multiple selection

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [endableMultiSelection, setEndableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copymultiple = [...multiple];
    const findIndexOfCurrentId = copymultiple.indexOf(getCurrentId);
    if(findIndexOfCurrentId === -1 ) copymultiple.push(getCurrentId)
      else copymultiple.splice(findIndexOfCurrentId,1)
    setMultiple(copymultiple);
    console.log(selected,multiple);
  }
  return (
    <div className="wrapper">
      {/* selection button */}
      <button
        onClick={() => {
          setEndableMultiSelection(!endableMultiSelection);
        }}
      >
        Enable Multi Selection
      </button>

      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  endableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : ()=> handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                endableMultiSelection ?
                 multiple.indexOf(dataItem.id) !== -1 && <div className="content"> {dataItem.answer}</div>
                 : selected === dataItem.id && <div className="content">{dataItem.answer}</div>
              }
              {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;

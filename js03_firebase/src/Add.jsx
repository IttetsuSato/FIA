import React from "react";

/**
 * @param {callBack} addData
 * @param {callBack} handleInputChange
 * @param {string} titleValue 
 */
const Add = ({ addData, handleInputChange, titleValue }) => {
  return (
    <div>
      {/* hrタグは線 */}
      <hr />
      <h1>登録の処理</h1>
      <input type="text" value={titleValue} onChange={handleInputChange} />
      <button onClick={addData}>送信</button>
    </div>
  );
};

export default Add;

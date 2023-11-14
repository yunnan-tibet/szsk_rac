import React from 'react';
import { InputNumber } from 'antd';

function InputFromInterval(props) {
  const { disabled, value, onChange } = props;
  let from = 0;
  let interval = 1;
  if (!disabled) {
    [from, interval] = value.split('/').map((v) => parseInt(v, 10));
  }
  const onChangeFrom = (v) => onChange(`${v || 0}/${interval}`);
  const onChangeInterval = (v) => onChange(`${from}/${v || 1}`);
  console.log(interval, 'interval');
  return (
    <>
      从&nbsp;
      <InputNumber
        disabled={disabled}
        min={0}
        max={59}
        value={from}
        size="small"
        onChange={onChangeFrom}
        style={{ width: 100 }}
      />
      &nbsp;秒开始， 每&nbsp;
      <InputNumber
        disabled={disabled}
        min={1}
        max={59}
        value={interval}
        size="small"
        onChange={onChangeInterval}
        style={{ width: 100 }}
      />
      &nbsp;秒执行
    </>
  );
}

export default InputFromInterval;

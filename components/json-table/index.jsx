import { useCallback, useMemo, useState } from 'react';
import css from './table.module.css'

function getText(obj, { content, text }) {
  if (text) {
    return text(obj);
  } else if (content) {
    const
      res = content(obj);
    if ('string' === typeof res)
      return res;
  }
  return ''
}

export function Table({ data, config }) {
  const
    [sortCol, setSortCol] = useState(null),
    [value, setValue] = useState(''),
    filteredData = useMemo(
      () => data.filter(obj => {
        for (const column of config.columns)
          if (getText(obj, column)?.includes(value))
            return true;

        // for (const key in obj)
        //   if ('string' === typeof obj[key] && obj[key].includes(value))
        //     return true
        // return false;
      })
      , [data, value]),
    sortedData = useMemo(() =>
      sortCol
        ? filteredData.sort(
          (a, b) => {
            const
              column = config.columns[Math.abs(sortCol) - 1];
            return Math.sign(sortCol) * getText(a, column).localeCompare(getText(b, column))
          }
        )
        : filteredData
      , [filteredData, sortCol]),
    onTheadClick = useCallback(index => setSortCol(
      prev => {
        if (config.columns[Math.abs(index)]?.noSort) return prev; // явно запретили сортировку в конфиге
        if (Math.abs(prev) === 1 + index) return -prev;
        return 1 + index;
      }
    ), [])
  return <>
    filter:
    <input
      type="search"
      value={value}
      onInput={event => setValue(event.target.value)}
      className="border-b"
    />

    <DataTable data={sortedData} config={config} sortCol={sortCol} onTheadClick={onTheadClick} />
  </>;
}




function DataTable({ data, config, onTheadClick, sortCol }) {
  return <table>
    <thead>
      <tr>
        {config.columns.map(({ title }, i) =>
          <th
            className={[
              Math.abs(sortCol) === 1 + i ? css.sorted : '',
              Math.abs(sortCol) === 1 + i && sortCol < 0 ? css.descending : '',
              'text-center'
            ].join(' ')}
            onClick={onTheadClick ? () => onTheadClick(i) : null}
            key={i}
          >
            {title}</th>)}
      </tr>
    </thead>
    <tbody>
      {data.map(obj => <tr key={obj.id}>
        {config.columns.map(({ content }, i) => <td key={i}>
          {content(obj)}
        </td>)}
      </tr>)}
    </tbody>
  </table >
}
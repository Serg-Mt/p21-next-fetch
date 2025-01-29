





export function Table({ data, config }) {
  return <table>
    <thead>
      <tr>
        {config.columns.map(({ title }, i) => <td key={i}>
          {title}</td>)}
      </tr>
    </thead>
    <tbody>
      {data.map(obj => <tr key={obj.id}>
        {config.columns.map(({content},i)=><td key={i}>
          {content(obj)}
        </td>)}
      </tr>)}
    </tbody>
  </table>
}
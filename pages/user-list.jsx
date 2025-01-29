import { Fetcher } from '@/components/fetcher';
import { Table } from '@/components/json-table';
import config from '@/components/json-table/jsph-user-config';

export default function UserListPage() {
  return <>
    <h1>User list</h1>
    <Fetcher
      url={config.url}
      DataComponent={Wrapper}
    />
  </>
}

// function UserList({ data }) {
//   return <ol>
//     {data.map(u => <li key={u.id}>
//       {u.name}
//     </li>)}
//   </ol>
// }

function Wrapper({ data }) {
  return <Table data={data} config={config} />
}
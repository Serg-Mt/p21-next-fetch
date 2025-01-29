import { Fetcher } from '@/components/fetcher';
import { Table } from '@/components/json-table';
import config from '@/components/json-table/rnm-character-config';

export default function UserListPage() {
  return <>
    <h1>Rick and Morty API </h1>
    <Fetcher
      url={config.url}
      DataComponent={Wrapper}
    />
  </>
}



function Wrapper({ data }) {
  return <Table data={data.results} config={config} />
}
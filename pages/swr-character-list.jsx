import { Table } from '@/components/json-table';
import config from '@/components/json-table/rnm-character-config';
import { SWRFetcher } from '@/components/swr-fetcher';

export default function UserListPage() {
  return <>
    <h1>SWR Rick and Morty  </h1>
    <SWRFetcher
      fetcher={(...args) => fetch(...args).then(res => res.json()).then(json => json.results) }
      url={config.url}
      DataComponent={Wrapper}
    />
  </>
}



function Wrapper({ data }) {
  return <Table data={data} config={config} />
}
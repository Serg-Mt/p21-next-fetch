
import { Table } from '@/components/json-table';
import config from '@/components/json-table/jsph-user-config';
import { SWRFetcher } from '@/components/swr-fetcher';

export default function UserListPage() {
  return <>
    <h1>User list (SWR)</h1>
    <SWRFetcher
      url={config.url}
      DataComponent={Wrapper}
    />
  </>
}



function Wrapper({ data }) {
  return <Table data={data} config={config} />
}
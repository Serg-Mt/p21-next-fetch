import useSWR from 'swr'
import { ErrorIndicator } from './error-indicator';
import { Spinner } from './spinner';

export function SWRFetcher({
  url,
  fetcher = (...args) => fetch(...args).then(res => res.json()),
  SpinnerComponent = Spinner,
  ErrorComponent = ErrorIndicator,
  DataComponent
}) {
  const
    { data, error, isLoading, isValidating } = useSWR(url, fetcher);
  return <>
    <div className="text-4xl absolute">
      {isLoading && '⏳'}
      {isValidating && '👀'}
    </div>
    {error && <ErrorComponent error={error} />}
    {data && <DataComponent data={data} />}
    {!data && !error && <SpinnerComponent />}

  </>
}
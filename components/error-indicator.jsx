export function ErrorIndicator({ error }) {
  return <div className="bg-red-600 text-yellow-200">
    ⚠
    {'function' === typeof error.toString && error.toString()}  </div>
}
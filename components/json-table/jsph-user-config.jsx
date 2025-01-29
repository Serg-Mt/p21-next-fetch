export default {
  url: 'https://jsonplaceholder.typicode.com/users',
  columns: [
    { title: 'Name', content: user => user.name },
    { title: 'Username', content: ({ username }) => username },
    { title: 'Email', content: ({ email }) => <a href="mailto:{email}">{email}</a> },
    { title: 'Phone', content: ({ phone }) => phone },
    { title: 'address', content: (({ address }) => <MapLink geo={address.geo} text={`${address.city} ${address.street} ${address.suites}`} />) }

  ]
}

function MapLink({ geo, text }) {
  return <a href={`https://maps.google.com/maps?ll=${geo?.lat},${geo?.lng}`} >{text}</a>
}

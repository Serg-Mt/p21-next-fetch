export default {
  url: 'https://jsonplaceholder.typicode.com/users',
  columns: [
    { title: 'Name', content: user => user.name },
    { title: 'Username', content: ({ username }) => username },
    { title: 'Email', content: ({ email }) => <a href="mailto:{email}">{email}</a>, text: ({ email }) => email },
    { title: 'Phone', content: ({ phone }) => phone },
    { title: 'address', content: (({ address }) => <MapLink geo={address.geo} text={`${address.city} ${address.street} ${address.suite}`} />), text:({address})=>`${address.city} ${address.street} ${address.suite}`  }

  ]
}

function MapLink({ geo, text }) {
  return <a href={`https://maps.google.com/maps?ll=${geo?.lat},${geo?.lng}`} >{text}</a>
}

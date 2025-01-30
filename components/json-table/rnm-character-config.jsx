export default {
  url: 'https://rickandmortyapi.com/api/character',
  columns: [
    { noSort: true, title: '', content: ({ image }) => <img className="size-10 m-0" src={image} /> },
    { title: 'Name', content: user => user.name },
    { title: 'Status', content: ({ status }) => status },
    { title: 'Species', content: ({ species }) => species }

  ]
}


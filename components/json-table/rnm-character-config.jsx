export default {
  url: 'https://rickandmortyapi.com/api/character',
  columns: [
    { title: '', content: ({ image }) => <img className="size-10 m-0 hover:size-20 absolute hover:z-10" src={image} /> },
    { title: 'Name', content: user => user.name },
    { title: 'Status', content: ({ status }) => status },

  ]
}


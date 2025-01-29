import Link from 'next/link';

const pages = [
  { href: '/', title: 'Home' },
  { href: '/user-list', title: 'User List (jsph)' },
  {href:'/character-list',title:'Rick and Morty characters'}
  // { href: '/todo', title: 'ToDo List' },
  // { href: '/todo-delegation', title: 'ToDo delegation' },
  // { href: '/calendar', title: 'Calendar' },
];

export function Header() {
  return <header className="bg-sky-500/50">
    <nav>
      <ul className="flex flex-wrap justify-around">
        {pages.map(({ href, title }) =>
          <li key={href} className="p-1 grow text-center hover:bg-sky-600">
            <Link href={href}>{title}</Link>
          </li>)
        }
      </ul>
    </nav>
  </header>
}
const NavBar = () => {
  const navItems = [
    {
      name: 'About',
      link: '/'
    },
    {
      name: 'Resume',
      link: '/resume/'
    },
    {
      name: 'Portfolio',
      link: '/portfolio/'
    },
    {
      name: 'Blog',
      link: '/blog/'
    },
    {
      name: 'Contact',
      link: '/contact/'
    }
  ]

  return (
    <nav class="navbar">

      <ul class="navbar-list">

        { navItems.map(item => (
          <li class="navbar-item">
            <a href={item.link} class="navbar-link">{item.name}</a>
          </li>  
        ))}
      </ul>

    </nav>
  )
}

export default NavBar

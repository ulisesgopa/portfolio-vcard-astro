const Clients = () => {
  const clients = [
    {
      id: 1,
      name: 'Client 1',
      logo: '/assets/images/logo-1-color.webp',
      link: '#'
    },
    {
      id: 2,
      name: 'Client 2',
      logo: '/assets/images/logo-2-color.webp',
      link: '#'
    },
    {
      id: 3,
      name: 'Client 3',
      logo: '/assets/images/logo-3-color.webp',
      link: '#'
    },
    {
      id: 4,
      name: 'Client 4',
      logo: '/assets/images/logo-4-color.webp',
      link: '#'
    },
    {
      id: 5,
      name: 'Client 5',
      logo: '/assets/images/logo-5-color.webp',
      link: '#'
    },
    {
      id: 6,
      name: 'Client 6',
      logo: '/assets/images/logo-6-color.webp',
      link: '#'
    }
  ]
  return (
    <section class="clients">

      <h3 class="h3 clients-title">Clients</h3>

      <ul class="clients-list has-scrollbar">
        { clients.map(client => (
          <li class="clients-item">
            <a href={client.link}>
              <img src={client.logo} alt="client logo"/>
            </a>
          </li>
        ))}
      </ul>

    </section>
  )
}

export default Clients

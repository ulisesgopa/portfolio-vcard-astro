const Aside = () => {

  const content = {
    title: 'Richard Hanrick',
    description: 'Web developer',
    email: 'richard@example.com',
    phone: '+1 (213) 352-2795',
    birthday: 'June 23, 1982',
    location: 'Sacramento, California, USA',
  }

  const contacts = [
    {
      icon: 'email',
      title: 'Email',
      link: 'mailto:richard@example.com',
      value: 'richard@example.com',
    },
    {
      icon: 'phone',
      title: 'Phone',
      link: 'tel:+1213522795',
      value: '+1 (213) 352-2795',
    },
    {
      icon: 'calendar',
      title: 'Birthday',
      link: '#',
      value: 'June 23, 1982',
    },
    {
      icon: 'map',
      title: 'Location',
      link: '#',
      value: 'Sacramento, California, USA',
    },
  ]

  const social = [
    {
      icon: 'facebook',
      link: 'https://facebook.com',
      title: 'Facebook',
      value: 'facebook.com',
    },
    {
      icon: 'twitter',
      link: 'https://twitter.com',
      title: 'Twitter',
      value: 'twitter.com',
    },
    {
      icon: 'instagram',
      link: 'https://instagram.com',
      title: 'Instagram',
      value: 'instagram.com',
    },
    {
      icon: 'linkedin',
      link: 'https://linkedin.com',
      title: 'LinkedIn',
      value: 'linkedin.com',
    },
    {
      icon: 'github',
      link: 'https://github.com',
      title: 'GitHub',
      value: 'github.com'
    },
  ]

  return (
    <aside className="sidebar" data-sidebar>

      <div className="sidebar-info">

        <figure className="avatar-box">
          <img src='/assets/images/my-avatar.webp' alt='Avatar image'/>
        </figure>

        <div className="info-content">
          <h1 className="name">{content.title}</h1>

          <p className="title">{content.description}</p>
        </div>

        <button className="info_more-btn" aria-label="Expand information" data-sidebar-btn>
          <span>Show Contacts</span>

          <img src="/assets/icons/arrow-down.webp" alt="arrow-down icon"/>
        </button>

      </div>

      <div className="sidebar-info_more">

        <div className="separator"></div>

        <ul className="contacts-list">
          {contacts.map((contact) => (
            <li className="contact-item">
              <div className="icon-box">
                <img src={`/assets/aside-logos/${contact.icon}.webp`} alt='' width={30} height={30}/>
              </div>

              <div className="contact-info">
                <p className="contact-title">{contact.title}</p>

                <a href={contact.link} className="contact-link">{contact.value}</a>
              </div>
            </li>
            ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {social.map((social) => (
            <li className="social-item">
              <a href={social.link} className="social-link">
                <img src={`/assets/social-logos/${social.icon}.webp`} alt={social.icon} width={'auto'} height={'auto'}/>
              </a>
            </li>
          ))}

        </ul>

      </div>

    </aside>
  )
}

export default Aside

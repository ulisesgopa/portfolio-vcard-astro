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
      link: '#',
      title: 'Facebook',
      value: 'facebook.com',
    },
    {
      icon: 'twitter',
      link: '#',
      title: 'Twitter',
      value: 'twitter.com',
    },
    {
      icon: 'instagram',
      link: '#',
      title: 'Instagram',
      value: 'instagram.com',
    },
    {
      icon: 'linkedin',
      link: '#',
      title: 'LinkedIn',
      value: 'linkedin.com',
    },
    {
      icon: 'github',
      link: '#',
      title: 'GitHub',
      value: 'github.com'
    },
  ]

  return (
    <aside class="sidebar" data-sidebar>

      <div class="sidebar-info">

        <figure class="avatar-box">
          <img src='/assets/images/my-avatar.webp ' alt='Avatar image'/>
        </figure>

        <div class="info-content">
          <h1 class="name">{content.title}</h1>

          <p class="title">{content.description}</p>
        </div>

        <button class="info_more-btn" aria-label="Expand information" data-sidebar-btn>
          <span>Show Contacts</span>

          <img src="/assets/icons/arrow-down.webp" width="15px" alt="arrow-down icon"/>
        </button>

      </div>

      <div class="sidebar-info_more">

        <div class="separator"></div>

        <ul class="contacts-list">
          {contacts.map((contact) => (
            <li class="contact-item">
              <div class="icon-box">
                <img src={`/assets/aside-logos/${contact.icon}.webp`} alt='' width={30}/>
              </div>

              <div class="contact-info">
                <p class="contact-title">{contact.title}</p>

                <a href={contact.link} class="contact-link">{contact.value}</a>
              </div>
            </li>
            ))}
        </ul>

        <div class="separator"></div>

        <ul class="social-list">
          {social.map((social) => (
            <li class="social-item">
              <a href={social.link} class="social-link">
                <img src={`/assets/social-logos/${social.icon}.webp`} alt='' width={'auto'} height={'auto'}/>
              </a>
            </li>
          ))}

        </ul>

      </div>

    </aside>
  )
}

export default Aside

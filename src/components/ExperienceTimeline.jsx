const ExperienceTimeline = () => {
  const content = [
    {
      title: 'Creative director',
      date: '2015 — Present',
      description: 'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'
    },
    {
      title: 'Art director',
      date: '2013 — 2015',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
    {
      title: 'Web designer',
      date: '2010 — 2013',
      description: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    }
  ]
  return (
    <section class="timeline">

      <div class="title-wrapper">
        <div class="icon-box">
          <img src="/assets/icons/book.webp" width={30} alt=""/>
        </div>

        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">
        {
          content.map((content) => (
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">{content.title}</h4>
              <span>{content.date}</span>
              <p class="timeline-text">{content.description}</p>
            </li>
        ))}
      </ol>

    </section>
  )
}

export default ExperienceTimeline

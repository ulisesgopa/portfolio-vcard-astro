const EducationTimeline = () => {
  const content = [
    {
      title: 'University school of the arts',
      date: '2007 — 2008',
      text: 'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.'
    },
    {
      title: 'New york academy of art',
      date: '2006 — 2007',
      text: 'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.'
    },
    {
      title: 'High school of art and design',
      date: '2002 — 2004',
      text: 'Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'
    },
  ]

  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <img src="/assets/icons/book.webp" width={30} alt=""/>
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">
        {
          content.map((content) => (
            <li key={content.title} className="timeline-item">
              <h4 className="h4 timeline-item-title">{content.title}</h4>
              <span>{content.date}</span>
              <p className="timeline-text">{content.text}</p>
            </li>
        ))}
      </ol>

    </section>
  )
}

export default EducationTimeline

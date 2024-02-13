const BlogPosts = () => {

  const postItems = [
  {
    title: "Design conferences in 2022",
    category: "Design",
    img: "/assets/images/blog-1.webp",
    date: "Fab 23, 2022",
    description: "Veritatis et quasi architecto beatae vitae dicta sunt, explicabo."
  },
  {
    title: "Best fonts every designer",
    category: "Design",
    img: "/assets/images/blog-2.webp",
    date: "Fab 23, 2022",
    description: "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi."
  },
  {
    title: "Design digest #80",
    category: "Design",
    img: "/assets/images/blog-3.webp",
    date: "Fab 23, 2022",
    description: "Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit."
  },
  {
    title: "UI interactions of the week",
    category: "Design",
    img: "/assets/images/blog-4.webp",
    date: "Fab 23, 2022",
    description: "Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi."
  },
  {
    title: "The forgotten art of spacing",
    category: "Design",
    img: "/assets/images/blog-5.webp",
    date: "Fab 23, 2022",
    description: "Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Design digest #79",
    category: "Design",
    img: "/assets/images/blog-6.webp",
    date: "Fab 23, 2022",
    description: "Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum."
  }
];

  return (
    <section class="blog-posts">
      <ul class="blog-posts-list">
        { postItems.map(posts => (
          <li class="blog-post-item">
            <a href="#">

              <figure class="blog-banner-box">
                <img src={posts.img} alt={posts.title} loading="lazy"/>
              </figure>

              <div class="blog-content">

                <div class="blog-meta">
                  <p class="blog-category">{posts.category}</p>

                  <span class="dot"></span>

                  <time datetime="2022-02-23">{posts.date}</time>
                </div>

                <h3 class="h3 blog-item-title">Design conferences in 2022</h3>

                <p class="blog-text">
                  Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                </p>

              </div>

            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogPosts

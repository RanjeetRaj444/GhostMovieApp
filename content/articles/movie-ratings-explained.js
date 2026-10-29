const article = {
  slug: "what-movie-ratings-actually-mean",
  title: "What a Movie's Rating Actually Means (and When to Ignore It)",
  description:
    "User ratings, vote counts, and critic scores all measure different things. How to read them like someone who knows what they're looking at.",
  excerpt:
    "A 9.0 from 200 people and a 7.4 from 200,000 are not the same signal. Here's how to read a rating properly.",
  date: "2026-10-15",
  updated: "2026-10-25",
  author: "G-movies Editorial Team",
  tags: ["explainer", "ratings"],
  readingTime: 5,
  blocks: [
    {
      type: "p",
      c: [
        "A rating looks like a simple number, which is exactly why it misleads so often. The score next to a film is the end of a long chain of decisions about who voted, how many of them, and what they were really reacting to. Once you understand what the number is actually measuring, you'll trust some ratings far more than others — and waste less time on films that were never going to be for you.",
      ],
    },
    { type: "h2", c: "Vote count matters more than the score" },
    {
      type: "p",
      c: [
        "The single most important number is one most people ignore: how many people voted. A 9.0 average from 150 votes is noise — easily skewed by a passionate fanbase or a review campaign. A 7.6 from 300,000 votes is a genuine signal that a large, varied audience broadly agreed. On every ",
        { t: "title page here", href: "/explore/movie" },
        ", the rating is shown alongside its vote count for exactly this reason. When the count is low, treat the score as a rumour, not a verdict.",
      ],
    },
    {
      type: "callout",
      c: [
        "Quick heuristic: below a few thousand votes, weight the score lightly. Above a hundred thousand, it's telling you something real.",
      ],
    },
    { type: "h2", c: "Audience scores and critic scores measure different things" },
    {
      type: "p",
      c: [
        "Audience ratings capture enjoyment — did people have a good time? Critic scores capture craft — is it well made, original, well acted? These diverge constantly. A crowd-pleasing blockbuster can post a high audience score and a middling critic score, while a demanding art film does the reverse. Neither is wrong; they answer different questions. Decide which question you care about tonight before you let a number steer you.",
      ],
    },
    { type: "h2", c: "Genre changes the baseline" },
    {
      type: "p",
      c: [
        "Scores aren't comparable across genres. Horror and comedy run lower on average than drama, partly because they're more divisive and partly because they're graded against prestige norms they were never trying to meet. A 6.8 horror film can be an excellent horror film. Judge a title against the best of its own genre — which is why our ",
        { t: "genre guides", href: "/streaming/netflix/horror" },
        " rank within a category rather than throwing everything into one pile.",
      ],
    },
    { type: "h2", c: "When to ignore the rating entirely" },
    {
      type: "ul",
      items: [
        ["The vote count is tiny — you're reading noise."],
        ["It's a brand-new release — early scores swing wildly before they settle."],
        [
          "It's a niche or cult film — mass ratings systematically undervalue work made for a specific audience.",
        ],
        [
          "You already know you love the genre or director — your own taste is better data than a stranger's average.",
        ],
      ],
    },
    {
      type: "p",
      c: [
        "Use ratings as one input, weighted by how many people voted and which question the score answers. Then watch the trailer and trust yourself. Start by ",
        { t: "exploring highly-rated films", href: "/explore/movie?sort=vote_average.desc" },
        " with the vote count in view.",
      ],
    },
  ],
};

export default article;

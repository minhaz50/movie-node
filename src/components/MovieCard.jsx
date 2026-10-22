const IMG_BASE = "https://image.tmdb.org/t/p/w500";

const starColor = (rating) =>
  rating >= 7.5
    ? "fill-green-400"
    : rating >= 6
      ? "fill-yellow-400"
      : "fill-red-400";

const MovieCard = ({
  movie: {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
    overview,
  },
}) => {
  const rating = vote_average ? vote_average.toFixed(1) : "N/A";
  const year = release_date ? release_date.split("-")[0] : "Unknown";

  return (
    <li
      tabIndex={0}
      className="group flex cursor-pointer flex-col gap-3 outline-none list-none"
    >
      {/* Poster */}
      <div
        className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-[#1c1b2e] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.7)] transition duration-300 motion-reduce:transition-none group-hover:-translate-y-1 group-hover:shadow-[0_18px_32px_-12px_rgba(120,90,255,0.45)]
        group-focus-visible:-translate-y-1 group-focus-visible:ring-2
      group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-2
        group-focus-visible:ring-offset-transparent"
      >
        {poster_path ? (
          <img
            src={`${IMG_BASE}${poster_path}`}
            alt={`${title} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500
                       motion-reduce:transition-none group-hover:scale-105
                       group-focus-visible:scale-105"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-sm text-gray-400">
            No poster
          </div>
        )}

        {/* Rating badge */}
        <span
          className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/70 px-2.5 py-1
                     text-xs font-bold text-white backdrop-blur-md"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={`h-3.5 w-3.5 ${starColor(vote_average)}`}
          >
            <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3 6.1 20.6l1.3-6.6L2.5 9.4l6.6-.8z" />
          </svg>
          {rating}
        </span>

        {/* Overview slides up on hover / focus */}
        {overview && (
          <div
            className="absolute inset-x-0 bottom-0 translate-y-full
                       bg-gradient-to-t from-[#080712]/95 from-55% to-transparent
                       px-3.5 pb-3.5 pt-10 transition-transform duration-300
                       motion-reduce:transition-none
                       group-hover:translate-y-0 group-focus-visible:translate-y-0"
          >
            <p className="line-clamp-5 text-xs leading-relaxed text-gray-300">
              {overview}
            </p>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <h3
          title={title}
          className="truncate text-base font-semibold text-white"
        >
          {title}
        </h3>
        <p className="mt-0.5 text-sm text-gray-400">
          {year} • {original_language?.toUpperCase()}
        </p>
      </div>
    </li>
  );
};

export default MovieCard;

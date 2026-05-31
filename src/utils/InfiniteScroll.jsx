export function InfiniteScroll({ lightmode }) {
  const items = [
    "LOVE",
    "PEACE",
    "JOY",
    "INTELLIGENCE",
    "LEARNING",
    "HOPE",
    "EDUCATION",
    "PATIENCE",
    "FRIENDSHIP",
    "UNITY",
    "GROWTH",
    "PROGRESS",
    "UNDERSTANDING",
    "COURAGE",
  ];

  return (
    <div
      className={`relative my-5 overflow-hidden py-2 w-screen ${
        lightmode ? "" : ""
      }`}
    >
      {/* LEFT FADE */}
      <div
        className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24 ${
          lightmode
            ? "bg-linear-to-r from-[#F8C089] to-transparent"
            : "bg-linear-to-r from-[#F8C089] to-transparent"
        }`}
      />

      {/* RIGHT FADE */}
      <div
        className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24 ${
          lightmode
            ? "bg-linear-to-l from-[#F8C089] to-transparent"
            : "bg-linear-to-l from-[#F8C089] to-transparent"
        }`}
      />

      {/* SCROLLING CONTENT */}
      <div className="flex w-max animate-[scroll_25s_linear_infinite]">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="mx-6 mt-10 font-[playfair] mb-4 text-[#4C1711] text-sm font-italic whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
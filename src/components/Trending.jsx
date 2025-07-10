import { categories } from "../data/data";

export default function Trending() {
  return (
    <section className="max-w-6xl mx-auto my-16">
      <h2 className="text-5xl text-primary font-semibold text-center py-12">
        Trending Grocery Picks
      </h2>
      <div className="flex flex-col md:flex-row justify-between *:flex-1 gap-12">
        {categories.map((category) => (
          <div
            key={category.title}
            className="py-4 px-5 text-primary flex flex-col gap-2 justify-center items-center border border-primary/20 shadow-md rounded-2xl hover:bg-primary hover:text-white transition duration-500 cursor-pointer"
          >
            <img src={category.image} alt={category.title} />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <p className="text-sm">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

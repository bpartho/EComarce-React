export default function Filter({
  searchText,
  setSearchText,
  sortOption,
  setSortOption,
}) {
  return (
    <div className="max-w-6xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="w-full md:w-1/4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800 placeholder:text-gray-500"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="w-full md:w-1/4">
        <select
          className="w-full px-4 py-2 text-base rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by</option>
          <option value="high-to-low">Price: High → Low</option>
          <option value="low-to-high">Price: Low → High</option>
        </select>
      </div>
    </div>
  );
}

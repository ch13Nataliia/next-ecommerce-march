const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      {/* RIGHT SIDE */}
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="phisical">Phisical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-xl pl-2 w-24 ring-1 ring-gray-400"
        />

        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Size</option>
          <option value="">Size</option>
        </select>
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>
          <option value="">Test</option>
        </select>
        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="phisical">New Arrival</option>
          <option value="digital">Poppular</option>
        </select>
        <select
          name="ribbon"
          id=""
          className="py-2 px-4 rounded-xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      {/* LEFT SIDE */}
      <div className="">
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Sort By</option>
          <option value="">Proce (low to high)</option>
          <option value="">Proce (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest (low to high)</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

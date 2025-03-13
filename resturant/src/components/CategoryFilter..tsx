type CategoryFilterProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="d-flex justify-content-center gap-3 mb-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`btn ${
            selectedCategory === category
              ? "btn-danger"
              : "btn-outline-secondary"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

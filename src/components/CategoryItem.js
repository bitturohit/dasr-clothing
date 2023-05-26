import './CategoryItem.scss';

const CategoryItem = ({ category }) => {
  console.log('hh');
  return (
    <div className="category-container" key={category.id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;

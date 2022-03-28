/** @format */

const ChildFunctional = (props) => {
  const { src, name, price } = props.product;
  return (
    <div>
      <img style={{ width: 50 }} src={src} />
      <div style={{ width: 250 }} className="card">
        <img
          className="card-img-top"
          src={props.product.src}
          alt={props.product.src}
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">Price: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default ChildFunctional;

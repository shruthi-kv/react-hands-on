const Card = ({ name, role }) => {
  return (
    <div className="Card">
      <p>User Details</p>
      <h1>{name}</h1>
      <p>{role}</p>
    </div>
  );
};

export default Card;

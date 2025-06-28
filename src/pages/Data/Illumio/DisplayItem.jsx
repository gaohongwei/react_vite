function DisplayItem({ item }) {
  const { id, name, thumbnail, description } = item;
  const { path, extension } = thumbnail;
  const fullPath = `${path}.${extension}`;
  return (
    <div key={id} className="display-item">
      <img src={fullPath} alt={name} width="100px" />
      <div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default DisplayItem;

const Gallery = ({ pics }) => {
  return (
    <ul>
      {pics.map(({ id, url, description }) => (
        <li key={id}>
          <img src={url} alt={description || 'sadcat'} width={150} />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;

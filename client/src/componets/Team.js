import React from 'react';

const PhotoGallery = () => {
  // Список URL-адресов фотографий
  const photoUrls = [
    'https://sun9-80.userapi.com/impg/p4HPJq1qwxTY0oe6adrwbeIFMGMndWcqnmfW6g/HsdyKUUpUuY.jpg?size=1336x923&quality=95&sign=089f0b207b8c4ef0f2b0975baa602cfa&type=album',
    'https://sun9-2.userapi.com/impg/KBdE8DHh8iulTF6vw488VPljyDwqzcGiQNaeBg/gc9coXOnG3Q.jpg?size=1313x929&quality=95&sign=7a923dc7cd5e49ca158a5822561de4e3&type=album',
    'https://sun9-13.userapi.com/impg/Oqdb9qB5FdluMMDiPU04e6X82mGAmV-2JVAzjg/iQwmYIQ28rs.jpg?size=1325x910&quality=95&sign=1ac7f843750657be29e0678f72a46714&type=album',
    // Добавьте другие URL-адреса фотографий по желанию
  ];

  return (
    <div className="photo-gallery" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {photoUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={`Photo ${index}`}
          className="photo"
          style={{ width: '90%', maxWidth: '1200px', margin: '10px auto', objectFit: 'contain' }}
        />
      ))}
    </div>
  );
};

export default PhotoGallery;

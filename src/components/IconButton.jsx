import { Button, Image } from 'react-bootstrap';

export default function IconButton({ isTop, isBottom, className, onClick, imageSrc }) {
  let margin = 'my-2';

  if (isTop) {
    margin = 'my-4';
  } else if (isBottom) {
    margin = 'mt-auto mb-3';
  }

  return (
    <Button variant="light" className={margin} style={{ marginBottom: '7px' }} onClick={onClick}>
      {imageSrc ? (
        <Image
        src = {imageSrc}
        roundedCircle
        style={{width: "30px", height: "30px", objectFit:"cover"}}
        />
      ) : (
        <i className={className} style={{ fontSize: '24px' }}></i>
      )}
    </Button>
  );
}

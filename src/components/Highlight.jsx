import { Row, Col, Image } from 'react-bootstrap';

export default function Highlight() {
    const photos = [
        { src: "https://cdn-icons-png.flaticon.com/512/2111/2111387.png", subtitle: "Meet ups" },
    { src: "https://cdn.create.vista.com/api/media/small/269161886/stock-photo-review-eyeball-blue-round-button", subtitle: "Reviews" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAVKiv0cAJpbDy0AuwLs6chcrt1sVslffsUg&s", subtitle: "Shoutouts" },
    { src: "https://thumbs.dreamstime.com/b/vector-illustration-now-hiring-icon-web-blue-round-button-white-background-now-hiring-button-119621596.jpg", subtitle: "Hiring" },
    { src: "https://c8.alamy.com/comp/2BHADPC/events-icon-isolated-on-special-blue-round-button-abstract-illustration-2BHADPC.jpg", subtitle: "Events" },
    { src: "https://atlas-content-cdn.pixelsquid.com/stock-images/blue-faq-chat-icon-symbols-AvOwJK2-600.jpg", subtitle: "FAQs" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6UAzqKowQj18jGZVXRMXjpCdzNQtYfczTRQ&s", subtitle: "Mentors" },
    ];

    return(
        <Row className="mb-4 justify-content-around">
            {photos.map((p, index) => (
                <Col key={index} xs="auto" className="d-flex flex-column align-items-center">
                    <Image src={p.src}
                           roundedCircle
                           style={{width: 64, height: 64, objectFit: "cover", border:"2px solid white", boxShadow: "0 1px 3px rgba(0,0,0,0.08)"}}/>
                    <small className='mt-2 text-center text-truncate' style={{maxWidth: 70,
              fontSize: "0.8rem",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",}}>
                        {p.subtitle}
                    </small>
                </Col>
            ))}
        </Row>
    );
} 

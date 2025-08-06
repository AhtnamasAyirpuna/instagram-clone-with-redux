import {Tab, Tabs} from "react-bootstrap";
import ImageGrid from './ImageGrid';
import {useState} from 'react';

export default function TabsClone() {
    const [key, setKey] = useState('posts');

    return (
        <Tabs id="controlled"
               activeKey={key}
               onSelect={(k) => setKey(k)}
               className="mb-3 justify-content-center"
        >
            <Tab eventKey="posts" title="Posts">
              <ImageGrid />
            </Tab>
            <Tab eventKey="reels" title="Reels">
                Tab content for reels
            </Tab>
            <Tab eventKey="tagged" title="Tagged">
                Tab content for tagged
            </Tab>
        </Tabs>
    );
}
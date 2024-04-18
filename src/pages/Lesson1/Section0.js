import { Image, Heading, Text, Content } from "@adobe/react-spectrum";
import { Card} from "@react-spectrum/card";

export function Section0() {
    return (
        <>
            <h1>Section 0</h1>
            <Card>
                <Image src="./adobe-digital-cafe/images/AdobeStock_464201632.jpeg" />
                <Heading>Title  1</Heading>
                <Text slot="detail">PNG</Text>
                <Content>Description</Content>
            </Card>
        </>
    );
}

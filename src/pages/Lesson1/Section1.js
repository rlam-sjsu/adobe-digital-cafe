import { Image, Heading, Text, Content } from "@adobe/react-spectrum";
import { Card} from "@react-spectrum/card";

export function Section1() {
    return (
        <>
            <h1>Section 1</h1>
            <Card>
                <Image src="./adobe-digital-cafe/images/AdobeStock_436410152.jpeg" />
                <Heading>Title  1</Heading>
                <Text slot="detail">PNG</Text>
                <Content>Description</Content>
            </Card>
        </>
    );
}

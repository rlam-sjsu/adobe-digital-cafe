import "../assets/css/Navbar.css";
import "../assets/css/index.css";
import React from "react";
import '@spectrum-web-components/accordion/sp-accordion.js';
import '@spectrum-web-components/accordion/sp-accordion-item.js';
import '@spectrum-web-components/card/sp-card.js';
import '@spectrum-web-components/divider/sp-divider.js';
import '@spectrum-web-components/menu/sp-menu.js';
import '@spectrum-web-components/menu/sp-menu-group.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/menu/sp-menu-divider.js';
import '@spectrum-web-components/action-menu/sp-action-menu.js';
import { Image, Heading, Text, Content } from "@adobe/react-spectrum";
import { Card } from "@react-spectrum/card";
import { Grid, Flex, View, Link } from '@adobe/react-spectrum'
import "@spectrum-css/typography"
import "@spectrum-css/card"
import "@spectrum-css/divider"
import '@spectrum-web-components/link/sp-link.js';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@adobe/react-spectrum'
import { Divider } from '@adobe/react-spectrum'
import {Footer} from '@adobe/react-spectrum'

import "@spectrum-css/vars/dist/spectrum-global.css"
import "@spectrum-css/vars/dist/spectrum-medium.css"
import "@spectrum-css/vars/dist/spectrum-light.css"
import "@spectrum-css/page/dist/index-vars.css"

import {
    SideNav,
    SideNavHeading,
    SideNavItem
} from '@swc-react/sidenav';

// <!--Spectrum Web Components-->
import "@spectrum-web-components/theme/theme-light.js";
import '@spectrum-web-components/theme/express/theme-light.js';
import "@spectrum-web-components/theme/scale-medium.js";
import '@spectrum-web-components/theme/express/scale-medium.js';
import { Theme } from "@swc-react/theme";

export function Home() {
    return (
        <>
            <Grid
                width="100%"
                margin='auto'
                backgroundColor='gray-50'
                padding='size-200'
                areas={[
                    'content table-of-contents',
                    'content table-of-contents',
                    'content table-of-contents'
                ]}
                columns={['4fr', '1fr']}
                rows={['size-500', 'auto']}
            >
                <View gridArea='content'>
                    <Flex direction="row" gap="size-100" marginY="size-100" alignItems="start" wrap gridArea='content' width='66%' margin='auto'>
                        <Text width='100%' marginTop='size-800'>
                            <h1 className="spectrum-Heading spectrum-Heading--sizeXXXL spectrum-Heading--serif">Adobe Digital Café</h1>
                        </Text>
                        <Text marginTop='size-100' marginBottom='size-500'>
                            <p class="spectrum-Body spectrum-Body--sizeL">Adobe Digital Café is a place for students, staff, and faculty of San José State University to access resources related to Adobe Creative Cloud.</p>
                        </Text>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/AdobeStock_464201632-artwork.jpg" />
                                <Heading>Upcoming events</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="/register">Register for upcoming workshops</RouterLink>
                                        </Link>
                                    </Flex>
                                </Content>
                            </Card>
                        </View>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/AdobeStock_436410152-artwork.jpg" />
                                <Heading>Students</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="/lesson-plans">Adobe Student Ambassadors</RouterLink>
                                        </Link>
                                        <Link isQuiet>
                                            <RouterLink to="/lesson-plans">Student showcases</RouterLink>
                                        </Link>
                                        <Link isQuiet>
                                            <RouterLink to="/lesson-plans">Student specific tutorials</RouterLink>
                                        </Link>
                                    </Flex>
                                </Content>
                            </Card>
                        </View>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/AdobeStock_617136778-artwork.jpg" />
                                <Heading>Faculty</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="/lesson-plans">Embedding Adobe apps into your curriculum</RouterLink>
                                        </Link>
                                        <Link isQuiet>
                                            <RouterLink to="/lesson-plans">How Digital Literacy improves learning outcomes</RouterLink>
                                        </Link>
                                    </Flex>
                                </Content>
                            </Card>
                        </View>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/AdobeStock_617136778-artwork-copy.jpg" />
                                <Heading>Staff</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="/lesson-plans">Leveraging Adobe apps in your daily work processes</RouterLink>
                                        </Link>
                                        <Link isQuiet>
                                            <RouterLink to="/lesson-plans">Staff specific tutorials</RouterLink>
                                        </Link>
                                    </Flex>
                                </Content>
                            </Card>
                        </View>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/AdobeStock_579829321-artwork.jpg" />
                                <Heading>Accessing your Adobe License</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="/lesson-plans">Activating your SJSU Adobe License</RouterLink>
                                        </Link>
                                    </Flex>
                                </Content>
                            </Card>
                        </View>
                        <Text width='100%' marginTop='size-100' marginBottom='size-500'>
                            <h1 className="spectrum-Heading spectrum-Heading--sizeXXXL spectrum-Heading--serif">We're here to help</h1>
                        </Text>
                        <Text marginTop='size-100' marginBottom='size-500'>
                            <p class="spectrum-Body spectrum-Body--sizeL">The content on this website focuses on helping staff and faculty embed these applications in their curriculum and work. Students can find this content relevant to their studies as well.</p>
                        </Text>
                        <View flex>
                            <Divider size="S" marginY="size-200" />
                            <Footer>Dr. Martin Luther King, Jr. Library</Footer>
                        </View>
                    </Flex>
                </View>
                <View gridArea='table-of-contents' position='fixed' top="size-1200" right="size-0" backgroundColor='gray-50' borderWidth='thin' borderStartColor='gray-200' borderEndColor='gray-50' borderTopColor='gray-50' borderBottomColor='gray-50'>
                    <Theme>
                        <SideNav variant="multilevel">
                            <SideNavItem value='Introduction' label="Introduction"></SideNavItem>
                            <SideNavItem value='Students' label="Students"></SideNavItem>
                            <SideNavItem value='Faculty' label="Faculty"></SideNavItem>
                            <SideNavItem value='Staff' label="Staff"></SideNavItem>
                            <SideNavItem value='Accessing Adobe apps' label="Accessing Adobe apps"></SideNavItem>
                            <SideNavItem value='Campus involvement' label="Campus involvement"></SideNavItem>
                            <SideNavItem value='Register for upcoming workshops' label="Register for upcoming workshops"></SideNavItem>
                        </SideNav>
                    </Theme>
                </View>
            </Grid>
        </>
    );
}

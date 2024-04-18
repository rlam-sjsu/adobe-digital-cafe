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

export function Register() {
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
                            <h1 className="spectrum-Heading spectrum-Heading--sizeXXXL spectrum-Heading--serif">Register for workshops</h1>
                        </Text>
                        <Text marginTop='size-100' marginBottom='size-500'>
                            <p class="spectrum-Body spectrum-Body--sizeL">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                        </Text>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/adobe_express.jpg" />
                                <Heading>Creating webpages in Adobe Express</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                    <Text>Learn about the professional and personal templates and how to create your own designs on the site.</Text>
                                    <Text>Date: September 20, 2023</Text>
                                    <Text>Time: 11:00 a.m. – 12:30 p.m</Text>
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="https://events.sjsu.edu/event/create_webpages_in_adobe_express" target="_blank">Register here</RouterLink>
                                        </Link>
                                    </Flex>
                                </Content>
                            </Card>
                        </View>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/adobe_acrobat_pro.jpg" />
                                <Heading>Introduction to Adobe Acrobat Pro</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                    <Text>Learn how to build fill-in forms, distribute non-printing comments, modify text, password-protect files, and convert docs to PDFs from other programs.</Text>
                                    <Text>Date: October 4, 2023</Text>
                                    <Text>Time: 11:00 a.m. – 12:30 p.m</Text>
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="https://events.sjsu.edu/event/getting_started_with_acrobat_pro" target="_blank">Register here</RouterLink>
                                        </Link>
                                    </Flex>
                                </Content>
                            </Card>
                        </View>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/adobe_photoshop.jpg" />
                                <Heading>Creating a simple flyer in Adobe Photoshop</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                    <Text>The workshop will cover the fundamentals of Photoshop's user interface, including its tools, panels, and layers.</Text>
                                    <Text>Date: October 25, 2023</Text>
                                    <Text>Time: 11:00 a.m. – 12:30 p.m</Text>
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="https://events.sjsu.edu/event/intro_to_adobe_photoshop_5054" target="_blank">Register here</RouterLink>
                                        </Link>
                                    </Flex>
                                </Content>
                            </Card>
                        </View>
                        <View>
                            <Card>
                                <Image src="./adobe-digital-cafe/images/adobe_illustrator.jpg" />
                                <Heading>Creating vector graphic Adobe Illustrator</Heading>
                                <Text slot="detail"></Text>
                                <Content>
                                    <Flex direction="column">
                                    <Text>In this workshop you will learn how to work with graphic design, page layouts, typography, sharp-edged vector technical artwork, and flow charts.</Text>
                                    <Text>Date: November 15, 2023</Text>
                                    <Text>Time: 11:00 a.m. – 12:30 p.m</Text>
                                        <Divider size="S" marginY="size-200" />
                                        <Link isQuiet>
                                            <RouterLink to="https://events.sjsu.edu/event/creating_vector_artwork_in_adobe_illustrator" target="_blank">Register here</RouterLink>
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
                {/* <View gridArea='table-of-contents' position='fixed' top="size-1200" right="size-0" backgroundColor='gray-50' borderWidth='thin' borderStartColor='gray-200' borderEndColor='gray-50' borderTopColor='gray-50' borderBottomColor='gray-50'>
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
                </View> */}
            </Grid>
        </>
    );
}

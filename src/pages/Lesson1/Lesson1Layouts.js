import { Link, Outlet } from "react-router-dom";
import { Grid, View } from '@adobe/react-spectrum'
import {
    Sidenav,
    SidenavHeading,
    SidenavItem
} from '@spectrum-web-components/sidenav';
import { ListBox, Item, Section } from '@adobe/react-spectrum'
import '@spectrum-web-components/sidenav/sp-sidenav.js';
import '@spectrum-web-components/sidenav/sp-sidenav-heading.js';
import '@spectrum-web-components/sidenav/sp-sidenav-item.js';

export function Lesson1Layouts() {
    return (
        <>
            <Grid
                areas={[
                    'header  content',
                    'sidebar content',
                    'footer  footer'
                ]}
                columns={['1fr', '3fr']}
                rows={['size-1000', 'auto', 'size-1000']}
                gap="size-100">
                <View backgroundColor="" gridArea="header">
                    <h2>Lesson 1</h2>
                </View>
                <View backgroundColor="" gridArea="sidebar">
                    {/* <div>
                        <Link to="/lesson-plans/Lesson1/Section1" className={"padding"}>Section 1</Link>
                        <br />
                        <br />
                        <Link to="/lesson-plans/Lesson1/Section2" className={"padding"}>Section 2</Link>
                        <br />
                        <br />
                        <Link to="/lesson-plans/Lesson1/Section3" className={"padding"}>Section 3</Link>
                        <br />
                        <br />
                        <Link to="/lesson-plans/Lesson1/Section4" className={"padding"}>Section 4</Link>
                    </div>
                    <nav>
                        <ul class="spectrum-SideNav">
                            <li class="spectrum-SideNav-item">
                                <a href="#/lesson-plans/Lesson1/Section1" class="spectrum-SideNav-itemLink" aria-current="page">
                                    <span class="spectrum-SideNav-link-text">Section Title 1</span>
                                </a>
                            </li>
                            <li class="spectrum-SideNav-item">
                                <a href="#/lesson-plans/Lesson1/Section2" class="spectrum-SideNav-itemLink">
                                    <span class="spectrum-SideNav-link-text">Section Title 2</span>
                                </a>
                            </li>
                            <li class="spectrum-SideNav-item">
                                <a href="#/lesson-plans/Lesson1/Section3" class="spectrum-SideNav-itemLink">
                                    <span class="spectrum-SideNav-link-text">Section Title 3</span>
                                </a>
                            </li>
                            <li class="spectrum-SideNav-item">
                                <a href="#/lesson-plans/Lesson1/Section4" class="spectrum-SideNav-itemLink">
                                    <span class="spectrum-SideNav-link-text">Section Title 4</span>
                                </a>
                            </li>
                        </ul>
                    </nav> */}
                    <sp-sidenav defaultValue="Docs">
                        <sp-sidenav-item
                            value="Getting started"
                            href="#/lesson-plans/Lesson1"
                            label="Getting started"
                        ></sp-sidenav-item>
                        <sp-sidenav-item
                            value="Docs"
                            href="#/lesson-plans/Lesson1/Section1"
                            label="Docs"
                        ></sp-sidenav-item>
                        <sp-sidenav-item
                            value="Guides"
                            href="#/lesson-plans/Lesson1/Section2"
                            label="Guides"
                        ></sp-sidenav-item>
                        <sp-sidenav-item
                            value="Community"
                            href="#/lesson-plans/Lesson1/Section3"
                            label="Community"
                        ></sp-sidenav-item>
                        <sp-sidenav-item
                            value="Storybook"
                            href="#/lesson-plans/Lesson1/Section4"
                            label="Storybook"
                        ></sp-sidenav-item>
                    </sp-sidenav>
                </View>
                <View backgroundColor="" gridArea="content">
                    <Outlet />
                </View>
                <View backgroundColor="" gridArea="footer">
                    
                </View>
            </Grid>
        </>
    );
}
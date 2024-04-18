import { NavLink, Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import "./assets/css/styles.css"
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { LessonRoutes } from "./LessonRoutes";
import { Resources } from "./pages/Resources";
import { StudentShowcases } from "./pages/StudentShowcases";
import { Register } from "./pages/Register";
import "./assets/css/Navbar.css";
import { Button, Link, Provider, Text, ToggleButton, defaultTheme, Image, Flex } from "@adobe/react-spectrum";
import { Link as RouterLink } from 'react-router-dom';

import { Item, TabList, TabPanels, Tabs } from '@adobe/react-spectrum'
import { TopNav, TopNavItem } from '@swc-react/top-nav';

import { Grid, View } from '@adobe/react-spectrum'
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

import {SearchField} from '@adobe/react-spectrum'


function App() {
    const [cllickCollapse, setClickCollapse] = useState(false);
    let [isDarkTheme, setDarkTheme] = React.useState(false);

    return (
        <>
            <Provider theme={defaultTheme} colorScheme={isDarkTheme ? "dark" : "light"} breakpoints={{ tablet: 640, desktop: 1024 }}>
                <View backgroundColor='gray-50'>
                    <View position='sticky' top="size-0" zIndex='1' backgroundColor='gray-50' borderWidth='thin' borderColor='gray-200' padding='size-100'>
                        <Flex direction="row-reverse" gap='size-100'>
                            {/* <ToggleButton
                                isSelected={isDarkTheme}
                                onChange={setDarkTheme}
                                aria-label=""
                                marginBottom="size-200"
                                marginEnd="size-100"
                            >
                                Toggle Theme
                            </ToggleButton> */}
                            <Button
                                variant="accent"
                                elementType="a"
                                href="#/register"
                            >
                                Register for workshops
                            </Button>
                            <SearchField/>
                        </Flex>
                    </View>
                    <Grid areas={[
                        'sidenav body',
                        'sidenav body',
                        'sidenav body'
                    ]}
                        columns={['1fr', '5fr']}
                        rows={['size-500', 'auto']}
                    >
                        <View gridArea="sidenav" position='fixed' height='100%' top="size-0" zIndex='2' backgroundColor='gray-100' padding='size-400' borderWidth='thin' borderColor='gray-200' overflow={["auto"]}>
                            <Link>
                                <RouterLink to={"/"}>
                                    <Image src="./adobe-digital-cafe/images/adc-mlk-logo.png" width="single-line-width" />
                                </RouterLink>
                            </Link>
                            <View marginY={["size-400"]}>
                                <Theme>
                                    <SideNav variant="multilevel">
                                        <SideNavHeading label="INTRODUCTION">
                                            <SideNavItem value="What is Adobe Digital Café?" label="What is Adobe Digital Café?"></SideNavItem>
                                            <SideNavItem value="Meet your Adobe trainer" label="Meet your Adobe trainer"></SideNavItem>
                                            <SideNavItem value="Individual consultation" label="Individual consultation"></SideNavItem>
                                        </SideNavHeading>
                                        <SideNavHeading label="UPCOMING EVENTS">
                                            <SideNavItem value="Register for upcoming workshops" label="Register for upcoming workshops" href="#/register"></SideNavItem>
                                        </SideNavHeading>
                                        <SideNavHeading label="STUDENTS">
                                            <SideNavItem value="Adobe Student Ambassadors" label="Adobe Student Ambassadors"></SideNavItem>
                                            <SideNavItem value="Student showcases" label="Student showcases"></SideNavItem>
                                            <SideNavItem value="Student specific online tutorials" label="Student specific tutorials"></SideNavItem>
                                        </SideNavHeading>
                                        <SideNavHeading label="FACULTY">
                                            <SideNavItem value="Embeddable curriculum" label="Embeddable curriculum"></SideNavItem>
                                            <SideNavItem value="Digital literacy in the classroom" label="Digital literacy in the classroom"></SideNavItem>
                                            <SideNavItem value="Faculty specific online tutorials" label="Faculty specific tutorials"></SideNavItem>
                                        </SideNavHeading>
                                        <SideNavHeading label="STAFF">
                                            <SideNavItem value="Benefits of Adobe apps" label="Benefits of Adobe apps"></SideNavItem>
                                            <SideNavItem value="Staff specific online tutorials" label="Staff specific tutorials"></SideNavItem>
                                        </SideNavHeading>
                                        <SideNavHeading label="ACCESSING ADOBE APPS">
                                            <SideNavItem value="Accessing your Adobe license" label="Accessing your Adobe license" href="https://www.sjsu.edu/ecampus/software-tools/teaching-tools/video-creative/adobe/students.php" target="_blank"></SideNavItem>
                                        </SideNavHeading>
                                    </SideNav>
                                </Theme>
                            </View>
                        </View>
                        <View gridArea="body" width="100%" backgroundColor="gray-50">
                            <div className="main-container">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/lesson-plans/*" element={<LessonRoutes />} />
                                    <Route path="/resources" element={<Resources />} />
                                    <Route path="/student-showcases" element={<StudentShowcases />} />
                                    <Route path="/register" element={<Register />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </div>
                        </View>
                    </Grid>
                </View>
            </Provider>
            {/* <div className="navbar">
                <div className="navbar-container">
                    <div className="navbar-header">
                        <Link>
                            <RouterLink className="navbar-logo" to="/">
                                <img style={{ height: 50 }} src="./adobe-digital-cafe/images/adc-mlk-logo.png" alt="Adobe Digital Cafe logo" />
                            </RouterLink>
                        </Link>
                        <button type="button" className="navbar-toggle" onClick={() => { setClickCollapse(!cllickCollapse) }}>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className={cllickCollapse ? "navbar-collapse active" : "navbar-collapse"}>
                        <ul className="navbar-center">
                            <li>
                                <Link variant="secondary" isQuiet>
                                    <RouterLink to="/lesson-plans">Lesson plans</RouterLink>
                                </Link>
                            </li>
                            <li>
                                <Link variant="secondary" isQuiet>
                                    <RouterLink to="/resources">Resources</RouterLink>
                                </Link>
                            </li>
                            <li>
                                <Link variant="secondary" isQuiet>
                                    <RouterLink to="/student-showcases">Student showcases</RouterLink>
                                </Link>
                            </li>

                            <Button variant="accent" elementType="a" href="#/register">Register for workshops</Button>

                        </ul>
                    </div>
                </div>
            </div> */}
            {/* <div className="main-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lesson-plans/*" element={<LessonRoutes />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/student-showcases" element={<StudentShowcases />} />
                    <Route path="/register" element={<Reigster />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div> */}
        </>
    )
}

export default App
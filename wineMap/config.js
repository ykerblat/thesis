var config = {
    style: 'mapbox://styles/kerby418/cl1mm4ra5000514p82p2zivs5',
    accessToken: 'pk.eyJ1Ijoia2VyYnk0MTgiLCJhIjoiY2wxcDYyMXM4MDlzdTNscGV5M3Y2aGFtbyJ9.shtgetSJ_VYF-IaJ49AAiA',
    showMarkers: false,
    theme: 'dark',
    title: 'Ripe for Disruption',
    subtitle: 'Climate Change is shaping the future of the Wine Industry',
    byline: 'May 2022',
    footer: 'Data Visualization Thesis | Parsons School of Design | May 2022',
    chapters: [
        {
            id: 'CH1-1-Global',
            alignment: 'center',
            title: 'Today, wine is a significant part of our lifestyle.',
            // image: 'https://images.unsplash.com/photo-1592758091373-bcec0e646d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3474&q=80',
            description: 'The wine industry is thriving and we have never consumed so much wine previously.',
            location: {
                center: [17.96700, 28.25215],
                zoom: 1.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'wineRegions',
                    opacity: 0,
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'wineRegions',
                    opacity: 0.4
                }
            ]
        },
        {
            id: 'CH1-2-Global',
            alignment: 'center',
            title: 'Wine is one of the most sensitive agriculture crops to climate change.',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [17.96700, 28.25215],
                zoom: 1.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ]
        },
        
                {
            id: 'CH1-3-Global',
            alignment: 'center',
            title: 'Where is wine likely to grow in the future?',
            // image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [17.96700, 28.25215],
                zoom: 1.73,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ]
        },
        
                {
            id: 'transitionA',
            alignment: 'center',
            title: 'TRANSITION A - Where is wine likely to grow in the future?',
            // image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                // center: [17.96700, 28.25215],
                // zoom: 1.73,
                // pitch: 0.00,
                // bearing: 0.00
            },
            onChapterEnter: [
                {
                    // layer: 'whiteWine',
                    opacity: 0,
                    // layer: 'redWine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                                {
                    // layer: 'whiteWine',
                    opacity: 0,
                    // layer: 'redWine',
                    opacity: 0
                }
            ]
        },
        
        {
            id: '2-1-France',
            alignment: 'left',
            title: 'A close look at the wine industry in France',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [-1.44375, 46.95256],
                zoom: 5.46,
                pitch: 0.0,
                bearing: 0.0
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 1,
                    layer: 'redWine',
                    opacity: 1
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ]
        },
         {
            id: 'CH2-2-France',
            alignment: 'left',
            title: 'The Bordeaux wine region has some of the most expensive vineyard domains in the world',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [-0.57650, 44.91907],
                zoom: 10.46,
                pitch: 60.50,
                bearing: -33.60
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 1,
                    layer: 'redWine',
                    opacity: 1
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ]
        },
        {
            id: 'CH2-3-France',
            alignment: 'left',
            title: 'Devastating frost events in Bordeaux in 2017',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [-0.90165, 45.35693],
                zoom: 8.68,
                pitch: 59.5,
                bearing: 20.80
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ]
        },
        {
            id: 'transitionB',
            alignment: 'center',
            title: 'TRANSITION B - Shifting to California',
            // image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [-82.73387, 38.03087],
                zoom: 3.64,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    // layer: 'whiteWine',
                    opacity: 0,
                    // layer: 'redWine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                                {
                    // layer: 'whiteWine',
                    opacity: 0,
                    // layer: 'redWine',
                    opacity: 0
                }
            ]
        },
        {
            id: 'CH3-1-California',
            alignment: 'right',
            title: 'The economic contribution of the California wine industry',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [-82.73387, 38.03087],
                zoom: 3.64,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 1,
                    layer: 'redWine',
                    opacity: 1
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ]
        },
        {
            id: 'CH3-2-California',
            alignment: 'right',
            title: 'The Wine Industry in California continues to expand',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [-114.16436, 37.02186],
                zoom: 5.39,
                pitch: 48.00,
                bearing: -4.00
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 1,
                    layer: 'redWine',
                    opacity: 1
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ]
        },
        {
            id: 'CH3-3-California',
            alignment: 'right',
            title: 'Devastating wildfire events have impacted Vineyards in California several times in recent years',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.<iframe width="100%" height="500" frameborder="0" scrolling="no" src="charts/countourPlot.html"></iframe><br></br>',
            location: {
                center: [-117.78644, 37.52731],
                zoom: 5.82,
                pitch: 0.00,
                bearing: -2.40
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 1,
                    layer: 'redWine',
                    opacity: 1
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                    layer: 'redWine',
                    opacity: 0
                }
            ]
        },



    ]
};

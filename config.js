var config = {
    style: 'mapbox://styles/kerby418/cl1mm4ra5000514p82p2zivs5',
    // accessToken: 'pk.eyJ1Ijoia2VyYnk0MTgiLCJhIjoiY2wxcDYyMXM4MDlzdTNscGV5M3Y2aGFtbyJ9.shtgetSJ_VYF-IaJ49AAiA',
    // accessToken: 'pk.eyJ1Ijoia2VyYnk0MTgiLCJhIjoiY2wyZ2Fkdm53MDIxbDNicndjZ2IwcXljayJ9.gH0yT1kvfWcZ9kYy9uzE6Q',
   accessToken: 'pk.eyJ1Ijoia2VyYnk0MTgiLCJhIjoiY2t2bzdxNm11NnYyMTJwbXNhNmIwOGhyciJ9.mGHj7xqsXLDBmhU_WhRnSQ',
    showMarkers: false,
    theme: 'dark',
    title: 'Ripe for Disruption',
    subtitle: 'Climate Change is shaping the future of the Wine Industry',
    byline: 'May 2022',
    footer: 'Data Visualization Thesis | Parsons School of Design | May 2022',
    chapters: [
        {
            id: 'globalWine',
            alignment: 'center',
            title: 'Climate change is pushing the boundaries of the wine industry. (PENDING)',
            image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: 'Today, climate change is forcing winemakers to move further from the Equator. A recent study reckons that the northern frontier of vine cultivation in Europe could advance by 20-60km each decade between now and 2050. So how did we get it here?',
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
                    opacity: 0.0,
                }
            ]
        },
        
        {
            id: 'bubble',
            alignment: 'full',
            title: 'Where is the wine industry thriving? A quick look at export revenues ',
            // image: 'https://images.unsplash.com/photo-1592758091373-bcec0e646d4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3474&q=80',
            description: 'The wine industry is thriving and we have never consumed so much wine previously.Today, half of the world’s wine exports come from two countries, France and Italy and 3/4 wines come from Europe but the New World has also been growing very fast. <iframe width="100%" height="1000" frameborder="0" scrolling="no" src="charts/BubbleGrapes.html"></iframe>',
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
                    opacity: 0,
                }
            ]
        },
        {
            id: 'stream',
            alignment: 'center',
            title: 'The "New World" has challenged norms in the wine industry in the last 60 years.',
            image: '',
            description: 'During the final three decades of the 20th century, the internationalisation of wine production and consumption has identified.<iframe width="100%" height="1000" frameborder="0" scrolling="no" src="charts/indexStreamGraph.html"></iframe>',
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
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0,
                }
            ]
        },
        

        
                {
            id: 'shiftA',
            alignment: 'center',
            title: 'A glimpse into the "Old World"',
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
            id: '2-1',
            alignment: 'left',
            title: 'A close look at the wine industry in France',
            image: '',
            description: 'Over recent years, wines from the Bordeaux region were the most popular premium wine option among French consumers: an estimated 16.3 million people consumed AOC wines from the Bordeaux region. Côte du rhône wine had the second highest number of users, with 12.6 million users. <br></br> <iframe title=" France Wine Consumption in 2015-20 (by region) " aria-label="Split Bars" id="datawrapper-chart-Spd9I" src="https://datawrapper.dwcdn.net/Spd9I/5/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="410"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>',
            location: {
                center: [-0.57058, 45.88270],
                zoom: 6.00,
                pitch: 48.50,
                bearing: 1.60
            },
            onChapterEnter: [
                {
                    layer: 'France_AOC_highZoom',
                    opacity: 1,
                },
                {
                    layer: 'france-dept',
                    opacity: 0.5,
                }
            ],
            onChapterExit: [
                                {
                    layer: 'France_AOC_highZoom',
                    opacity: 0,
                },
                {
                    layer: 'france-dept',
                    opacity: 0,
                }
            ]
        },
         {
            id: 'CH2-2',
            alignment: 'left',
            title: 'The Bordeaux wine region has some of the most expensive vineyard domains in Europe',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                center: [-0.90492, 44.58133],
                zoom: 8.30,
                pitch: 55.00,
                bearing: -36.80
            },
            onChapterEnter: [
                {
                    layer: 'bordeaux-pricing',
                    opacity: 1,
                },
                                {
                    layer: 'redWine',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                                {
                    layer: 'redWine',
                    opacity: 0
                },
                {
                    layer: 'bordeaux-pricing',
                    opacity: 0,}
            ]
        },
        {
                    id: 'shiftA',
            alignment: 'center',
            title: 'TRANSITION - Shifting to California',
            // image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: '<br><iframe width="100%" height="1200" frameborder="0" scrolling="no" src="media/videoCA.html"></iframe>',
            // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.<br></br>',
            location: {
                center: [-0.94343, 44.99235],
                zoom: 9.56,
                pitch: 60.00,
                bearing: -26.22
            },
            onChapterEnter: [
                {
                    // layer: 'whiteWine',
                    opacity: 0,
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
            id: 'CH2-3',
            alignment: 'left',
            title: 'Devastating frost events in Bordeaux in 2021',
            image: '',
            description: 'Devastating frost has caused a 40% drop in the Bordeaux 2017 wine harvest and new estimates show the financial toll could reach 1.6 billion euros.The last two weeks in April brought extremely cold conditions of below 26°F and caused complete destruction at some wineries. <br> <iframe width="100%" height="500" frameborder="0" scrolling="no" src="charts/gaugeChart.html"></iframe>',
            location: {
                center: [-0.92355,45.16626],
                zoom: 8.50,
                pitch: 53.50,
                bearing: 22.40
            },
            onChapterEnter: [
                {
                    layer: 'Bordeaux_frost',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                                {
                    layer: 'Bordeaux_frost',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'US-wine',
            alignment: 'left',
            title: '',
            image: '',
            description: '<iframe title=" California keeps boosting the US wine industry " aria-label="Range Plot" id="datawrapper-chart-HammB" src="https://datawrapper.dwcdn.net/HammB/14/" scrolling="no" frameborder="0" style="border: none;" width="480" height="1093"></iframe>',
            location: {
                center: [-117.46270, 36.28082],
                zoom: 3.67,
                pitch: 0,
                bearing:0
            },
            onChapterEnter: [
                {
                    layer: 'wineRegions',
                    opacity: 0.5,
                },
                {
                    layer: 'USA_geojson',
                    opacity: 0.3,
                },
                {
                    layer: 'CA_boundary',
                    opacity: 0.7,
                }
            ],
            onChapterExit: [
                                {
                    layer: 'wineRegions',
                    opacity: 0,
                },
                {
                    layer: 'USA_geojson',
                    opacity: 0,
                },
                {
                    layer: 'CA_boundary',
                    opacity: 0.7,
                }
            ]
        },
        {
            id: 'CH3-2-California',
            alignment: 'center',
            title: 'The development of the wine industry in the US in last 20 years',
            image: '',
            description: 'The number of wineries in the United States grew four and a half times from 2001 to 2020.  <br></br><iframe title="Number of wineries in the U.S. 2019 (by State)" aria-label="Map" id="datawrapper-chart-fgS1S" src="https://datawrapper.dwcdn.net/fgS1S/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="546"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();',
            location: {
                center: [-82.73387, 38.03087],
                zoom: 3.64,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 0
                }
            ],
            onChapterExit: [
                                {
                    layer: 'whiteWine',
                    opacity: 0
                }
            ]
        },
                {
            id: 'shiftB',
            alignment: 'center',
            title: 'TRANSITION - Shifting to California',
            // image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: '<br><iframe width="100%" height="1200" frameborder="0" scrolling="no" src="media/videoCA.html"></iframe>',
            // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.<br></br>',
            location: {
                center: [-115.67532, 37.77697],
                zoom: 3.64,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    // layer: 'whiteWine',
                    // opacity: 0,
                    // layer: 'redWine',
                    // opacity: 0
                }
            ],
            onChapterExit: [
                                {
                    // layer: 'whiteWine',
                    // opacity: 0,
                    // layer: 'redWine',
                    // opacity: 0
                }
            ]
        },
        {
            id: 'CH3-3-California',
            alignment: 'right',
            title: 'Devastating wildfire events have impacted vineyards in California several times in recent years',
            image: '',
            description: 'In California in 2020, more than 4 million acres burned. In wine country, according to the Santa Rosa-based Press Democrat, in the past six years there were 23 major fires totaling nearly 1.5 million acres, “the equivalent of 130% of Sonoma County.”<br></br><iframe width="100%" height="500" frameborder="0" scrolling="no" src="charts/contourPlot.html"></iframe>',
            location: {
                center: [-115.67532, 37.77697],
                zoom: 5.83,
                pitch: 0.00,
                bearing: -2.40
            },
            onChapterEnter: [
                {
                    layer: 'CA_fire',
                    opacity: 0.7,
                    
                },
                                 {
                     layer: 'CA_vineyard',
                     opacity: 1,
                 },
                                                  {
                     layer: 'CA_boundary',
                     opacity: 0.4,
                 },
            ],
            onChapterExit: [
                                {
                    layer: 'CA_fire',
                    opacity: 0
                }
            ]
        },
        
                {
            id: 'ShiftC',
            alignment: 'full',
            title: 'Emerging practices in adaptive practices',
            image: 'https://www.frontiersin.org/files/Articles/607859/fpls-11-607859-HTML/image_m/fpls-11-607859-g003.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id. <br>',
            location: {
                center: [-115.67532, 37.77697],
                zoom: 5.83,
                pitch: 0.00,
                bearing: -2.40
            },
            onChapterEnter: [
                {
                    layer: '',
                    opacity: 0.8,
                    
                },
                                 {
                     layer: '',
                     opacity: 1,
                 },
                                                  {
                     layer: '',
                     opacity: 0.3,
                 },
            ],
            onChapterExit: [
                                {
                    layer: '',
                    opacity: 0
                }
            ]
        },



    ]
};
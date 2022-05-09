// const topTitleDiv = "<h4>Points Unknown | Tutorial 10 | Mapbox Storytelling</h4>";

const descriptionDiv =
'<iframe width="100%" height="1100" frameborder="0" scrolling="no" src="media/hero_video.html"></iframe>';

const titleDiv = "" ;

const bylineDiv = "MS Data Visualization Thesis | Parsons School of Design | May 2022";


var config = {
    style: 'mapbox://styles/kerby418/cl1mm4ra5000514p82p2zivs5',
    accessToken: 'pk.eyJ1Ijoia2VyYnk0MTgiLCJhIjoiY2t2bzdxNm11NnYyMTJwbXNhNmIwOGhyciJ9.mGHj7xqsXLDBmhU_WhRnSQ',
    showMarkers: false,
    markerColor: "#3FB1CE",
    theme: 'dark',
    topTitle:'',
    title: titleDiv,
    subtitle:'',
    byline: bylineDiv,
    description: descriptionDiv,
    footer: 'Data Visualization Thesis | Parsons School of Design | May 2022',
    chapters: [
        {
            id: 'globalWine',
            alignment: 'full',
            hidden:false,
            title: 'Climate change is pushing the boundaries of the wine industry. (PENDING)',
            image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: 'Today, climate change is forcing winemakers to move further from the Equator. A recent study reckons that the northern frontier of vine cultivation in Europe could advance by 20-60km each decade between now and 2050. So how did we get it here?',
            location: {
                center: [17.96700, 28.25215],
                zoom: 1.73,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
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
            image: '',
            description: 'The wine industry is thriving and we have never consumed so much wine from different places. Today, half of the world’s wine exports come from two countries, France and Italy (3/4 of wines come from Europe) but the New World has also been expanding very quickly. <iframe width="100%" height="1000" frameborder="0" scrolling="no" src="charts/BubbleGrapes.html"></iframe>',
            location: {
                center: [17.96700, 28.25215],
                zoom: 1.73,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
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
            title: '"New World" countries have been challenging norms in the wine industry',
            image: '',
            description: 'During the final three decades of the 20th century, the globalization of wine production and its consumption has intensified. Leading wine producers in the New World have multiplied by 4 their wine production during this time peiod. <iframe width="100%" height="1000" frameborder="0" scrolling="no" src="charts/indexStreamGraph.html"></iframe>',
            location: {
                center: [17.96700, 28.25215],
                zoom: 1.73,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: "flyTo",
            rotateAnimation: true,
            callback: "",
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
            id: 'shift',
            alignment: 'full',
            title: 'Chapter 1 | In Bordeaux, spring can  A glimpse into the "Old World"',
            image: 'https://images.unsplash.com/photo-1582675714475-cd5afa869ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.',
            location: {
                // center: [17.96700, 28.25215],
                // zoom: 1.73,
                // pitch: 0.00,
                // bearing: 0.00
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
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
            description: 'Over recent years, wines from the Bordeaux region were the most popular premium wine option among French consumers: an estimated 16.3 million people consumed AOC wines from the Bordeaux region. <br></br> <iframe title=" France Wine Consumption in 2015-20 (by region) " aria-label="Split Bars" id="datawrapper-chart-Spd9I" src="https://datawrapper.dwcdn.net/Spd9I/5/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="410"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>',
            location: {
                center: [-0.57058, 45.88270],
                zoom: 6.00,
                pitch: 48.50,
                bearing: 1.60
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id. <iframe width="80%" height="500" frameborder="0" scrolling="no" src="charts/glassHands.html"></iframe>',
            location: {
                center: [-0.90492, 44.58133],
                zoom: 8.30,
                pitch: 55.00,
                bearing: -36.80
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'bordeaux-pricing',
                    opacity: 1,
                },
                                {
                    layer: 'redWine',
                    opacity: 1,
                },
                {
                    layer: 'whiteWine',
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
                    opacity: 0,},
                {
                    layer: 'whiteWine',
                    opacity: 0,
                }

            ]
        },
        {
            id: 'CH2-3',
            alignment: 'left',
            title: 'Devastating frost events in Bordeaux in 2021',
            image: 'https://live.staticflickr.com/65535/33743215268_c33a98e1cb_b.jpg Scale model of the Eiffel tower in Parc Mini-France',
            description: 'Devastating frost has caused a 40% drop in the Bordeaux 2017 wine harvest and new estimates show the financial toll could reach 1.6 billion euros.The last two weeks in April brought extremely cold conditions of below 26°F and caused complete destruction at some wineries. <br><iframe width="100%" height="500" frameborder="0" scrolling="no" src="charts/gaugeChart.html"></iframe>',
            location: {
                center: [-0.92355,45.16626],
                zoom: 8.50,
                pitch: 53.50,
                bearing: 22.40
            },
            mapAnimation: "flyTo",
            rotateAnimation: true,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'Bordeaux_frost',
                    opacity: 1,
                },
                {
                    layer: 'redWine',
                    opacity: 1
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
            id: 'shiftA',
            alignment: 'full',
            title: 'Chapter 2: In California, dark clouds with ... notes of smoke and ashes?',
            image: 'https://images.unsplash.com/photo-1547084266-7501a964bf9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3542&q=80',
            description: '',
            // '<br><iframe width="100%" height="1200" frameborder="0" scrolling="no" src="media/videoCA.html"></iframe> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.<br></br>',
            location: {
                center: [-0.94343, 44.99235],
                zoom: 9.56,
                pitch: 60.00,
                bearing: -26.22
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    // layer: 'whiteWine',
                    // opacity: 0,
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
            id: 'US-wine',
            alignment: 'left',
            title: '',
            image: '',
            description: '<iframe title=" California keeps boosting the US wine industry " aria-label="Range Plot" id="datawrapper-chart-HammB" src="https://datawrapper.dwcdn.net/HammB/14/" scrolling="no" frameborder="0" style="border: none;" width="500" height="1200"></iframe>',
            location: {
                center: [-117.46270, 36.28082],
                zoom: 4,
                pitch: 0,
                bearing:0
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'USA_geojson',
                    opacity: 0.1,
                },
                {
                    layer: 'AVA-USA',
                    opacity: 0.7,
                },
               {
                layer: 'CA_boundary',
                opacity: 0.5,
            } 
            ],
            onChapterExit: [
                {
                    layer: 'USA_geojson',
                    opacity: 0,
                },
                {
                    layer: 'AVA-USA',
                    opacity: 0,
                },
                {
                    layer: 'CA_boundary',
                    opacity: 0.3,
                }
            ]
        },
        {
            id: 'CH3-2-California',
            alignment: 'full',
            title: 'The development of the wine industry in the US in last 20 years',
            image: '',
            description: 'The number of wineries in the United States grew four and a half times from 2001 to 2020.  <br></br><iframe title="Number of wineries in the U.S. 2019 (by State)" aria-label="Map" id="datawrapper-chart-fgS1S" src="https://datawrapper.dwcdn.net/fgS1S/3/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="546"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();',
            location: {
                center: [-82.73387, 38.03087],
                zoom: 3.64,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'whiteWine',
                    opacity: 1
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
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: 'CA_fire',
                    opacity: 0.5,
                    
                },
                                 {
                     layer: 'CA_vineyard',
                     opacity: 1,
                 },
                                                  {
                     layer: 'CA_boundary',
                     opacity: 0,
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
            id: 'shiftA',
            alignment: 'full',
            title: 'TRANSITION - Shifting to California',
            // image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: '',
            // '<br><iframe width="100%" height="1200" frameborder="0" scrolling="no" src="media/videoCA.html"></iframe>',
            // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque felis imperdiet proin fermentum leo. A scelerisque purus semper eget duis at. Id diam maecenas ultricies mi eget mauris pharetra et. Amet facilisis magna etiam tempor. Aliquet lectus proin nibh nisl. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Leo duis ut diam quam nulla. Tellus in hac habitasse platea dictumst vestibulum. Amet porttitor eget dolor morbi non arcu risus quis. Neque laoreet suspendisse interdum consectetur libero id.<br></br>',
            location: {
                center: [-0.94343, 44.99235],
                zoom: 9.56,
                pitch: 60.00,
                bearing: -26.22
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    // layer: 'whiteWine',
                    // opacity: 0,
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
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
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
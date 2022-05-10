// const topTitleDiv = "<h4>Points Unknown | Tutorial 10 | Mapbox Storytelling</h4>";

const descriptionDiv =
'<iframe width="100%" height="1080" frameborder="0" scrolling="no" src="hero_video.html"></iframe>';

const titleDiv = "" ;

const bylineDiv = "Data Visualization Final Project | Parsons School of Design | May 2022";


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
    footer: 'Designed and coded by Yann Kerblat as part of the MS Data Visualization Thesis | Parsons School of Design | NYC | May 2022',
    chapters: [
        {
            id: 'Ch1',
            alignment: 'center',
            hidden:false,
            title: 'Climate change is pushing the boundaries of the wine industry.',
            // image: 'https://www.liquor.com/thmb/EBxO0NeYyIK_IqEG-knYC-f-DTw=/720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/wine-map-climate-change_main_720x720-a9c90acf96464dd98effe0b1d78d2274.gif',
            description: 'Today, climate change is forcing winemakers to move further from the Equator. Recent studies show that the northern frontier of vine cultivation in Europe could advance by 20-60km each decade between now and 2050 while others predict the rise of whole new wine regions. So how did we get it here?',
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
                    opacity: 0.8,
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'wineRegions',
                    opacity: 0.5,
                }
            ]
        },
        
        {
            id: 'largeChart',
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
                    opacity: 0.5,
                    
                }
            ],
            onChapterExit: [
                {
                    layer: 'wineRegions',
                    opacity: 0.5,
                }
            ]
        },
        {
            id: 'largeChart',
            alignment: 'full',
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
                    layer: 'wineRegions',
                    opacity: 0.5,
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
            id: 'Shift',
            alignment: 'full',
            title: 'Bordeaux - 72hours of damaging frost, 1 entire year of harvest at risk',
            image: 'https://images.unsplash.com/photo-1582675714475-cd5afa869ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3431&q=80',
            description: '',
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
            id: '2-1',
            alignment: 'left',
            title: 'The wine industry in France today',
            image: '',
            description: '<br> Over recent years, wines from the Bordeaux region were the most popular premium wine option among French consumers: an estimated 16.3 million people consumed AOC wines from the Bordeaux region. <br></br> <iframe title=" France Wine Consumption in 2015-20 (by region) " aria-label="Split Bars" id="datawrapper-chart-Spd9I" src="https://datawrapper.dwcdn.net/Spd9I/5/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="410"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();</script>',
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
                    layer: 'france-dept-all',
                    opacity: 0.5,
                }
            ],
            onChapterExit: [
                                {
                    layer: 'France_AOC_highZoom',
                    opacity: 0,
                },
                {
                    layer: 'france-dept-all',
                    opacity: 0,
                }
            ]
        },
        {
            id: '',
            alignment: 'center',
            hidden:false,
            title: '',
            image: '',
            description: 'Yet a close zoom at recent weather events in the Bordeaux region shows signs of uncertainty...',
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
                    layer: 'france-gironde',
                    opacity: 0.5,
                }
            ],
            onChapterExit: [
                                {
                    layer: 'France_AOC_highZoom',
                    opacity: 0,
                },
                {
                    layer: 'france-gironde',
                    opacity: 0,
                }
            ]
        },
        //  {
        //     id: 'CH2-2',
        //     alignment: 'left',
        //     title: 'The Bordeaux wine region has some of the most expensive vineyard domains in Europe',
        //     image: '',
        //     description: '<iframe width="80%" height="500" frameborder="0" scrolling="no" src="charts/glassHands.html"></iframe>',
        //     location: {
        //         center: [-0.90492, 44.58133],
        //         zoom: 8.30,
        //         pitch: 55.00,
        //         bearing: -36.80
        //     },
        //     mapAnimation: "flyTo",
        //     rotateAnimation: false,
        //     callback: "",
        //     onChapterEnter: [
        //         {
        //             layer: 'bordeaux-pricing',
        //             opacity: 1,
        //         },
        //                         {
        //             layer: 'redWine',
        //             opacity: 1,
        //         },
        //         {
        //             layer: 'whiteWine',
        //             opacity: 1,
        //         }
        //     ],
        //     onChapterExit: [
        //                         {
        //             layer: 'redWine',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'bordeaux-pricing',
        //             opacity: 0,},
        //         {
        //             layer: 'whiteWine',
        //             opacity: 0,
        //         }

        //     ]
        // },
        {
            id: 'CH2-3',
            alignment: 'left',
            title: 'Unexpected temperature drops give cold sweats to winemakers',
            image: 'https://live.staticflickr.com/65535/33743215268_c33a98e1cb_b.jpg',
            description: 'Devastating frost caused a 40% drop in the Bordeaux 2021 wine harvest and new estimates show the financial toll could reach 1.6 billion euros. The last two weeks in April brought extremely cold conditions of below 26°F and caused complete destruction at some wineries. <br><iframe width="100%" height="500" frameborder="0" scrolling="no" src="charts/gaugeChart.html"></iframe>',
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
            title: 'California - Dark clouds with ... notes of smoke and ashes?',
            image: 'https://images.unsplash.com/photo-1547084266-7501a964bf9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3542&q=80',
            description: '',
            // '<br><iframe width="100%" height="1200" frameborder="0" scrolling="no" src="media/videoCA.html"></iframe>',
            location: {
                // center: [-0.94343, 44.99235],
                // zoom: 9.56,
                // pitch: 60.00,
                // bearing: -26.22
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
            title: 'The rapid growth of the US wine industry',
            image: '',
            description: 'The number of wineries in the United States grew four and a half times from 2001 to 2020.<br><br><iframe title=" California continues to boosting the US wine industry " aria-label="Range Plot" id="datawrapper-chart-HammB" src="https://datawrapper.dwcdn.net/HammB/14/" scrolling="yes" frameborder="0" style="border: none;" width="500" height="1200"></iframe>',
            location: {
                center: [-117.46270, 36.28082],
                zoom: 4,
                pitch: 0,
                bearing:0
            },
            mapAnimation: "jumpTo",
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
                    opacity: 0,
                }
            ]
        },
        // {

        //     id: 'USA-v2',
        //     alignment: 'right',
        //     title: 'The development of the wine industry in the US in last 20 years',
        //     image: '',
        //     description: 'The number of wineries in the United States grew four and a half times from 2001 to 2020.<br><iframe width="100%" height="500" frameborder="0" scrolling="no" src="charts/radialBarChart.html"></iframe>',
        //     location: {
        //         center: [-82.73387, 38.03087],
        //         zoom: 3.64,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     mapAnimation: "flyTo",
        //     rotateAnimation: false,
        //     callback: "",
        //     onChapterEnter: [
        //         {
        //             layer: 'whiteWine',
        //             opacity: 1,
        //         },
        //         {
        //             layer: 'redWine',
        //             opacity: 1,
        //         }
        //     ],
        //     onChapterExit: [
        //                         {
        //             layer: 'whiteWine',
        //             opacity: 0,
        //         },
        //         {
        //             layer: 'redWine',
        //             opacity: 0,
        //         }
        //     ]
        // },
        {
            id: 'CH3-3-California',
            alignment: 'right',
            title: 'Devastating wildfires have also impacted vineyards in California in recent years',
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
                    opacity: 0.7,
                    
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
                    opacity: 0,
                }
            ]
        },
        
        {
            id: 'Shift',
            alignment: 'full',
            title: 'The future of wine - future opportunities and different constraints',
            image: 'https://images.unsplash.com/photo-1545649329-221ac078a795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80',
            description: '',
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
            id: 'largeChart',
            alignment: 'fully',
            title: 'Emerging practices and other forward-looking trends',
            image: '',
            description: '<iframe width="100%" height="100%" frameborder="0" scrolling="yes" src="charts/RadialTree.html"></iframe>',
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
                     layer: 'wineRegions',
                     opacity: 0.7
                 },
            ],
            onChapterExit: [
                                {
                     layer: 'wineRegions',
                    opacity: 0.7
                }
            ]
        },
        {
            id: 'final part',
            alignment: 'fully', 
            hidden:true,
            title: 'Emerging practices and other forward-looking trends',
            image: '',
            description: '',
            location: {
                center: [28.08454, 15.01111],
                zoom: 1.89,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                                 {
                     layer: 'wineRegions',
                     opacity: 0.3,
                 },
            ],
            onChapterExit: [
                                {
                     layer: 'wineRegions',
                    opacity: 0.8,
                }
            ]
        }
    ]
};
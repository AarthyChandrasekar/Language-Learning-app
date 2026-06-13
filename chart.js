const ctx =
document.getElementById("progressChart");

new Chart(ctx,{

    type:"line",

    data:{

        labels:[
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],

        datasets:[{

            label:"XP Earned",

            data:[
                50,
                80,
                120,
                90,
                150,
                180,
                250
            ],

            borderColor:"#EC4899",

            backgroundColor:
            "rgba(236,72,153,0.25)",

            fill:true,

            tension:0.4,

            borderWidth:5,

            pointRadius:8,

            pointBackgroundColor:"#FACC15",

            pointBorderColor:"#fff",

            pointHoverRadius:12

        }]

    },

    options:{

        responsive:true,

        maintainAspectRatio:false,

        plugins:{

            legend:{

                labels:{

                    color:"#ffffff",

                    font:{
                        size:16
                    }
                }
            }
        },

        scales:{

            x:{

                ticks:{

                    color:"#ffffff",

                    font:{
                        size:14
                    }
                },

                grid:{

                    color:"rgba(255,255,255,.1)"
                }
            },

            y:{

                ticks:{

                    color:"#ffffff",

                    font:{
                        size:14
                    }
                },

                grid:{

                    color:"rgba(255,255,255,.1)"
                }
            }
        }
    }
});
const ctx2 =
document.getElementById("accuracyChart");

if(ctx2){

new Chart(ctx2,{

    type:"doughnut",

    data:{

        labels:[
            "Correct",
            "Incorrect"
        ],

        datasets:[{

            data:[
                85,
                15
            ],

            backgroundColor:[
                "#8B5CF6",
                "#EC4899"
            ]
        }]
    },

    options:{

        plugins:{

            legend:{

                labels:{
                    color:"#fff"
                }
            }
        }
    }
});

}
var APP_DATA = {
  "scenes": [
    {
      "id": "0-newamphi-60",
      "name": "Main entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 24.51,
          "pitch": -0.3,
          "rotation": 9.5,
          "target": "3-passerelle-23"
        },
        {
          "yaw": 23.7,
          "pitch": -0.05,
          "rotation": 0.3,
          "target": "1-devant-hangar"
        },
        {
          "yaw": 24.1,
          "pitch": -0.001,
          "rotation": 0,
          "target": "12-namphi16"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1,
          "pitch": -0.15,
          "title": "Centrale Marseille",
          "text": "If Centrale Marseille is a young school (which became 'Centrale' in 2006), it nevertheless inherits a history of more than a hundred years. As such, today it shares, with the other Écoles Centrales, a common DNA based on a pedagogical model, shared international relations and an identical conception of the engineer. &nbsp;<br>Centrale Marseille is a Public Establishment of a Scientific, Cultural and Professional Nature. It is located in Marseille, in the heart of the Château-Gombert Technopole where higher education institutions, research centres and companies meet in the 13th arrondissement, at the foot of the Étoile massif. The School is easily accessible by public transport (metro and bus) from the city centre of Marseille. Several student residences offer accommodation nearby. &nbsp;<br>The School is equipped with premises and facilities adapted to the challenges of teaching and research. Centrale Marseille is also strongly committed to the students' community life and hosts numerous events every year.&nbsp;<br>More information on the website: <a href=\"https://www.centrale-marseille.fr/\">  www.centrale-marseille.fr </a>."
        }
      ]
    },
    {
      "id": "1-devant-hangar",
      "name": "Secondary entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": -4.4,
          "pitch": 0.05,
          "rotation": -0.2,
          "target": "0-newamphi-60"
        },
        {
          "yaw": 0.15,
          "pitch": 0.2,
          "rotation": 0,
          "target": "8-muscu-v3"
        },
        {
          "yaw": 5.1,
          "pitch": 0.05,
          "rotation": 0.2,
          "target": "10-dojo"
        },
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "2-nouvelamphi-20",
      "name": "New Amphitheatre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 4.8,
          "pitch": 0.18,
          "rotation": 4.7,
          "target": "12-namphi16"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8,
          "pitch": 0.1,
          "title": "Presentation of the formation",
          "text": "The Ecole Centrale de Marseille trains generalist engineers at a high scientific level. Centrale Marseille has designed a unique curriculum that allows students to become the authors of their own career path. Numerous opportunities are offered to students. Indeed, the first three semesters are built around a unique rhythm, alternating between three academic weeks and one week of work-study :&nbsp;<br> - Train'ing (these are professionalization weeks)&nbsp;<br> - Company work-study programme&nbsp;<br> - Research work experience&nbsp;<br> - Alternating self-entrepreneurship&nbsp;<br> The following semesters allow you to personalise the training. Centrale Marseille offers a multitude of combinations and opportunities: theme-based semesters, free or academic break, projects, international mobility, in-depth study option, professional training, internships, etc. It is an opportunity to assert one's personality and project oneself into a professional future.&nbsp;<br> &nbsp;<br>More information on training and the many opportunities here : <a href=\"https://formation.centrale-marseille.fr/fr\">  https://formation.centrale-marseille.fr </a>"
        }
      ]
    },
    {
      "id": "3-passerelle-23",
      "name": "Passerelle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 14.5,
          "pitch": -0.2,
          "rotation": 11,
          "target": "0-newamphi-60"
        },
        {
          "yaw": 15.1,
          "pitch": 0.2,
          "rotation": 0,
          "target": "12-namphi16"
        },
        {
          "yaw": 24.5,
          "pitch": 0.05,
          "rotation": 0,
          "target": "5-rue_haute_antenne"
        }
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "4-salle-de-cours-0",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 3.497,
          "pitch": -0.0001,
          "rotation": 0.0001,
          "target": "5-rue_haute_antenne"
        }
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "5-rue_haute_antenne",
      "name": "Rue haute 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 3.497,
          "pitch": -0.1,
          "rotation": 0.0001,
          "target": "4-salle-de-cours-0"
        },
        {
          "yaw": 5.2,
          "pitch": -0.0001,
          "rotation": 0.5,
          "target": "3-passerelle-23"
        },
        {
          "yaw": 4.75,
          "pitch": 0,
          "rotation": 0,
          "target": "7-cdi-v3"
        },
        {
          "yaw": 8,
          "pitch": 0.1,
          "rotation": 0,
          "target": "9-rue-haute-pc-securite"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 8.5,
          "pitch": -0.2,
          "title": "The anTenne",
          "text": "The anTenne is a place where students can be listened to and supported: a social worker is on duty, and information and awareness raising on student distress and ill-being is provided. It is a neutral, warm and friendly place to exchange ideas in complete confidentiality.&nbsp;<br> Here are the services offered by l'anTenne:&nbsp;<br> - 0 800 602 033 free toll-free number: a listening and support service psychological counselling accessible remotely 24 hours a day, 7 days a week, allowing, among other things, face-to-face interviews with psychologists, supported by Centrale Marseille.&nbsp;<br> - Information and prevention times, led by professionals (legal, social, etc.) for pupils and staff.&nbsp;<br> - Access to documentation &nbsp;<br> A prevention group has also been set up. It is made up, on the one hand, of teaching and administrative staff who are in daily contact with pupils and, on the other hand, of pupil elected representatives of the school's bodies and associations. This group is regularly trained to detect, listen to and guide pupils." 
        }
      ]
    },
    {
      "id": "6-foys10-recupere-2",
      "name": "Foy's",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 9.63,
          "pitch": 0.1,
          "rotation": 0,
          "target": "9-rue-haute-pc-securite"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.62,
          "pitch": -0.15,
          "title": "Le Foy's",
          "text": "The Foy's is a cosy place where students can get together to play table football, billiards, board games... Students also meet there for many events organised by various associations." 
        }
      ]
    },
    {
      "id": "7-cdi-v3",
      "name": "School library",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 1.6,
          "pitch": 0.2,
          "rotation": 0,
          "target": "5-rue_haute_antenne"
        }
      ],
      "infoHotspots": [
      ]
    },
    {
      "id": "8-muscu-v3",
      "name": "Weights room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 1.6,
          "pitch": 0.1,
          "rotation": 0.2,
          "target": "1-devant-hangar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5,
          "pitch": -0.1,
          "title": "Weights room",
          "text": "The weights room has many facilities available for students of the Ecole Centrale de Marseille. Sports classes are also given in this room : &nbsp;<br> - Tabata &nbsp;<br> - Bodybuilding &nbsp;<br> - Step"
        }
      ]
    },
    {
      "id": "9-rue-haute-pc-securite",
      "name": "Rue haute 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 4.8,
          "pitch": 0.2,
          "rotation": 0,
          "target": "5-rue_haute_antenne"
        },
        {
          "yaw": 20,
          "pitch": 0.1,
          "rotation": 0.2,
          "target": "6-foys10-recupere-2"
        },
        {
          "yaw": -2.8,
          "pitch": 0.2,
          "rotation": 0,
          "target": "11-fablab"
        },
      ],
      "infoHotspots": [
        {
          "yaw": -0.2,
          "pitch": -0.1,
          "title": "Work spaces",
          "text": "This street, called the 'haute' street, is like the backbone of the establishment. Numerous outdoor work spaces were fitted out in 2020 at Centrale Marseille to enable students to have the best possible working conditions."
        }
      ]
    },
    {
      "id": "10-dojo",
      "name": "Dojo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 6.1,
          "pitch": 0.2,
          "rotation": 0,
          "target": "1-devant-hangar"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 7,
          "pitch": -0.1,
          "title": "The dojo",
          "text": "The Centrale Marseille dojo was inaugurated in 2014. Many sports are practiced : &nbsp;<br> - French boxing &nbsp;<br> - yoga &nbsp;<br> - cheerleading &nbsp;<br> - crossfit &nbsp;<br> - zumba &nbsp;<br> Other sports can be played outdoors, such as football, rugby, hiking, sailing and many others, or in a gym, like basketball, handball..."
        }
      ]
    },
    {
      "id": "11-fablab",
      "name": "FabLab",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": -0.2,
          "pitch": 0.2,
          "rotation": 0,
          "target": "9-rue-haute-pc-securite"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2,
          "pitch": -0.1,
          "title": "The Fablab",
          "text": "The FabLab is a space dedicated to creativity and DIY. Opened in 2012, it is managed by one of Centrale Marseille's student associations, but is open to all. Many high-tech machines are available, such as 3D printers and laser cutters allowing students to carry out numerous projects. &nbsp;<br> Every year Repair Cafés and training courses are held to learn how to use the machines and to give lots of advice."
        }
      ]
    },
    {
      "id": "12-namphi16",
      "name": "New Amphitheatre's hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 5000,
      "initialViewParameters": {
        "yaw": -0.22220960032851167,
        "pitch": -0.13085209605894121,
        "fov": 1.3, /*1.4 est la limite pour pouvoir dézoomer en position initiale dans ce cas*/
      },
      "linkHotspots": [
        {
          "yaw": 1.3,
          "pitch": 0.2,
          "rotation": 0,
          "target": "3-passerelle-23"
        },
        {
          "yaw": 4.45,
          "pitch": 0.3,
          "rotation": 0,
          "target": "0-newamphi-60"
        },
        {
          "yaw": 2.1,
          "pitch": 0.2,
          "rotation": 0,
          "target": "2-nouvelamphi-20"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2,
          "pitch": -0.1,
          "title": "New Amphiteatre",
          "text": "Centrale Marseille's new amphitheatre was inaugurated on the 16th October 2019. &nbsp;<br> It was created to welcome an entire class (300 students). &nbsp;<br> The building is highly connected. It allows live video recording of the audience and the auditorium, the recording of lessons and the practice of distance learning. Its ovoid shape provides optimum viewing comfort. "
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

const STORE = {
  questions: [//1
        {
        question: "Not adjusted for inflation, what is the highest-grossing film of all time in North America? 	",
        options: [
            "Star Wars: The Force Awakens", 
            "Avatar", 
            "Avengers: End Game", 
            "Titanic"
        ],
        answer: "Avengers: End Game",
        image: "https://lh3.googleusercontent.com/cXpr2IY0G7_FbfiskKnm48WszyWLEJGrW7h1L9LeRqIH3bvui5EDihSvnk4M55yprO5UcgWL7GbGpNU2-6EWQfxBEpdI057uy07JGjgAAgeBP56sgCGBDE7A8fhZTRDKz1FB1DW1Wc1m7pEFidG3S5pP4kCCzQTuEdwllZk6e4W9uWzgBGC0INTLHzr3IPH1UEdn0_F18VcdW0tASuJ5W3id0cR6HQYuGyMsTbrI8KbYlyjI1ytM-pqljgFxlhqZYpU2YQbxZBzKqHoJuBxjwFLrknfntzNFFwLdBCywkHRSKszAUbrB9f4v3_FcUhbjXiWoKGCWRQC4dFtaVG7o-FuuCuRQAlCIzaC2Dj4QlaTjntSgAQIsFwyN9CcL8Z2FsrzEExejn8clHdldzNkDayd2sA-FkHzsLDdA5C2lvGxfR-iCuN1O_cszyZMDaK_m-eIWExbVDFlKhDjkUtqG_GqXKWu6W7QDx30VNPXHyjQ76xUA7QaIrUM_7KSQU7k4UarqmwsjQMd_LCM33XngT7tc8zouPej5hPaeIWL5W1CXLnszv7AGGCa8_vCYm2v6IDZGv4Cfh2Fq57bc8j5aisE2ivLHweh1si-PDDI1pRM_xCiFGIwFiRaxLRZ9N1impYQ050UTinqrX-RRXNLkn6WQqaZzY7oJo4LFhqrk3wa0FHqGm8VEXD7u=w400-h300-no"
        },
        //2
        {
            question: "What Pixar film was the first computer-animated feature to be nominated for the Academy Award for Best Picture? ",
            options: [
            "Up",
            "Toy Story", 
            "Ratatouille",
            "Inside Out"
        ],
        answer: "Up",
        image: "https://imgur.com/9HmoHLg"
        },
        //3
        {
            question: "What is the highest-grossing romantic comedy of all time (not adjusted for inflation), earning $368.7 million at the box office on a budget of $5 million?",
            options: [
            "There’s Something About Mary", 
            "What Women Want", 
            "Hitch", 
            "My Big Fat Greek Wedding"
        ],
        answer: "My Big Fat Greek Wedding",
        image: "https://imgur.com/Ti2SL11"
        },
        //4
        {
        question: "In preparation for filming Lady Bird, director and writer Greta Gerwig took her cast and crew on a tour of what city, the film's main setting?", 
        options: [
            "Bakersfield",
            "Santa Cruz",
            "San Jose",
            "Sacramento"
            ],
        answer: "Sacramento",
        image: "https://imgur.com/cwIBLJ7"
        },
        //5
        {
        question: "In 2010, the Academy of Motion Picture Arts and Sciences expanded the number of Best Picture nominees from 5 to 10 due to what popular 2008 film's notable snub",
        options: [
            "The Dark Knight", 
            "Wall-E", 
            "Slumdog Millionaire", 
            "The Curious Case of Benjamin Button"
        ],
        answer: "The Dark Knight",
        image: "https://imgur.com/vchhb5m"
        },
        //6
        {
        question: "At the end of Love Actually, most main characters can be seen in what location, built in 1929 and located 14 miles (or 23 kilometres) west of Central London?",
        options: [
            "London Eye", 
            "Heathrow Airport", 
            "Tower Bridge", 
            "Big Ben"
        ],
        answer: "Heathrow Airport",
        image: "https://imgur.com/awY8xIL"
        },
        //7
        {
        question: 'In the science fiction thriller Ex Machina, a computer programmer wins a contest to spend a week in an isolated mansion conducting what kind of test? This test is used to assess a machine\'s ability to behave indistinguishably from a human.',
        options: [
            "FizzBuzz", 
            "ELIZA", 
            "BASIC", 
            "Turing"
        ],
        answer: "Turing",
        image: "https://imgur.com/KefPuHI"
        },
        //8
        {
        question: "Last revised on June 20, 2007 to include films released from 1997-2005, the American Film Institute's 100 Greatest American Films of All Time lists just one movie released in the 21st century. Name that film.", 
        options: [
            "Get Out", 
            "Inception", 
            "Lord of The Rings: The Fellowship of The Ring", 
            "Toy Story"
        ],
        answer: "Lord of The Rings: The Fellowship of The Ring",
        image: "https://imgur.com/Hz4pNTM"
        },
        //9
        {
        question: "Better known for their rival roles on Game of Thrones, Emilia Clarke and Lena Headey have both portrayed the same iconic character, though one was on TV and the other was in a feature film. Who is that Character?",
        options: [
            "Buffy Anne Summers", 
            "Princess Leia", 
            "Katniss Everdeen", 
            "Sarah Connor"
        ], 
        answer: "Sarah Connor",
        image: "https://imgur.com/ONu8jEP"
        },
        //10
        {
        question: "Getting ready to watch a movie with kids? Before you take them to a screening of Marley and Me, you should probably check in with what website to avoid any unpleasant surprises...or future therapy costs?",
        options: [
            "rottentomatoes.com", 
            "doesthedogdie.com", 
            "movieviolence.com", 
            "imdb.com"
        ],
        answer: "doesthedogdie.com",
        image: "https://imgur.com/AAW0AdE"
        }
    ],
    currentQuestion: 0,
  score: 0,
  image: 0
};
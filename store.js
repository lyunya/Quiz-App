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
        image: "https://lh3.googleusercontent.com/FspZXMyA_eeY_tSEWxhLGUGThdJ5xFNmRU3_IMmKvdpfFnzFBFt6aSB6S8mbnT09YO_kmQ0T5r1xjRKhWdyP3cZI1txBo-XOVW2K-8jSUjyuLM_NNJz9YqS6lMH4P8QIqF2nWNwNfS4GtGkgSm7xRRpjrr5S8-pRVwexe9BkoAi5bsp_AF511f7rncB45EYqJb22WVeC3WjVJVYbs2alr02aqxP4rRF8G2pNrXaReM9iPld6aIMF7RilFlG9ooERClEg4XnKrBpfw94ziSbsuVz-T1Blpg0wExWwgHEzVPze5py7tGYfZtpgquHD8U54DMMkibbINbTPkYivP-dJcyHu1U3spglpaqUQAkZnydClHAasN6gfSTPYOcTGiI0suIzxc5peNWlA-Cy9JT_s8XiFduOvKllPgsT_RnXOOqzRfowiL5o2uCuTRbdNbi7KF0wtaW9ytHDk3DANVnXOgfXyX92M1N4UaC1id1wLJ9Vv29saEZr7pXEh-L8asPyHQByuyADp1AiskO7YFSkaXovwpoUNAAAsfb5gnSNUosv3Au6J7I-mWR_ajbl1iq8mooyj3LmkpX42AGF_OV5bjRRku1bkPGYeVvjY0Qal5fqj9YvjRc6vxDkv-B5ejXQU0ZA1Ae9JQpIixgB7U-UJ6L3geQpLf7mGfrSFDlfVWMOgAOqW9XxqTNH-=w420-h300-no"
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
        image: "https://lh3.googleusercontent.com/e79xRkM9j-suwVzY6lDoPkdPu703tX-SScGgoZCPcep9akTbjD4FRTzqZBGbIvajCnjQ8MVus0sY1rjPX42Tw867jP6H5cs5BS2CaH71QBsWdxlduHU2OGOk4ci8JlSoApXBV9EL9nZGNNO51CVhergGjcUX2kUoXNSrPLjATM8RLWt9kfn1h14arxQwYhNMNJCEXTODn86h2wirRl1dHksYhOWjmoXHimHam5pfl-qHohtIM2Zl3C6IT4veBp-e84r19HNJzb-edOWxUSEAWrOlzgz0zuzDgJnXSEJ5U5spsXJuv3lhVnXjdvzBVj4BJlw1s2MdXxlNigewmHIxpCXtTye3LFeZTkI-xkTMTLVANGXOQz-ePt_fpdrC2WR6JzL9dcQcilvUOEtZh7IBBh7OJ5DOSkB88tahy3rxH-iumc5R26VqsZh94r--sgVAfyn87DIIH_UeNDJzbS7FSZ4AuxNlfHOu9abe4Q8C_BFoMG7x6e_gMTFv4EIgMr-hkKpA5IvJuICzaQqKizasEl2aC2uRHIj2cf-0dLW3FfhDGax7RsOLYMK5utggMRpdIrJKquZsyNV0sDAbsGlA-c4Fu72MA2qnUCNJKWB4adz8l1MboxhaDDIhbswSw9JLIYNt6-IHtd7XVXizptibWKD2ZLlX84EfrhRmuJgvXNArsUVRdXss7Z_m=w420-h300-no"
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
        image: "https://lh3.googleusercontent.com/P2k4nYmYzaoqllYIqwECyppGHh9p__RuXUultZ3KjDQMzXJhlfQJgAkZbFFpLEfAyA5tawkV5QmijrEULSPJ6jEJxNmYEitap7sPnk8GULSUVSgJp6o466gTIeoARBC3w_kuMzMVlNQ2K0EHWN2AuQxk5LzgChmjs3MXSuY6w1SlFwjxQ1Pa4yYEr2hJufyEOww2wOfh88RVJb9NEWU2DB218eGKzU758NOxbY8zwOy4ghuRO0UGR8Fp9t_g8wfQ--r42wvuywfmsi5pgNKZmwmzK2zMt9WkOcTR8_-Nwmj7eHHnpkusuNSw5fLr6YjA-ZwPvE-58wVWK0l-Ic4SZP8Msz42glEtAM6MxSj_hKMItNPmvimvHLliVdTFywhfCBcsyRJzpwAhtBLJxj2WDjENTbOEnvv1_fvaE9zo95XXMqskpnhZR6kNNZYecOtVXWLKQd_3EzqJ2VmV30bBb3mG3T_OsmAVn57kmxv6egr7Gs3KzFzo4PL_xgFm8A5JzVadkA66QpMWymFfpFtGBUq8gE-FrtN149ZBfoJobY97uknT9n011LTuax5C32JMGv8lMShNxQXpHVycUWHSm3j2oCP-Xh0YQB_4fU9VWZ1k4xHSw-Fn4T-0tsoQ3JajmW4SK-UZ0DxejwwJ0-B1pswYekTGIwapSanCV0u67v89WJpxYEsMxBIU=w400-h300-no"
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
        image: "https://lh3.googleusercontent.com/RyYdbvjASBeHaQrM0RB88gML8tr6vIaDoTQZFu7bZUhTu3ad8T0DTLIGOhKJ8TRLngohU1RX_1R24prc8p4rKou8CDBzPeli6RXC5s7nprMhlC6xdH5XVB57w2-w-58d-ojsR0-3AS3xu-sQ4QEqwfYbZ3YNeZHqNMQfClPl3M72qi2zve-rUy78xZcQV5DsVUroR7ZvQ1FZPO_gEGQRyR-DQQ-5KUh2aoT93ooKb_Hyl2eCgTM79BcluLm8rIKWwD1FmSPJuoF786eYqd6oX8L21eeQAA7q46J5lRM6y-wwb6MEikPFo0OQAKbTV-S5WiWgH0AOA-14rzdEVp1P__aiqJ0eIVezegzJK7aMYvtnjgEg2ydWLpbklOHpSIJhgNVlkYcRABnDNi_cr1x0KcbOgCbthxAn3Mv_hKozaMOHpvfsYS1O_2bFmZN_nOLvjznhs0kzsUESsCqtv2D9xFCP2BxOhxF_wp_BIygRdXL9aLOtNj739fvSKMnGZCY4acybpDuyrRrqzef2xT6qi8JIX6PYng9yrP1bT-LL-1LwaXbiuYAcsVZ4c5mu95C7VQfGiLi0AfQ3S0oeYl9zgfcELCpSw5yc0XuvdgIrfWwEuKUReC1wFHV3_Xlz9eRmnj0ika81L4eYvymn0GixcCo2X_Hpz2ltCPrDVvlaWyZXz5cvfVWaIY2l=w480-h300-no"
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
        image: "https://lh3.googleusercontent.com/57mMb5yKhiiniesW9qp-P516GKF_fJMPjrD-iBzIpGxYQPm4KhqNa9WiG7BxPN0K7ijECBVQ5DF01F5_Yn-8w6RyTFjYsKUyqtr_0hWjqhdkA87ln1c8RfgIpIy_4KRJ6it9OwViIFqaeRmaQYp9q7d8MpoUBn6Cp4HocX9jfZDfcQ3aQSXv9MzBvJbQubvD0l734fCz3OzMgWVlO3nhONJxBEufmya366tqRVRu5MUAeGL_cnNqZjCDW8kjOsrccgyC7bzEvU4ENQ7GMQzABoi5L1WCQhGuhJyzepjF-1A-wQvwFGCxljyLRrdaCI1x4naFRBBbOtCYfd7LRlM4hxqTxFgfcknXhVZ2AVoKBR9cZ2UXz4IS7HaGJtoMuhNRNJnjDkDXuqh3EuboYFEXH8N59Hg-G0HwYRsQy_UkjhkJRUFl8s8Pqv0OaMD7yqPHBIexdLzR6goG00VG7vPi-29Bzw-CUkug5dtB4NCrvATR5DddxL62HRvNtn7NZDKG4D9PU7ApksLZ9g2zKPsOYBsvl5fzIfhvrVvSfpLXISBP45oqYXQfYF_qkODHl1rdIHEkyvPKgo5H5eDFGmhHyxGnvzZXMnCTKjKI2Oot3a8McgsPwSA_JZ8uX5V_eRxQykmR5ZsUdhWsuto7y-X9odpAWos6l8WWZWz6WjyrDSLbvUdMur41NKpd=w400-h300-no"
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
        image: "https://lh3.googleusercontent.com/pycAWZvdSnkUygQ5uK8Jbzt1CJfxCi6Yutb7F55qL2Lo7TQBxZPboiz-cI_mtkDwM8wAHrDl-V8aKpsup7wHn4E6Bj0pj-8u-NS9X_S88ftJ1VpOfdg-3fH5mUPk0Nxn5OHdiTQ4wgXB3Dr1D7Vzd3Obw-AwyhWsEqhTo82sdNOQgtAdX8UEvvoXO7IV_uOpRqyNBP_Vugp_Yq-k_r9QaV8WhkzZiMKyqm30orzSR-FTpX6dYScyV4nxavLoRR0A2A6AUbaRiBEJ5b0EMoJFG_V2i1abY6Zw1dmgZyOyjqzrIzQjbx0u4WaWA-ZKEDNJe4gL8iAvM8hOmP67ky2-h3fF0msw03PQsxLRjlSH74toY13JwGk_08LUmj-4Ecia77XBG5DYflmcG4daoVYf7zMMoKyjQHxXei0tJhZfgwByMm4ic27rFmvypYGLxaHRcRW5Q2BpykO6w6POoexjuW8yOLtg0-mEIbTQpwXCXYJvEeDfXX_hkJmVZcpWcz9oYv_YOblMss-rvdhBhhIE8TS6D2X7ekVYZwBBg6ul1xcdtzs9N_YXrxJURNpw3ZQ33YdoIcp9pZ0d90u1SKgdfc5TQrs9K8yim_uDloo-6qsjpEk20M_W_8xV2gxNzzFzfHhK_SbNyi4ZWpxgUdToSIPzCPlPvgkpfvvLJe7uZi-BOFe87cDYKQDO=w420-h300-no"
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
        image: "https://lh3.googleusercontent.com/eyVJoIeKxCvVkkcN-neo5noZMHW87dw7X9B7E3FXnYnEMKUT5VE4AcQ3sZSfCl5uQe3Uyn46rNy0LYBh-RnGTAVBVL23Pe7K9LKHN1UFxQh9ebgpLAZzZBRS0GBZwkY_Y0AG6MlavQfuFbemIt0_zxpH9qEZKUWG6OLMDwRVZz7JDHiRPO_edE_jHv__pMLhGhkAc4Av9G2bSbNmeGLICgNYfH5krJJBPc9lGqD-suHL-8qjdE1RFeQR8LFXfwv6UprDCekUaoUwmqnE2ziI7u1agmq9aSV_Fo2abDpYKZcogGPkxquxYj1caoncns2X6OGrGG8jaHxMN_C-sCESXtGy24pR7zTWoMtjmOdiJ-otpg3PQw5vxdIhNfeGR4hWTsTaWadjAnmbgVtEIWViV_-2bqAOsuvj0NwjbbG8cantqj0a340Q4_0yWX4ZFQ4ukg_khAJkqipgMMtrTLXUndDjFyHZPID3CEEKFDPhZkGpjbQf-JuaOtSbkC0sTmCaE19k3pV_aBEAul91HTl9EO3rUOL6uvDGBDVwkEGsPJucs5RFc5kt5hRWRzYwTITgipPglsGNJXQkKpIlm-77l7g9QpQkhQG5l5sUjVTBcSYB9k2f-agNDxamzKby0_zSKfRdjdF64bU6JHkhBKNK71XZ1zjXaMsa-hR3tMKTzHizAa6ahAGy9sXg=w380-h420-no"
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
        image: "https://lh3.googleusercontent.com/qgj6P-a3o3fLxSbYzdnjjZ5NFmIIVFd7LFlJtOaYxYd0nmlxEm90G08cWGH3ikC--SbJOG3YpiA6KAg92T4FBeNp0nqRfc_nNRW8eYskXQmY06hqTnK7k3STNDv0tBbOEpRKHXPDbnu1Kg3AmM_otzCTI-h7XBqyog0RXQCvf69HMjBFbKhQbHOUahZS5t5YPxqx7keiX_7Wlh71iHi_fkkUaIkw4zS4YXZI4LOfV-REawqwgjyPLwzOXSpTkiMv9-Lz62Lrdu6hAMY7bJgAfkD59ObbcfPSufyVKRZ1erpBHIUiY6BXz79hs_Cqv95dkb45YqfhUd2VoOTkvyaoIhS5TKeztKHi8nzUnO2uu1-Mf57XKmhqEfcIp4vSlSAnLcQHza69U6IVnwptdSQi3x7ggMVGfMJWoQ79vH6S9y9ElJI3XbY79bntv927a1JU5LXTeLYFojg9VWcyU0lFImtiE8JK6u4Yb2cZsHpovrT1UyzcPg8WJn2LFYrflfyHDjKqrrnBbjgH8zqkfJFjns_axD3IKrj9IDVCJm06xOc4w68SOMcObzWoNeiLt8WT44TtBs1wo8hcqSFUlFV9w_KNb82xCCtwfp7LnxM31NkcPIoMOKh1sZS0_Fhb0b1hfMCXB5EQfBW-icUxuX0wZUq948lNUN1E6cXiEbxjuVVjBG4Posye88zA=w420-h300-no"
        }
    ],
    currentQuestion: 0,
  score: 0,
  image: 0
};
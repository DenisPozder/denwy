import witcherLogo from '../Assets/LogoImages/witcherLogo.png'
import witcher from '../Assets/MovieImages/witcherImg.jpg'

export const MovieData = [
    {
        id: 1,
        logoImage: witcherLogo,
        image: witcher,
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
        category: 'tv-show',
        genres: [
            {
                id: 1,
                title: "Tv Dramas"
            },
            {
                id: 2,
                title: "Tv Shows Based on Books"
            },
            {
                id: 3,
                title: "Tv Action & Adventure"
            },
        ],
        cast: [
            {
                id: 1,
                fullName: "Henry Cavill"
            },
            {
                id: 2,
                fullName: "Anya Chalotra"
            },
            {
                id: 3,
                fullName: "Freya Allan"
            },
        ],
        title: "The Witcher"
    },
]
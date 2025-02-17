// at least 12 objects in the array

class Manga {
    constructor() {
        this.data = [
            {
                id: 1,
                name: 'Bleach',
                author: 'Tite Kubo',
                demographic: 'shonen',
                genre: ['battle', 'protagonist-driven', 'themes-driven', 'supernatural'],
                volumeCount: 74,
                magazine: 'weekly shonen jump',
                yearStarted: new Date('August 7, 2001'),
                yearEnded: new Date('August 22, 2016'),
                isCompleted: true,
                myReview: 5
            },
            {
                id: 2,
                name: 'One Piece',
                author: 'Eiichiro Oda',
                demographic: 'shonen',
                genre: ['battle', 'cast-driven', 'character-driven', 'fantasy', 'adventure'],
                volumeCount: 110,
                magazine: 'weekly shonen jump',
                yearStarted: new Date('July 22, 1997'),
                yearEnded: new Date(),
                isCompleted: false,
                myReview: 2
            },
            {
                id: 3,
                name: 'Dr. Stone',
                author: 'Riichiro Inagaki',
                demographic: 'shonen',
                genre: ['non-battle', 'cast-driven', 'themes-driven', 'adventure', 'sci fi'],
                volumeCount: 27,
                magazine: 'weekly shonen jump',
                yearStarted: new Date('March 6, 2017'),
                yearEnded: new Date('March 7, 2022'),
                isCompleted: true,
                myReview: 3
            },
            {
                id: 4,
                name: 'Devilman',
                author: 'Go Nagai',
                demographic: 'shonen',
                genre: ['battle', 'protagonist-driven', 'themes-driven', 'supernatural', 'gritty'],
                volumeCount: 5,
                magazine: 'weekly shonen magazine',
                yearStarted: new Date('June 11, 1972'),
                yearEnded: new Date('June 24, 1973'),
                isCompleted: true,
                myReview: 3
            },
            {
                id: 5,
                name: 'Berserk',
                author: 'Kentaro Miura',
                demographic: 'seinen',
                genre: ['battle', 'protagonist-driven', 'dark fantasy', 'gritty'],
                volumeCount: 42,
                magazine: 'young animal',
                yearStarted: new Date('August 25, 1989'),
                yearEnded: new Date(),
                isCompleted: false,
                myReview: 2
            },
            {
                id: 6,
                name: 'Ajin',
                author: 'Gamon Sakurai',
                demographic: 'seinen',
                genre: ['battle', 'cast-driven', 'themes-driven', 'gritty', 'supernatural'],
                volumeCount: 17,
                magazine: 'good afternoon',
                yearStarted: new Date('July 6, 2012'),
                yearEnded: new Date('February 5, 2021'),
                isCompleted: true,
                myReview: 4
            },    {
                id: 7,
                name: 'Yugioh',
                author: 'Kazuki Takahashi',
                demographic: 'shonen',
                genre: ['non-battle', 'cast-driven', 'sci fi'],
                volumeCount: 38,
                magazine: 'weekly shonen jump',
                yearStarted: new Date('September 17, 1996'),
                yearEnded: new Date('March 8, 2004'),
                isCompleted: true,
                myReview: 5,
            },    {
                id: 8,
                name: 'Hellsing',
                author: 'Kouta Hirano',
                demographic: 'seinen',
                genre: ['battle', 'protagonist-driven', 'themes-driven', 'supernatural', 'gritty'],
                volumeCount: 10,
                magazine: 'young king ours',
                yearStarted: new Date('April 30, 1997'),
                yearEnded: new Date('September 30, 2008'),
                isCompleted: true,
                myReview: 4
            },    {
                id: 9,
                name: 'Attack on Titan',
                author: 'Hajime Isayama',
                demographic: 'shonen',
                genre: ['battle', 'protagonist-driven', 'themes-driven', 'dark fantasy', 'gritty'],
                volumeCount: 34,
                magazine: 'bessatsu shonen magazine',
                yearStarted: new Date('September 9, 2009'),
                yearEnded: new Date('April 9, 2021'),
                isCompleted: true,
                myReview: 5
            },    {
                id: 10,
                name: 'Tokyo Ghoul',
                author: 'Sui Ishida',
                demographic: 'seinen',
                genre: ['battle', 'protagonist-driven', 'supernatural', 'gritty'],
                volumeCount: 14,
                magazine: 'weekly young jump',
                yearStarted: new Date('September 8, 2011'),
                yearEnded: new Date('September 18, 2014'),
                isCompleted: true,
                myReview: 3
            },    {
                id: 11,
                name: 'Yu Yu Hakusho',
                author: 'Yoshihiro Togashi',
                demographic: 'shonen',
                genre: ['battle', 'cast-driven', 'supernatural'],
                volumeCount: 19,
                magazine: 'weekly shonen jump',
                yearStarted: new Date('December 3, 1990'),
                yearEnded: new Date('July 25, 1994'),
                isCompleted: true,
                myReview: 1
            },    {
                id: 12,
                name: 'Getter Robo',
                author: 'Go Nagai',
                demographic: 'shonen',
                genre: ['battle', 'cast-driven', 'mecha'],
                volumeCount: 6,
                magazine: 'weekly shonen sunday',
                yearStarted: new Date('April 7, 1974'),
                yearEnded: new Date('August 24, 1975'),
                isCompleted: true,
                myReview: 1
            },
            {
                id: 13,
                name: 'Trigun Maximum',
                author: 'Yasuhiro Nightow',
                demographic: 'seinen',
                genre: ['battle', 'protagonist-driven', 'themes-driven', 'fantasy'],
                volumeCount: 14,
                magazine: 'young king ours',
                yearStarted: new Date('October 1, 1997'),
                yearEnded: new Date('March 1, 2007'),
                isCompleted: true,
                myReview: 2
            },
            {
                id: 14,
                name: 'Blue Lock',
                author: 'Muneyuki Kaneshiro',
                demographic: 'shonen',
                genre: ['non-battle', 'cast-driven', 'sports'],
                volumeCount: 32,
                magazine: 'weekly shonen magazine',
                yearStarted: new Date('August 1, 2018'),
                yearEnded: new Date(),
                isCompleted: false,
                myReview: 4
            },
            {
                id: 15,
                name: 'Holyland',
                author: 'Kouji Mori',
                demographic: 'seinen',
                genre: ['battle', 'sports', 'protagonist-driven', 'themes-driven', 'gritty'],
                volumeCount: 18,
                magazine: 'young animal',
                yearStarted: new Date('October 12, 2000'),
                yearEnded: new Date('May 23, 2008'),
                isCompleted: true,
                myReview: 4
            },
            {
                id: 16,
                name: 'Gantz',
                author: 'Hiroya Oku',
                demographic: 'seinen',
                genre: ['battle', 'cast-driven', 'gritty'],
                volumeCount: 37,
                magazine: 'weekly young jump',
                yearStarted: new Date('June 29, 2000'),
                yearEnded: new Date('June 20, 2013'),
                isCompleted: true,
                myReview: 2
            },
            {
                id: 17,
                name: 'Kingdom',
                author: 'Yasuhisa Hara',
                demographic: 'seinen',
                genre: ['battle', 'cast-driven'],
                volumeCount: 74,
                magazine: 'weekly young jump',
                yearStarted: new Date('June 26, 2006'),
                yearEnded: new Date(),
                isCompleted: false,
                myReview: 2
            },
            {
                id: 18,
                name: 'kekkaishi',
                author: 'Yellow Tanabe',
                demographic: 'shonen',
                genre: ['battle', 'cast-driven', 'fantasy'],
                volumeCount: 35,
                magazine: 'weekly shonen sunday',
                yearStarted: new Date('October 22, 2003'),
                yearEnded: new Date('April 6, 2011'),
                isCompleted: true,
                myReview: 3
            }
        ]

        this.row = document.getElementById('row')
    }
    
    init() {
        // console.log('init')
        this.loadCards(this.data)
    }

    buildCard(obj) {

        const row = this.row
        const column = document.createElement('div')
        column.classList.add('col')

        const card = document.createElement('div')
        card.classList.add('card', 'h-100')
        card.setAttribute('id', `card-${obj.id}`)

        card.innerHTML = `
        <header class="card-header">
            <h2 class="card-heading text-capitalize">${obj.name}</h2>
        </header>
        <section class="card-body">
        <p class="card-text text-capitalize">${obj.author}</p>
        <p class="card-text">Volumes: ${obj.volumeCount}</p>
        <p class="card-text text-capitalize">Magazine: ${obj.magazine}</p>
        <p class="card-text text-capitalize">Demographic: ${obj.demographic}</p>
        <p class="card-text">
            <span>${obj.yearStarted.toDateString()}</span> -
            <span>${obj.yearEnded.toDateString()}</span>
        </p>
        </section>
        <footer class="card-footer">
            <p class="card-text text-capitalize">My Review: ${obj.myReview}/5</p>
        </footer>
        `

        column.appendChild(card)
        row.appendChild(column)
    }
    
    loadCards(arr) {
        this.row.innerHTML = ''
        arr.forEach(item => this.buildCard(item))
    }

    // confirmComplete() {
    //     let currentTime = new Date()
    //     if (this.data.yearEnded == currentTime) {
    //         this.data.forEach(item => item.completed = false)
    //     } else {
    //         this.data.forEach(item => item.completed = true)
    //     }
    //     console.log(this.data)
    //     copy = this.data.filter(item => item.completed == completed)
    // }

    filter(el) {
        const filter = el.getAttribute('data-sort')
        // console.log(filter)
        let copy 
        if (filter == 'genre') {
            const genre = document.getElementById('genreSelect').value
            // console.log(genre)
            copy = this.data.filter(item => item.genre.includes(genre))
            console.log(copy)
        } else if (filter == 'magazine') {
            const magazine = document.getElementById('magSelect').value
            copy = this.data.filter(item => item.magazine == magazine)
        } else if (filter == 'demographic') {
            const demographic = document.getElementById('demoSelect').value
            copy = this.data.filter(item => item.demographic == demographic)
        } else if (filter == 'myReview') {
            const myReview = document.getElementById('reviewSelect').value
            copy = this.data.filter(item => item.myReview == myReview)
        } else {
            console.log('error')
        }
        this.loadCards(copy)
    }
}

const manga = new Manga()

manga.init()

const genreBtn = document.getElementById('genreBtn')

genreBtn.addEventListener('click', (e) => {
    e.preventDefault()
    manga.filter(genreBtn)
})

const magBtn = document.getElementById('magBtn')

magBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    manga.filter(magBtn)
})

const demoBtn = document.getElementById('demoBtn')

demoBtn.addEventListener('click', (e)=> {
    e.preventDefault()
    manga.filter(demoBtn)
})

// const reviewBtn = document.getElementById('reviewBtn')

// reviewBtn.addEventListener('click', (e)=> {
//     e.preventDefault()
//     manga.filter(reviewBtn)
// })

// const completeBtn = document.getElementById('completeBtn')

// completeBtn.addEventListener('click', (e)=> {
//     e.preventDefault()
//     manga.filter(completeBtn)
// })
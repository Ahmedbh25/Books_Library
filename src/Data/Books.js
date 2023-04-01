const Books = [
    {
        id: 1,
        name : 'To Kill a Mockingbird',
        Author : 'Harper Lee',
        publisher: 'Hachette Book Group',
        date_publication: '1960',
        subject : 'The novel examines racism in the American South',
        description:'Lee\'s To Kill a Mockingbird was published in 1960 and became an immediate classic of literature. The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. Its iconic characters, most notably the sympathetic and just lawyer and father Atticus Finch, served as role models and changed perspectives in the United States at a time when tensions regarding race were high',
        number_pages : '250',
        price : "10 $",
        about_actor : 'believed to be one of the most influential authors to have ever existed, famously published only a single novel (up until its controversial sequel was published in 2015 just before her death).'
    },

    {
        id: 2,
        name : 'The Great Gatsby',
        Author : 'F. Scott Fitzgerald',
        publisher: 'Public Domain',
        date_publication: '1920',
        subject : 'adventure of Jay Gatsby',
        description:'The novel is told from the perspective of a young man named Nick Carraway who has recently moved to New York City and is befriended by his eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby.',
        number_pages : '350',
        price : "20 $",
        about_actor : 'is distinguished as one of the greatest texts for introducing students to the art of reading literature critically (which means you may have read it in school).'
    },

    {
        id: 3,
        name : 'One Hundred Years of Solitude',
        Author : 'Gabriel García Márquez',
        publisher: ' Lutfi Ozkok',
        date_publication: '1967',
        subject : 'the story of seven generations of the Buendía family',
        description:'The novel tells the story of seven generations of the Buendía family and follows the establishment of their town Macondo until its destruction along with the last of the family’s descendents. In fantastical form, the novel explores the genre of magic realism by emphasizing the extraordinary nature of commonplace things while mystical things are shown to be common.',
        number_pages : '156',
        price : "50 $",
        about_actor: 'The late Colombian author Gabriel García Márquez published his most famous work, One Hundred Years of Solitude, in 1967.'
    },

    {
        id: 4,
        name : 'A Passage to India',
        Author : 'E.M. Forster',
        publisher: 'Columbia Pictures',
        date_publication: '1924',
        subject : ' tensions between the Indian community and the colonial British community',
        description:'The book was published in 1924 and follows a Muslim Indian doctor named Aziz and his relationships with an English professor, Cyril Fielding, and a visiting English schoolteacher named Adela Quested. When Adela believes that Aziz has assaulted her while on a trip to the Marabar caves near the fictional city of Chandrapore, where the story is set, tensions between the Indian community and the colonial British community rise. The possibility of friendship and connection between English and Indian people, despite their cultural differences and imperial tensions, is explored in the conflict. The novel’s colorful descriptions of nature, the landscape of India, and the figurative power that they are given within the text solidifies it as a great work of fiction.',
        number_pages : '520',
        price : "25 $",
        about_actor:'E.M. Forster wrote his novel A Passage to India after multiple trips to the country throughout his early life.'
    },

    {
        id: 5,
        name : 'Invisible Man',
        Author : 'Ralph Ellison',
        publisher: 'Encyclopædia Britannica, Inc.',
        date_publication: '1953',
        subject : 'men who never believes he is “invisible” to others socially',
        description:'The narrator of the novel, a man who is never named but believes he is “invisible” to others socially, tells the story of his move from the South to college and then to New York City. In each location he faces extreme adversity and discrimination, falling into and out of work, relationships, and questionable social movements in a wayward and ethereal mindset. The novel is renowned for its surreal and experimental style of writing that explores the symbolism surrounding African American identity and culture. Invisible Man won the U.S. National Book Award for Fiction in 1953.',
        number_pages : '785',
        price : "30 $",
        about_actor : 'Often confused with H.G. Wells\'s science-fiction novella of nearly the same name (just subtract a “The”), Ralph Ellison\'s Invisible Man is a groundbreaking novel in the expression of identity for the African American male',
    },

    {
        id: 6,
        name : 'Don Quixote',
        Author : 'Miguel de Cervantes',
        publisher: 'Project Gutenberg',
        date_publication: '1720',
        subject : 'story of a man who takes the name “Don Quixote de la Mancha”',
        description:'The novel, which is very regularly regarded as one of the best literary works of all time, tells the story of a man who takes the name “Don Quixote de la Mancha” and sets off in a fit of obsession over romantic novels about chivalry to revive the custom and become a hero himself. The character of Don Quixote has become an idol and somewhat of an archetypal character, influencing many major works of art, music, and literature since the novel’s publication. The text has been so influential that a word, quixotic, based on the Don Quixote character, was created to describe someone who is, “foolishly impractical especially in the pursuit of ideals; especially: marked by rash lofty romantic ideas or extravagantly chivalrous action.”',
        number_pages : '',
        price : "40 $",
        about_actor : 'Miguel de Cervantes\'s Don Quixote, perhaps the most influential and well-known work of Spanish literature, was first published in full in 1615.'
    },

    {
        id: 7,
        name : 'Mrs. Dalloway',
        Author : 'Virginia Woolf',
        publisher: 'Library of Congress, Washington, D.C',
        date_publication: '1924',
        subject : 'one day in the life of a British socialite named Clarissa Dalloway',
        description:'Using a combination of a third-person narration and the thoughts of various characters, the novel uses a stream-of-consciousness style all the way through. The result of this style is a deeply personal and revealing look into the characters’ minds, with the novel relying heavily on character rather than plot to tell its story.',
        number_pages : '1520',
        price : "5 $",
        about_actor :'Possibly the most idiosyncratic novel of this list, Virginia Woolf’s Mrs. Dalloway describes exactly one day in the life of a British socialite named Clarissa Dalloway'
    },

    {
        id: 8,
        name : 'Beloved',
        Author : 'Toni Morrison',
        publisher: 'Library of Congress',
        date_publication: '1973',
        subject : 'The novel investigates the trauma of slavery even after freedom',
        description:'The novel investigates the trauma of slavery even after freedom has been gained, depicting Sethe’s guilt and emotional pain after having killed her own child, whom she named Beloved, to keep her from living life as a slave. A spectral figure appears in the lives of the characters and goes by the same name as the child, embodying the family’s anguish and hardship and making their feelings and past unavoidable. The novel was lauded for addressing the psychological effects of slavery and the importance of family and community in healing. Beloved was awarded the Pulitzer Prize for fiction in 1988.',
        number_pages : '241',
        price : "23 $",
        about_actor:'Toni Morrison’s 1987 spiritual and haunting novel Beloved tells the story of an escaped slave named Sethe who has fled to Cincinnati, Ohio, in the year 1873.'
    },

    {
        id: 9,
        name : 'Things Fall Apart',
        Author : 'Chinua Achebe',
        publisher: 'Library of Congress',
        date_publication: '201',
        subject : 'The novel follows an Igbo man named Okonkwo, describing his family, the village in Nigeria',
        description:' Chinua Achebe’s Things Fall Apart, published in 1958, is one such work of Nigerian literature that had to overcome the bias of some literary circles and one that has been able to gain recognition worldwide despite it. The novel follows an Igbo man named Okonkwo, describing his family, the village in Nigeria where he lives, and the effects of British colonialism on his native country. The novel is an example of African postcolonial literature, a genre that has grown in size and recognition since the mid-1900s as African people have been able to share their often unheard stories of imperialism from the perspective of the colonized. The novel is frequently assigned for reading in courses on world literature and African studies.',
        number_pages : '243',
        price : "35 $",
        about_actor: "The Western canon of “great literature” often focuses on writers who come from North America or Europe and often ignores accomplished writers and amazing works of literature from other parts of the world."
    },
]

export default Books;
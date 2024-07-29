
export enum CareerEntryType {
    EVENT = 'EVENT',
    CERTIFICATION = 'CERTIFICATION',
    POSITION = 'POSITION'
}

export type CareerEntry = {
    type: CareerEntryType;
    title: string;
    description?: string;
    location?: string;
    date: Date;
    company?: string;
    link?: string;
};

export const careerEntries: CareerEntry[] = [
    {
        type: CareerEntryType.EVENT,
        title: 'Started BSc Honours in Computing',
        description: `
        I started my degree in computing at ATU Sligo. I chose this course because I had always been interested in computers and technology.
        This course also offered a nice divide between software and networking to begin with, after which you could elect to focus on one or the other.
        My father works in networking which led to me go down the software route as I had already picked up some knowledge from him.
        I feel like the course laid a good foundation for me and I learned a lot of the basics of software development.
        More importantly, I met some of my best friends there who I learn new things from every day.
        `,
        date: new Date(2016, 8, 1)
    },
    {
        type: CareerEntryType.POSITION,
        title: 'Work Placement',
        description: 'My college course required a few weeks of work placement in our third year. I was chosen for a position at Frankli, a performance management software company. I worked on their front-end, building new features and fixing bugs. The first project I worked on was to implement a new sign-up worklflow. I learned a lot about browser compatibility from this project because we were still trying to support older versions of Internet Explorer.',
        company: 'Frankli',
        location: 'Sligo, Ireland',
        date: new Date(2019, 4, 1),
        link: 'https://getfrankli.com'
    },
    {
        type: CareerEntryType.POSITION,
        title: 'Software Engineer (Part-time)',
        description: 'After my work placement, I opted to stay on part-time while I finished my degree. I quickly became the point of contact for all things front-end. I was responsible for designing as well as maintaining and improving the front-end codebase, as well as fixing any bugs that came up. I also worked on a few new features, including a new dashboard for managers to track their team\'s performance.',
        company: 'Frankli',
        location: 'Sligo, Ireland',
        date: new Date(2019, 4, 1),
        link: 'https://getfrankli.com'
    },
    {
        type: CareerEntryType.CERTIFICATION,
        title: 'Graduated with First Class Honours',
        location: 'ATU Sligo',
        date: new Date(2020, 4, 1)
    },
    {
        type: CareerEntryType.POSITION,
        title: 'Software Engineer',
        company: 'Frankli',
        location: 'Sligo, Ireland',
        date: new Date(2020, 4, 1),
        description: 'I was offered a full-time position as a software engineer after I graduated. I resumed working on the front-end and design side of things but eventually learned how to work on the back-end as well. I was responsible for building new features, fixing bugs, and maintaining the codebase. I also worked on a few projects that involved integrating with third-party APIs',
        link: 'https://getfrankli.com'
    },
    {
        type: CareerEntryType.EVENT,
        title: 'Frankli secures seed funding',
        description: 'Frankli secured a round of seed funding which allowed us to hire a few more employees and expand our product offering. To help keep everything coordinated, I established a project management process utilizing the Atlassean suite of tools which helped us to better manage our projects and communicate with each other.',
        date: new Date(2021, 6, 1)
    },
    // TODO: There's a lot more I can mention here but I need to find some interesting statistics first
    {
        type: CareerEntryType.POSITION,
        title: 'Senior Software Engineer',
        company: 'Frankli',
        location: 'Remote',
        date: new Date(2024, 11, 5),
        description: 'I was promoted to Senior Software Engineer after a few years of working at Frankli. I was responsible for overseeing the entire tech side of things. I managed a single junior developer and was responsible for making sure they were on track with their work.',
        link: 'https://getfrankli.com'
    }
].sort((a, b) => b.date?.getTime() - a.date?.getTime());

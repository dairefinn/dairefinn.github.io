export enum CareerEntryType {
  EVENT = 'Event',
  CERTIFICATION = 'Certification',
  POSITION = 'Position',
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
        <br/><br/>
        My father works in networking so I decided to take the software route as I had already picked up plenty of knowledge from him regarding networking.
        <br/><br/>
        I feel like the course laid a good foundation for me and I learned a lot of the basics of software development.
        <br/><br/>
        More importantly, I met many new friends who I regularly discuss tech with and bounce ideas off of to this day.
        `,
    date: new Date(2016, 8, 1),
  },
  {
    type: CareerEntryType.POSITION,
    title: 'Work Placement',
    description: `
        My college course required a few weeks of work placement in our third year, during which I managed to secure a position as front-end developer at Frankli, a performance management software company.
        <br/><br/>
        The first project I worked on was to implement a new sign-up workflow. I learned a lot about browser compatibility from this project because we needed to support older versions of Internet Explorer.
        `,
    company: 'Frankli',
    location: 'Sligo, Ireland',
    date: new Date(2019, 4, 1),
    link: 'https://getfrankli.com',
  },
  {
    type: CareerEntryType.POSITION,
    title: 'Software Engineer (Part-time)',
    description: `
        I opted to stay on part-time while I finished my degree and I quickly became the point of contact for all things front-end.
        <br/><br/>
        I was responsible for designing (in Adobe XD and later Figma) as well as maintaining and improving the front-end codebase and of course fixing bugs.
        <br/><br/>
        I created a standardized design library which helped to speed up the design process and ensure consistency across multiple developers.
    `,
    company: 'Frankli',
    location: 'Remote',
    date: new Date(2019, 6, 1),
    link: 'https://getfrankli.com',
  },
  {
    type: CareerEntryType.CERTIFICATION,
    title: 'Graduated with First Class Honours',
    location: 'ATU Sligo',
    date: new Date(2020, 4, 1),
  },
  {
    type: CareerEntryType.POSITION,
    title: 'Software Engineer',
    company: 'Frankli',
    location: 'Sligo, Ireland',
    date: new Date(2020, 4, 1, 1),
    description: `
        I was offered a full-time position as a software engineer after I graduated.
        <br/><br/>
        I resumed working on the front-end and design side of things but eventually started taking on back-end work too.
        <br/><br/>
        At this point, I was building my own features start to finish and was responsible for the entire process of designing, building, testing, and deploying any features I was making.
        <br/><br/>
        I also worked on a few projects that involved integrating with third-party APIs (eg. Zendesk, Microsoft Teams, Merge.dev).
        `,
    link: 'https://getfrankli.com',
  },
  {
    type: CareerEntryType.EVENT,
    title: 'Expanding the team',
    description: `
        Due to the pandemic, Frankli saw a huge increase in demand for our platform as more and more companies were forced to go remote. This resulted in us having enough funding to expand the team and start working on some bigger projects.
        <br/><br/>
        We had grown to a team of 5 developers so to help keep everything coordinated I took the lead on utilizing the full Atlassian suite to manage our projects.
        `,
    date: new Date(2021, 6, 1),
  },
  {
    type: CareerEntryType.EVENT,
    title: 'Business as usual',
    description: `
        During this period, we developed many new features and integrations.
        <br/><br/>
        Our platform was growing rapidly and we were getting more and more clients.
        <br/><br/>
        The larger team size meant that we could focus on more varied projects and I got to work with some really interesting technologies. I learned a lot from my colleagues during this time and I feel like I grew a lot as a developer.
        <br/><br/>
        One project I enjoyed was overhauling our pipelines to be faster and more reliable. I achieved this by splitting them into more manageable steps, running steps in parallel, utilizing a cache and creating a custom Docker image for our build environment.
        `,
    date: new Date(2022, 1, 1),
  },
  {
    type: CareerEntryType.EVENT,
    title: 'Downsizing',
    description: `
        Unfortunately, the growth we had achieved during the pandemic was not sustained and we had to downsize the team drastically.
        This involved going remote first and downsizing the team to just one executive and a one developer.
        <br/><br/>
        I was offered and accepted the developer position, meaning I was now responsible for the entire codebase and was the point of contact for any technical queries.
        <br/><br/>
        I also took on a mentoring role for our graduate developer who had elected to stay on part-time.
        `,
    date: new Date(2023, 7, 10),
  },
  {
    type: CareerEntryType.POSITION,
    title: 'Senior Software Engineer',
    company: 'Frankli',
    location: 'Remote',
    date: new Date(2023, 11, 5),
    description: `
        I received a promotion to Senior Software Engineer but since I was already managing all the technical aspects of the company, my responsibilities didn't change much.
        <br/><br/>
        We managed to keep things running smoothly with just the three of us and we even managed to secure some new clients.
        `,
    link: 'https://getfrankli.com',
  },
  {
    type: CareerEntryType.EVENT,
    title: 'Present day',
    description: `
        I am still working at Frankli as a Senior Software Engineer.<br/>
        We are busy maintaining our existing platform and are always working on new features.
        `,
    date: new Date(),
  }
].sort((a, b) => b.date?.getTime() - a.date?.getTime());

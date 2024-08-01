import { Tag } from "./tag";

export enum TechnologyItemExperienceType {
    PERSONAL = 'Personal',
    PROFESSIONAL = 'Professional',
    EDUCATION = 'Education'
}

export interface TechnologyItemExperience {
    title: string;
    type: TechnologyItemExperienceType;
    description?: string;
}

export interface TechnologyItem {
    title: string;
    description?: string;
    experience: TechnologyItemExperience[];
    tags: Tag[];
}

export const technologyEntries: TechnologyItem[] = [
    {
        title: 'Angular',
        description: 'Angular is my go-to framework for front-end development. I have developed many projects in Angular and have a deep understanding of the framework.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'The front-end of the application was developed in Angular. I owned the front-end and am responsible for most of the visual features in the app.'
            },
            {
                title: 'This website',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'This website is built in Angular. I have also created a few other projects in Angular.'
            },
            {
                title: 'College',
                type: TechnologyItemExperienceType.EDUCATION,
                description: 'Angular was the first front-end framework we learned in college.'
            }
        ],
        tags: [Tag.FRAMEWORK, Tag.WEB_DEV, Tag.FRONT_END]
    },
    {
        title: 'TypeScript, Javascript',
        description: 'Angular uses TypeScript so my experience with it goes hand in hand with Angular.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'I modified the tsconfig to make it stricter and added linting rules to ensure we were writing consistent code. I also added some shorthands for directories to make imports easier.'
            },
            // {
            //     title: 'Personal Projects',
            //     type: TechnologyExperienceType.PERSONAL
            // },
            // {
            //     title: 'College',
            //     type: TechnologyExperienceType.EDUCATION
            // }
        ],
        tags: [Tag.LANGUAGE, Tag.WEB_DEV, Tag.FRONT_END]
    },
    {
        title: 'CSS, SCSS',
        description: 'I consider myself fairly adept at CSS - I can easily replicate designs. I have a deep understanding of browser compatibility and best practices.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'I was usually asked to step in and assist other developers with styling issues. I created many re-usable components and styles so we could have a consistent look and feel. I moved us over to SCSS to make our styles more maintainable and created a set of reusable variables and mixins that we could use for colours and breakpoints.'
            },
            {
                title: 'This website',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'This website uses SCSS. It should be fully responsive and work on all modern browsers.'
            },
            // {
            //     title: 'College',
            //     type: TechnologyExperienceType.EDUCATION
            // }
        ],
        tags: [Tag.FRONT_END, Tag.WEB_DEV, Tag.DESIGN, Tag.UI_UX]
    },
    {
        title: 'Java, Spring Boot',
        description: 'I have a deep understanding of Java and have used Spring Boot for a while now.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'The back-end of the application was developed in Java using Spring Boot and Maven. I have added plenty of features to the back-end and have a deep understanding of the architecture.'
            }
        ],
        tags: [Tag.BACK_END, Tag.LANGUAGE]
    },
    {
        title: 'MySQL, SQL Server',
        description: 'Most of my experience is with MySQL but I have some experience with SQL Server from college.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'The primary database ran on MySQL. I was responsible for upgrading it from 5.7 to 8.0. I wrote many migration scripts for features I developed. I also had to write queries to extract data if clients wanted reports as a CSV.'
            },
            {
                title: 'College',
                type: TechnologyItemExperienceType.EDUCATION,
                description: 'We learned SQL Server in college across multiple modules.'
            }
        ],
        tags: [Tag.DATABASE_MANAGEMENT]
    },
    {
        title: 'Git, Bitbucket',
        description: 'I use git all the time for version control. Bitbucket is mostly the same.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'We used Bitbucket for our source control. I created branches and pull requests regularly. I established a branching strategy for the team to follow so that we avoided conflicts and didn\'t accidentally deploy unfinished features.',
            },
            {
                title: 'Personal Projects',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'I use git for all my personal projects.'
            },
            // {
            //     title: 'College',
            //     type: TechnologyExperienceType.EDUCATION,
            //     description: 'We were shown the basics of git and encouraged to use it for our college projects.'
            // }
        ],
        tags: [Tag.SOURCE_CONTROL]
    },
    {
        title: 'Bitbucket Pipelines, GitHub Actions',
        description: 'I have primarily used Bitbucket Pipelines but have some experience with GitHub Actions.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'I rewrote the original pipelines to make them more reliable, efficient and easier to maintain. I split them into multiple stages so we could run tests in parallel. I also added caching to speed up the builds.'
            },
            {
                title: 'This website',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'I use GitHub Actions for this website.'
            }
        ],
        tags: [Tag.DEV_OPS]
    },
    {
        title: 'Docker',
        description: 'I understand the basics of Docker and have used it in a few projects.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'I created a docker image for the pipeline to use with all of our dependencies pre-installed to make it faster and easier to understand. I experimented with a docker-compose file which would run each part of the architecture locally but this was never fully adopted.'
            },
            {
                title: 'RadarrSync fork',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'One of my first projects was a fork of a docker image which was used to sync movie lists between two instances of the same service. My fork has almost 700k downloads as of writing.'
            }
        ],
        tags: [Tag.CONTAINERS]
    },
    {
        title: 'Shell Scripting and the Terminal',
        description: 'I usually prefer to use the terminal in most cases. I can write shell scripts to make more complex tasks easier.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'I created a set of scripts to help with common tasks like running the application locally and packaging it for deployment'
            },
            {
                title: 'Workspace finder',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'I created a command to easily open Visual Studio Code workspace files from the terminal so that I wouldn\'t have to install all of my extensions on the same profile.'
            },
            {
                title: 'College',
                type: TechnologyItemExperienceType.EDUCATION,
                description: 'We had a module on shell scripting where we learned the basics.'
            }
        ],
        tags: [Tag.SHELL]
    },
    {
        title: 'AWS, Azure, Google Cloud',
        description: 'I have primarily used AWS but have some experience with Azure and Google Cloud.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'We used AWS for our infrastructure. I regularly used Elastic Beanstalk, CloudFormation, RDS, S3, CloudWatch, IAM, Route53 and many other services. I was the point of contact for a Well-Architected Framework Review by CloudVisor and made many improvements to our infrastructure as a result. I also used Azure regularly when working on our SSO authentication, Entra integration and Teams app.'
            },
            {
                title: 'Game servers',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'I used to have an EC2 instance for running any game servers I wanted to host but have sinced moved to an Intel NUC in my house which can be reached by a TailScale proxy.'
            },
            {
                title: 'College',
                type: TechnologyItemExperienceType.EDUCATION,
                description: 'We received several AWS certifications. We also used Azure and Google Cloud for some group projects.'
            }
        ],
        tags: [Tag.DEV_OPS, Tag.CLOUD_INFRASTRUCTURE]
    },
    {
        title: 'CloudFlare, Route53, GoDaddy, Namecheap',
        description: 'I use CloudFlare for this website and have used a mix of the others fairly regularly.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'Our domains were split across GoDaddy and Namecheap. I transferred them all to CloudFlare to make it easier to manage them. When we changed domain as part of a rebrand, I ensured the records were set up correctly and that the old domain forwarded to the new one properly.'
            },
            {
                title: 'This website',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'I use CloudFlare for this website. I have added records to support email forwarding and created a subdomains which my friends can use to join any video game servers I host locally.'
            }
        ],
        tags: [Tag.CLOUD_INFRASTRUCTURE]
    },
    {
        title: 'Jira, GitHub Issues, Trello, Atlas',
        description: 'I have used Jira and Atlas the most and am most comfortable with them. I have also used GitHub Issues and Trello in the past.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.PROFESSIONAL,
                description: 'We used Jira to track our work. I added custom issue types and fields so we could easily track how important the tickets were and measure effort vs importance. I came up with a system for our board columns that made it easier to see what point a ticket was at. I also wrote some custom filters so that we could easily find tickets. I introduced Atlas so that other teams could understand what was being worked on more easily.'
            },
            {
                title: 'College',
                type: TechnologyItemExperienceType.EDUCATION,
                description: 'We used Trello and GitHub issues for some team projects.'
            }
        ],
        tags: [Tag.PROJECT_MANAGEMENT]
    },
    {
        title: 'Figma, Adobe XD',
        description: 'I started off using Adobe XD but have since moved to Figma because I think it\'s far superior.',
        experience: [
            {
                title: 'Frankli',
                type: TechnologyItemExperienceType.EDUCATION,
                description: 'I used XD for designs initially but later moved to Figma. I created a standard library of colours, components, and styles so that we could quickly mockup new features at a high fidelity.'
            },
            {
                title: 'College projects',
                type: TechnologyItemExperienceType.PERSONAL,
                description: 'I used XD for some college projects, mainly a large group project that we had to do in third year.'
            }
        ],
        tags: [Tag.DESIGN, Tag.UI_UX]
    }
]
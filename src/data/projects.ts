export enum ProjectTypeTag {
    WEB_DEV = 'Web development',
    GAME_DEV = 'Game development',
    SHELL = 'Shell scripting',
    FORK = 'Fork',
    DOCKER = 'Docker'
}

export type ProjectItem = {
    title: string;
    description: string;
    tags: ProjectTypeTag[];
    date?: Date;
    link?: string;
}

export const projects: ProjectItem[] = [
    {
        title: 'This website',
        description: 'You\'re lookin at it',
        tags: [ProjectTypeTag.WEB_DEV],
        link: 'https://github.com/dairefinn/dairefinn.github.io',
        date: new Date('2024-07-29')
    },
    {
        title: 'Godot game',
        description: 'I\'ve always wanted to dabble in game development as a hobby because the field interests me. I decided to try out Godot because it\'s free and open source. Currently, this is a 3D movement shooter style game but it could change. I\'m not sure if I\'ll ever finish this but I\'m having fun with it so far and I find it interesting how different game dev is to my primary field of web dev.',
        tags: [ProjectTypeTag.GAME_DEV],
        link: 'https://github.com/dairefinn/daires-game',
        date: new Date('2024-01-02')
    },
    {
        title: 'Discord bot',
        description: 'I wanted to see how the Discord API works and I had some time to kill while I was waiting for a game to download so I made this. When a user posts a certain command in chat, the bot will join the voice channel they are in and play a preset sound.',
        tags: [ProjectTypeTag.WEB_DEV],
        link: 'https://github.com/dairefinn/discord-bot',
        date: new Date('2023-10-26')
    },
    {
        title: 'RadarrSync',
        description: 'A modified fork of the RadarrSync project which syncs movies between two Radarr instances.',
        tags: [ProjectTypeTag.DOCKER, ProjectTypeTag.FORK],
        link: 'https://github.com/dairefinn/RadarrSync',
        date: new Date('2019-02-17')
    },
    {
        title: 'Geforce Now Searcher',
        description: 'I was playing games using NVidia\'s Geforce Now service for a while. You can link your steam account and play your games on a dedicated VM with a high-end GPU. The problem here was that not all of the games in my Steam library were available on the service and searching through the games that were available was a painful experience because you couldn\'t tell which ones you did and did not own. This utility would query data from their site and your library and compare the two.',
        tags: [ProjectTypeTag.WEB_DEV],
        link: 'https://github.com/dairefinn/geforce-now-searcher',
        date: new Date('2021-12-05')
    },
    {
        title: 'Workspace function',
        description: 'I was using Visual Studio Code a lot for multiple different projects and programming languages. I didn\'t want to have to install all the extensions for every language at once because it would be slow. To solve this, code offers workspaces but it can be annoying to transition between the two. As a result, I made this utility to easily open a saved workspace via the terminal.',
        tags: [ProjectTypeTag.SHELL],
        link: 'https://github.com/dairefinn/workspace-function',
        date: new Date('2020-05-19')
    },
    {
        title: 'Slope v2',
        description: 'One of my most played games is Garry\'s Mod. This is a sandbox game where people can create their own game modes and maps. I used to enjoy playing one called \'Slope\' with my friends but the server hosting it went down. I decided to attempt making my own version of it. I never quite finished it (and the sequel has been annouced so there\'s probably not much point) but I learned a lot about lua and the source engine in the process.',
        tags: [ProjectTypeTag.GAME_DEV],
        link: 'https://github.com/dairefinn/slope_v2',
        date: new Date('2020-09-30')
    },
].sort((a, b) => b.date?.getTime() - a.date?.getTime());

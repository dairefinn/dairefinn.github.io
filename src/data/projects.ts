import { Tag } from "./tag";

export type ProjectItem = {
    title: string;
    description: string;
    tags: Tag[];
    date?: Date;
    link?: string;
}

export const projects: ProjectItem[] = [
    {
        title: 'Batch script to toggle between Wired and Wireless connection',
        description: `
            My mobile hotspot is much faster than my wired connection but my wired connection is much more reliable so I usually use the hotspot to download large files and then switch back to the wired connection for everything else.
            <br/><br/>
            The problem is that I cannot rely solely on enabling wifi and disabling it as programs already using the wired adapter will continue using it.
            <br/><br/>
            This script is used to quickly toggle between the two connections, ensuring that all programs switch over to the new connection.
            `,
        tags: [Tag.SHELL, Tag.NETWORKING],
        link: 'https://github.com/dairefinn/windows-script-wlan-wifi-toggle',
        date: new Date('2024-08-08')
    },
    {
        title: 'This website',
        description: `
            This site is hosted through Github Pages and is built using Angular.
            <br/><br/>
            One of the challenges here was getting the compiled site to be served properly. GitHub pages requires the index.html file to be in the root of the repository but Angular compiles the site into a dist folder.
            When searching for how to do this using angular there are a bunch of articles telling you to use libraries which push the compiled site to a new gh-pages branch but that seemed conveluted to me because instead of having a CI/CD pipeline, you'd have to run a script locally every time you wanted to push new version of the site live.
            Turns out it's much easier using Github Actions to push only the files we want to push without having a weird branch setup.
            <br/><br/>
            The next issue I had was that the routing would break if you refreshed the page while viewing a subpage (eg. dairefinn.com/home). This was fixed by duplicating the index.html file during the build process and renaming it to 404.html. This way, the Angular router would still work when you refreshed the page.
            <br/><br/>
            Now the site works perfectly and I can push changes to it by simply pushing to the master branch. On top of that, the hosting is 100% free.
            `,
        tags: [Tag.WEB_DEV, Tag.DEV_OPS],
        link: 'https://github.com/dairefinn/dairefinn.github.io',
        date: new Date('2024-07-29')
    },
    {
        title: 'Reverse proxy over TailScale',
        description: `
            My home network has a double NAT and for some inexplicable reason, the gateway router crashes when I try to log in to it from my subnet. As a result, I cannot port forward without having to physically restart it.
            <br/><br/>
            As the person who hosts most if not all of our game servers, this was a problem. Sure - I could just have bought another big VPS in the cloud and hosted the servers there but I have the server hardware available so I wanted to use it.
            <br/><br/>
            I decided to buy a smaller VPS and use it as a reverse proxy. I could then use TailScale to connect it and the server PC and route the traffic through the VPS.
            This way, I could host the servers on my hardware and still have them accessible from the internet across only ports I have opened on the VPS and the TailScale ACLs.
            We haven't noticed any issues with latency or packet loss so far.
            <br/><br/>
            This costs me like 5 euro a month and works flawlessly - with the added benefit of letting my friends connect using a domain name instead of an IP address.
            `,
        tags: [Tag.NETWORKING],
        link: undefined,
        date: new Date('2024-07-29')
    },
    {
        title: 'Godot game',
        description: `
            I\'ve always wanted to dabble in game development as a hobby because the field interests me. I decided to try out Godot because it\'s free and open source.
            <br/><br/>
            Currently, this is a 3D movement shooter style game but it could change. I\'m not sure if I\'ll ever finish this but I\'m having fun with it so far and I find it interesting how different game dev is to my primary field of web dev.
            `,
        tags: [Tag.GAME_DEV],
        link: 'https://github.com/dairefinn/daires-game',
        date: new Date('2024-01-02')
    },
    {
        title: 'Discord bot',
        description: `
            I had some time to kill while I was waiting for a game to download so I decided to check out how the Discord API works.
            <br/><br/>
            When a user posts a certain command in chat, the bot will join the voice channel they are in and play a preset sound.
            `,
        tags: [Tag.WEB_DEV],
        link: 'https://github.com/dairefinn/discord-bot',
        date: new Date('2023-10-26')
    },
    {
        title: 'Geforce Now Searcher',
        description: `
            After a surgery, I was finding it difficult to sit at my computer so I resorted to streaming games to my TV via Nvidia's GeForce NOW service - which allows you to play games you own on a high-end VM with a dedicated GPU.
            <br/><br/>
            Unfortunately, their games list would show all available games on the service regardless of whether you owned them or not. This made it difficult to find games I could play without having to compare with my Steam library manually.
            <br/><br/>
            I decided to make a web app that would query both the GeForce NOW API and the Steam API to show only the games I owned that were available on the service. The Steam ID can be changed to work for other users too.
            <br/><br/>
            This was extremely useful at the time but I haven't used the service since I recovered and I'm sure that their filtering has improved since then.
            `,
        tags: [Tag.WEB_DEV],
        link: 'https://github.com/dairefinn/geforce-now-searcher',
        date: new Date('2021-12-05')
    },
    {
        title: 'Slope v2',
        description: `
            One of my most played games is Garry\'s Mod. This is a sandbox game where people can create their own game modes and maps.
            <br/><br/>
            I used to enjoy playing one called \'Slope\' with my friends but the server hosting it went down which led me to attempt making my own version of it.
            <br/><br/>
            The sequel to Garry\'s Mod is in development so there's probably not much point in continuing this project but it was fun learning about lua and the source engine works.
            <br/><br/>
            I have acquired access to the sequel\'s developer preview so I'd like to continue this project for that game instead.
            `,
        tags: [Tag.GAME_DEV],
        link: 'https://github.com/dairefinn/slope_v2',
        date: new Date('2020-09-30')
    },
    {
        title: 'Workspace function',
        description: `
            I often jump between multiple projects that use different programming languages. I wanted use an single editor for all of them just for simplicity. Visual Studio Code seemed like the best choice because it has a lot of extensions which add support for different languages.
            <br/><br/>
            The issue I had noticed was that the editor would slow down if I had too many extensions installed. Visual Studio Code offers workspaces which can be used to load only the extensions you need for a specific project but it can be annoying to transition between the two.
            <br/><br/>
            As a result, I made this utility to easily open a saved workspace via the terminal. It's a simple bash script that opens the workspace file based on the name you give it.
            <br/><br/>
            I use this almost every day and it has saved me a lot of time. As an added bonus, I have all my workspaces saved in a git repository so I can easily add them to a new machine.
            `,
        tags: [Tag.SHELL],
        link: 'https://github.com/dairefinn/workspace-function',
        date: new Date('2020-05-19')
    },
    {
        title: 'RadarrSync',
        description: `
            RadarrSync is a utility that syncs your Radarr library with another instance of Radarr. This is useful if you have two instances of Radarr running on different servers and you want to keep the libraries in sync.
            <br/><br/>
            Someone I know was having trouble getting the original RadarrSync project to work in docker so I decided to fork it and make some changes to get it working for them.
            <br/><br/>
            My version is available publicly on docker hub and has almost 700k downloads as of writing.
            `,
        tags: [Tag.CONTAINERS, Tag.SOURCE_CONTROL],
        link: 'https://github.com/dairefinn/RadarrSync',
        date: new Date('2019-02-17')
    },
].sort((a, b) => b.date?.getTime() - a.date?.getTime());

const ideologies = [
    {
        name: "Effective Accelerationism",
        coords: { x: 0.3, y: 0.9, z: 0.6 }, // Normalized e/acc
        description: "Effective Accelerationism emphasizing technological progress, market competition, and individual agency as drivers of civilization advancement. Opposes AI safety restrictions and regulatory slowdowns in favor of rapid iteration and evolution. Representative figures: Beff Jezos (Guillaume Verdon), Marc Andreessen, Garry Tan, e/acc movement.",
        shortLabel: "e/acc"
    },
    {
        name: "Crypto-Anarchism",
        coords: { x: -0.9, y: 0.9, z: 0.9 }, // Normalized crypto-anarchism
        description: "Radical individual sovereignty through cryptographic tools and decentralized technologies. Seeks to render state power obsolete via encryption, cryptocurrency, and peer-to-peer networks. Representative figures: Cypherpunks (Tim May, Hal Finney), Julian Assange, Ross Ulbricht.",
        shortLabel: "Crypto-\nAnarchism"
    },
    {
        name: "Decentralized Accelerationism",
        coords: { x: -0.6, y: 0.9, z: -0.3 }, // Keeping current coords as reasonable
        description: "Decentralized Accelerationism emphasizing the development of decentralized technologies, meme culture, and digital abundance while maintaining collective solidarity. Rejects both traditional state socialism and pure market libertarianism in favor of technologically-enabled mutual aid. Representative figure: Vitalik Buterin.",
        shortLabel: "d/acc"
    },
    {
        name: "Fully Automated Luxury Communism",
        coords: { x: 0.9, y: 0.9, z: -0.9 }, // Normalized FALC
        description: "Post-scarcity communism achieved through automation, AI, and renewable energy, enabling universal abundance and the abolition of work. Embraces technology to transcend capitalism rather than reject modernity. Representative figure: Aaron Bastani.",
        shortLabel: "Luxury\nCommunism"
    },
    {
        name: "Eco-Fascism",
        coords: { x: 0.9, y: -0.8, z: -0.9 }, // Normalized eco-fascism
        description: "Authoritarian environmentalism combining ethnic nationalism with radical ecological preservation. Views environmental collapse through a Malthusian lens requiring population control and closed borders. Representative figures: Pentti Linkola, Garrett Hardin, Renaud Camus.",
        shortLabel: "Eco-\nFascism"
    },
    {
        name: "Anarcho-Primitivism",
        coords: { x: -0.9, y: -0.9, z: -0.6 }, // Normalized anarcho-primitivism
        description: "Rejection of industrial civilization and return to pre-agricultural ways of life through dismantling hierarchies and technology. Views agriculture and domestication as original catastrophes requiring reversal. Representative figures: John Zerzan, Derrick Jensen, Ted Kaczynski (ideology, not methods).",
        shortLabel: "Anarcho-\nPrimitivism"
    },
    {
        name: "Degrowth",
        coords: { x: -0.5, y: -0.7, z: -0.5 }, // Keeping current as reasonable
        description: "Planned reduction of economic production and consumption to achieve ecological sustainability and social wellbeing. Emphasizes shorter work weeks, local economies, and living within planetary boundaries rather than infinite growth. Representative figures: Serge Latouche, Giorgos Kallis, Jason Hickel, Kate Raworth.",
        shortLabel: "Degrowth"
    },
    {
        name: "Kaczynskism",
        coords: { x: -0.9, y: -0.9, z: 0.9 },
        description: "The industrial revolution and its consequences have been a disaster for the human race. Relevant Figures: Ted Kaczynski.",
        shortLabel: "Kaczynskism"
    },
    
    // Moderate/Center ideologies
    {
        name: "Abundance",
        coords: { x: 0.5, y: 0.8, z: 0.4 }, // Keeping current
        description: "Techno-optimism focused on achieving material abundance for all through exponential technological growth. Believes innovation and markets can solve scarcity without political restructuring. Representative figures: Peter Diamandis, Steven Pinker, Jason Calacanis.",
        shortLabel: "Abundance"
    },
    {
        name: "u/acc",
        coords: { x: 0.0, y: 1.0, z: 0.0 }, // Keeping current as centered
        description: "Pure acceleration of technological and social change without prescriptive political goals. Embraces intensification of capitalism, technology, and complexity as ends in themselves, accelerating toward unknown futures. Representative figures: Nick Land, Sadie Plant, Cybernetic Culture Research Unit (CCRU).",
        shortLabel: "u/acc"
    },
    {
        name: "Social Democracy",
        coords: { x: 0.4, y: 0.2, z: -0.7 }, // Normalized social democracy
        description: "Mixed economy combining capitalism with comprehensive welfare state, strong labor rights, and progressive taxation. Seeks to humanize capitalism through democratic reform rather than revolution. Representative figures: Bernie Sanders, Olof Palme, Clement Attlee.",
        shortLabel: "Social\nDemocracy"
    },
    {
        name: "MAGA",
        coords: { x: 0.6, y: 0.3, z: 0.0 }, // Keeping current
        description: "Economic nationalism emphasizing domestic manufacturing, immigration restriction, and cultural traditionalism while supporting business deregulation. Populist reaction against globalization and coastal elites. Representative figures: Donald Trump, Steve Bannon, Tucker Carlson, J.D. Vance.",
        shortLabel: "MAGA"
    },
    {
        name: "Progressivism",
        coords: { x: 0.2, y: -0.3, z: -0.5 }, // Keeping current
        description: "Social justice, environmental sustainability, and equity through institutional reform and collective action. Emphasizes systemic change, identity-based advocacy, and climate action. Representative figures: Elizabeth Warren, Ibram X. Kendi, Greta Thunberg, AOC.",
        shortLabel: "Progressivism"
    },
    {
        name: "Anarcho-Capitalism",
        coords: { x: -0.9, y: 0.6, z: 0.9 }, // Extreme individualism, decentralization, and market acceleration
        description: "Stateless society based on voluntary exchange, private property, and free markets. All services including law, security, and infrastructure provided through competing private firms. Rejects all forms of taxation and state authority as illegitimate aggression. Representative figures: Murray Rothbard, David Friedman, Hans-Hermann Hoppe, Ludwig von Mises Institute.",
        shortLabel: "Anarcho-\nCapitalism"
    },
    {
        name: "Libertarianism",
        coords: { x: -0.6, y: 0.4, z: 0.7 }, // Decentralized, moderately accelerationist, strongly individualist
        description: "Limited government, individual liberty, free markets, and personal responsibility. Supports minimal state intervention in both economic and personal matters. Advocates for lower taxes, deregulation, and civil liberties. Representative figures: Ron Paul, Rand Paul, Milton Friedman, Cato Institute, Reason Magazine.",
        shortLabel: "Libertarianism"
    },
    {
        name: "Democratic Socialism",
        coords: { x: 0.7, y: 0.1, z: -0.8 }, // Normalized democratic socialism
        description: "Worker ownership of means of production achieved through democratic state power and coordinated planning. Seeks to extend democracy into economic sphere while maintaining strong public institutions and social programs. Representative figures: Jacobin Magazine, Richard Wolff, Yanis Varoufakis, Michael Harrington.",
        shortLabel: "Democratic\nSocialism"
    },
    {
        name: "Neoliberalism",
        coords: { x: -0.3, y: 0.5, z: 0.5 },
        description: "Free market capitalism, global trade, deregulation, and privatization as engines of growth and efficiency. Favors market solutions and technocratic governance over democratic deliberation. Representative figures: Margaret Thatcher, Ronald Reagan, Larry Summers, The Economist.",
        shortLabel: "Neoliberalism"
    },
    {
        name: "Mutualism",
        coords: { x: -0.7, y: -0.3, z: -0.4 }, // Decentralized, decelerationist, moderately collectivist
        description: "Market socialism based on worker cooperatives, mutual aid, and reciprocity without capitalist property relations. Combines market exchange with cooperative ownership and decentralized credit. Representative figures: Pierre-Joseph Proudhon, Kevin Carson, Shawn Wilbur, C4SS.",
        shortLabel: "Mutualism"
    },
    {
        name: "Market Socialism",
        coords: { x: -0.5, y: 0.1, z: -0.5 }, // Decentralized, slightly accelerationist, moderately collectivist
        description: "Worker-owned cooperatives and employee-owned enterprises operating in market economy. Combines cooperative ownership with competitive markets. Democratic workplace governance while maintaining market efficiency and innovation. Representative figures: Mondragon Corporation, employee stock ownership plans (ESOPs), John Roemer, David Schweickart.",
        shortLabel: "Market\nSocialism"
    },
    {
        name: "Solarpunk",
        coords: { x: -0.5, y: 0.3, z: -0.4 }, // Keeping current
        description: "Optimistic vision of sustainable futures through community-based renewable technology, local production, and ecological restoration. Embraces appropriate technology and degrowth aesthetics while maintaining hope for human flourishing. Representative figures: Kim Stanley Robinson, Cory Doctorow, solarpunk movement, Community Solutions.",
        shortLabel: "Solarpunk"
    },
    {
        name: "Ordoliberalism",
        coords: { x: 0.2, y: 0.3, z: 0.2 },
        description: "Ordoliberalism is a German school of economic thought that emphasizes the necessity for government to create and maintain a fair and competitive market order by establishing strong legal foundations and clear rules for economic actors. Representative figures: Walter Eucken, Franz Bohm, Willhelm Ropke.",
        shortLabel: "Ordoliberalism"
    },
    {
        name: "Georgism",
        coords: { x: -0.2, y: 0.1, z: 0.0 },
        description: "Economic philosophy centered on land value taxation and common ownership of natural resources. Argues that land and natural resources belong to all while labor and capital belong to individuals, funding public goods through single land tax. Representative figures: Henry George, Lars Doucet, Scott Sumner, Progress and Poverty movement.",
        shortLabel: "Georgism"
    },
    {
        name: "Marxist-Leninism",
        coords: { x: 0.8, y: 0.5, z: -0.8 }, // Keeping current
        description: "Revolutionary socialism through vanguard party dictatorship and centralized planning. Emphasizes rapid industrialization, collectivization, and building material conditions for communism through state power. Representative figures: Vladimir Lenin, Leon Trotsky, Fidel Castro, Thomas Sankara.",
        shortLabel: "Marxist-\nLeninism"
    },
    {
        name: "Maoism",
        coords: { x: 0.9, y: -0.2, z: -0.9 }, // Highly centralized, slightly decelerationist (anti-intellectual), highly collectivist
        description: "Mass mobilization and permanent revolution through peasant-based guerrilla warfare and cultural transformation. Emphasizes self-reliance, anti-imperialism, and continuous class struggle even after revolution. Cultural Revolution as means to prevent capitalist restoration. Representative figures: Mao Zedong, Shining Path, Naxalites, Communist Party of Nepal (Maoist).",
        shortLabel: "Maoism"
    },
    {
        name: "Fascism",
        coords: { x: 0.7, y: 0.5, z: -0.4 }, // Centralized with corporatism, moderately accelerationist, moderately collectivist (nationalist identity but hierarchical economics)
        description: "Totalitarian nationalism combining authoritarian state control with corporate economics and mass mobilization. Embraces technological modernity and industrial power while rejecting liberal democracy and Marxism. Subordinates individual to organic national community. Representative figures: Benito Mussolini, Italian Futurism, Francisco Franco, Estado Novo.",
        shortLabel: "Fascism"
    },
    {
        name: "Anarcho-Communism",
        coords: { x: -0.9, y: -0.3, z: -0.8 }, // Keeping current
        description: "Stateless, classless society organized through voluntary federation, common ownership, and mutual aid. Seeks immediate abolition of hierarchy, money, and private property in favor of gift economy and consensus democracy. Representative figures: Peter Kropotkin, Emma Goldman, Murray Bookchin, Rojava movement.",
        shortLabel: "Anarcho-\nCommunism"
    },
    {
        name: "Traditionalist Conservatism",
        coords: { x: -0.3, y: -0.3, z: 0.6 }, // Slightly decentralized - local institutions, subsidiarity, organic order
        description: "Preservation of traditional cultural practices, religious values, and national heritage through organic social order and individual responsibility. Skeptical of rapid change, industrialization, and cosmopolitanism. Representative figures: Russell Kirk, Roger Scruton, Rod Dreher.",
        shortLabel: "Trad\nConservatism"
    },
    {
        name: "Monarchism",
        coords: { x: 0.9, y: 0.0, z: 0.4 }, // Centralized authority, neutral on acceleration, individualist hierarchy
        description: "Hereditary sovereignty and aristocratic hierarchy as natural order of society. Emphasizes tradition, duty, and organic social structure over democratic equality. Maintains class distinctions and property rights under royal authority. Representative figures: Edmund Burke (early), Thomas Carlyle, monarchist movements, constitutional monarchies.",
        shortLabel: "Monarchism"
    },
    {
        name: "Neoreaction",
        coords: { x: 0.9, y: 0.9, z: 0.5 }, // Maximally centralized (CEO-kings, absolute sovereignty), highly tech-optimist, hierarchical individualism
        description: "Techno-commercialist autocracy rejecting democracy in favor of sovereign CEO-like rulers. Embraces technology and corporate governance models while advocating for exit over voice. Patchwork of competing autocratic jurisdictions. Highly skeptical of democratic equality and progressive ideology. Representative figures: Curtis Yarvin (Mencius Moldbug), Peter Thiel, Dark Enlightenment movement.",
        shortLabel: "Neoreaction"
    },
    {
        name: "Progressive Conservatism",
        coords: { x: 0.2, y: -0.1, z: 0.4},
        description: "Progressive conservatism is a hybrid political ideology that seeks to combine conservative values—such as tradition, stability, and personal responsibility—with progressive policies that address social and economic challenges through reform and government intervention where needed. Representative figures: Theodore Roosevelt, Benjamin Disraeli.",
        shortLabel: "ProgCon"
    }
];
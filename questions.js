const questions = [
    // Economic axis questions (accelerationism vs decelerationism)
    {
        text: "Humanity's best path forward involves rapid technological advancement, even if it disrupts existing social structures.",
        axis: "economic",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "We need to dramatically reduce consumption and production to live within planetary boundaries.",
        axis: "economic",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },
    {
        text: "Automation and AI should be embraced to free humans from labor, regardless of short-term disruption.",
        axis: "economic",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "Traditional crafts, local food systems, and slower rhythms of life are preferable to industrial efficiency.",
        axis: "economic",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },
    {
        text: "We should pursue space colonization, genetic engineering, and radical life extension technologies.",
        axis: "economic",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "Innovation in renewable energy and green technology will solve environmental problems without reducing consumption.",
        axis: "economic",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "The concept of 'progress' itself is harmful; we should focus on balance and harmony with nature.",
        axis: "economic",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },

    // Governance axis questions (centralization vs decentralization)
    {
        text: "Important decisions are best made by centralized institutions with expertise and coordination.",
        axis: "governance",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "Power should be distributed to local communities and individuals rather than concentrated in central authorities.",
        axis: "governance",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },
    {
        text: "Large-scale coordination through centralized systems is necessary to address complex problems.",
        axis: "governance",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "Bottom-up, decentralized organization is more effective and legitimate than top-down control.",
        axis: "governance",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },
    {
        text: "Strong centralized institutions can better protect people and maintain stability than distributed systems.",
        axis: "governance",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "Decision-making authority should be kept as close to the people affected as possible.",
        axis: "governance",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },
    {
        text: "Centralized planning and coordination leads to better outcomes than letting systems self-organize.",
        axis: "governance",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },

    // Social axis questions (individualism vs collectivism)
    {
        text: "Individual freedom and personal autonomy should be the highest political values.",
        axis: "social",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "Community wellbeing and collective needs should take priority over individual desires.",
        axis: "social",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },
    {
        text: "People should be free to succeed or fail based on their own efforts without collective support.",
        axis: "social",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "Society should ensure everyone's basic needs are met through collective resources and mutual aid.",
        axis: "social",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },
    {
        text: "Private property rights are fundamental and should be strongly protected from collective interference.",
        axis: "social",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    },
    {
        text: "Shared ownership and communal decision-making lead to better outcomes than individual competition.",
        axis: "social",
        options: [
            { text: "Strongly Agree", value: -2 },
            { text: "Agree", value: -1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: 1 },
            { text: "Strongly Disagree", value: 2 }
        ]
    },
    {
        text: "The greatest achievements come from individuals pursuing their own self-interest and vision.",
        axis: "social",
        options: [
            { text: "Strongly Agree", value: 2 },
            { text: "Agree", value: 1 },
            { text: "Neutral", value: 0 },
            { text: "Disagree", value: -1 },
            { text: "Strongly Disagree", value: -2 }
        ]
    }
];
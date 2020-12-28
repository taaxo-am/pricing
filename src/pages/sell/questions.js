const questions = [
    {
        id: 1,
        question: 'Are you able to make and receive calls?',
        detail: 'Check your device for cellular network connectivity issues.',
        answers: [
            {
                id: 1,
                answer: 'Yes',
                result: 'Device can make or receive Calls',
            },
            {
                id: 1,
                answer: 'No',
                result: 'Device cannot make or receive Calls',
            }
        ]
    },
    {
        id: 2,
        question: 'Are there any problems with your mobile screen?',
        detail: 'Check your mobile screen for scratches, cracks, discoloration spots, lines or touch issues.',
        answers: [
            {
                question: 1,
                result: 'Some problems with Mobile Screen',
                answer: 'Yes',
            },
            {
                question: 1,
                result: 'No problems with Mobile Screen',
                answer: 'No',
            }
        ]
    },
    {
        id: 3,
        question: 'Are there any defects on your phone body?',
        answers: [
            {
                question: 1,
                result: 'Some effects on phone body',
                answer: 'Yes',
            },
            {
                question: 1,
                result: 'No effects on phone body',
                answer: 'No',
            }
        ]
    },
    {
        id: 4,
        question: 'Are the front and back free of cracks?',
        answers: [
            {
                question: 4,
                result: 'Device can make or receive Calls',
                answer: 'Yes',
            },
            {
                question: 4,
                result: 'Device cannot make or receive Calls',
                answer: 'No',
            }
        ]
    },
    {
        id: 5,
        question: 'What’s the overall cosmetic condition?',
        answers: [
            {
                question: 1,
                result: 'Looks like new',
                answer: 'Looks like new',
            },
            {
                question: 1,
                result: 'Light signs of use',
                answer: 'Light signs of use',
            },
            {
                question: 1,
                result: 'Normal signs of use',
                answer: 'Normal signs of use',
            },
            {
                question: 1,
                result: 'Heavy signs of use',
                answer: 'Heavy signs of use',
            }
        ]
    }
]

export default questions

function love_quotes() {

    var quotes = [
        "In love there are two things: bodies and words.",
        "Where there is love there is life.",
        "Whatever our souls are made of, his and mine are the same.",
        "Continue to share your heart with people even if it has been broken.",
        "To love is to recognize yourself in another.",
        "In love there are two things– bodies and words.",
        "Love makes your soul crawl out from its hiding place.",
        "There is always madness in love. But there is also always some reason in madness.",
        "Nobody has ever measured, even poets, how much a heart can hold.",
        "Have enough courage to trust love one more time and always one more time.",
        "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
        "Love is a fire. But whether it is going to warm your hearth or burn down your house, you can never tell.",
        "I love her and it is the beginning of everything.",
        "Never love anyone who treats you like you're ordinary.",
        "Where there is great love, there are always miracles.",
        "Love is something sent from heaven to worry the hell out of you.",
        "When you find that one that's right for you, you feel like they were put there for you, you never want to be apart.",
        "In real love, you want the other person's good.In romantic love, you want the other person."

    ];

    var randonumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("box").style = " display:block";
    document.getElementById("box").style = " display: flex;align-items: center;justify-content: center;padding:20px 20px;";
    document.getElementById("box").innerHTML = quotes[randonumber];
}


function money() {
    var quotes = [
        'The lack of money is the root of all evil.',
        '  A rich man is nothing but a poor man with money. ',
        'It is not the man who has too little, but the man who craves more,that is poor',
        'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver',
        'Only buy something that you’d be perfectly happy to hold if the market shuts down for ten years.',
        'Not he who has much is rich, but he who gives much.',
        'Time is more valuable than money. You can get more money, but you cannot get more time.',
        'The person who doesnt know where his next dollar is coming from usually doesnt know where his last dollar went.',
        'Money does not buy you happiness, but lack of money certainly buys you misery',
        'Expect the best. Prepare for the worst. Capitalize on what comes.',
        'I dont pay good wages because I have a lot of money; I have a lot of money because I pay good wages.',
        'That man is richest whose pleasures are cheapest.'

    ]
    var randonumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("money_box").style = " display:block";
    document.getElementById("money_box").style = " display: flex;align-items: center;justify-content: center;padding:20px 20px;";
    document.getElementById("money_box").innerHTML = quotes[randonumber];
}

function Confidance() {
    var quotes = [
        'Confidence is like “Show up in every single moment like you’re meant to be there.',
        'Your success will be determined by your own confidence and fortitude.',
        'Never let success get to your head; never let failures get to your heart.',
        'You have to have confidence in your ability, and then be tough enough to follow through.',
        'With realization of one’s own potential and self-confidence in one’s ability, one can build a better world.',
        'The most terrifying thing is to accept oneself completely.” —Carl Jung, psychiatrist',
        'Confidence is everything. Confidence is what makes that simple white tee and jeans look good.',
        'Never bend your head. Always hold it high. Look the world straight in the eye.'
    ]
    var randonumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("box").style = " display:block";
    document.getElementById("box").style = " display: flex;align-items: center;justify-content: center;padding:20px 20px;";
    document.getElementById("box").innerHTML = quotes[randonumber];
}

function failure() {
    var quotes = [
        'Only those who dare to fail greatly can ever achieve greatly.',
        'Everything you want is on the other side of fear.',
        'There is no failure except in no longer trying.',
        'I have not failed. I have  just found 10,000 ways that wont work',
        'Success is not final, failure is not fatal: it is the courage to continue that counts.',
        'The only real mistake is the one from which we learn nothing',
        'Failures are finger posts on the road to achievement.',
        'Giving up is the only sure way to fail.'
    ]
    var randonumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("box").style = " display:block";
    document.getElementById("box").style = " display: flex;align-items: center;justify-content: center;padding:20px 20px;";
    document.getElementById("box").innerHTML = quotes[randonumber];
}
app.service('AdvertisementService', ['RequestService', function (RequestService) {
    var adverts = [
            {
                heading: 'Оголошенняя 1',
                text: 'Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen. ',
                created: '27.03.1996',
                importance: 'important'
            },
            {
                heading: 'Оголошення 2',
                text: 'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. ',
                created: '27.03.1996',
                importance: 'important'
            },
            {
                heading: 'Оголошення 3',
                text: 'Building mr concerns servants in he outlived am breeding. He so lain good miss when sell some at if. Told hand so an rich gave next. How doubt yet again see son smart. While mirth large of on front. Ye he greater related adapted proceed entered an. Through it examine express promise no. Past add size game cold girl off how old. ',
                created: '27.03.1996',
                importance: 'important'
            },
            {
                heading: 'Оголошення 4',
                text: 'It real sent your at. Amounted all shy set why followed declared. Repeated of endeavor mr position kindness offering ignorant so up. Simplicity are melancholy preference considered saw companions. Disposal on outweigh do speedily in on. Him ham although thoughts entirely drawings. Acceptance unreserved old admiration projection nay yet him. Lasted am so before on esteem vanity oh. ',
                created: '27.03.1996',
                importance: 'important'
            }
    ];

    this.getAdvertises = function () {
        return adverts;
    };

    this.getAdvertByIndex = function (index) {
        return adverts[index];
    }
}])
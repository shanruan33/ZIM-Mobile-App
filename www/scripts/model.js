var app = function (app) {

    app.Model = class {
        constructor() {
            zogr("hi from Model");

            const m = this;

            m.cards = [
                "https://i.postimg.cc/0yj6S2Mb/q1.png",
                "https://i.postimg.cc/0y4z0RDZ/q2.png",
                "https://i.postimg.cc/bwYty99c/q3.png",
                "https://i.postimg.cc/SKJY8QPg/q4.png",
                "https://i.postimg.cc/5tTYmddb/q5.png",
                "https://i.postimg.cc/GmMsHTXB/q6.png"];

            m.questions = ["fullBody", "fruity", "acidic", "notDarkFruit", "advanture", "bitter"];
            m.wines = [
                { id: 1, grape: "Pinot Gris", name: "Cantina Riff Pinot Grigio, Delle Venezie, Italy", fullBody: false, fruity: false, acidic: true, notDarkFruit: true, advanture: null, bitter: null, url: "https://i.postimg.cc/0NYTfWf6/pgQ.png", img: "https://i.postimg.cc/76JCYPCz/wine1.png", description: "Mouthwatering aromas of baked apple, ripe white peach and Bartlett pear follow over to the juicy palate alongside tangy acidity. It closes crisp and clean." },
                { id: 2, grape: "Pinot Gris", name: "Sokol Blosser Willamette Valley Pinot Gris, Oregon, US", fullBody: false, fruity: false, acidic: true, notDarkFruit: true, advanture: null, bitter: null, url: "https://i.postimg.cc/0NYTfWf6/pgQ.png", img: "https://i.postimg.cc/mgV1m5fP/wine2.png", description: "On the nose it displays mineral, stony, earth, citrus, and spice aromas, with flavors of apricot, apple, and fig. The mouthfeel is crisp, dry, and refreshing, but also rich, concentrated, and creamy, with a long, lush finish." },
                { id: 3, grape: "Chardonnay", name: "Alamos Chardonnay, Mendoza, Argentina", fullBody: true, fruity: null, acidic: null, notDarkFruit: true, advanture: false, bitter: false, url: "https://i.postimg.cc/rp265XSX/chQ.png", img: "https://i.postimg.cc/nLPjJ9LZ/wine3.png", description: "On the full and round palate, flavors of pear and pineapple emerge, balanced by subtle notes of vanilla, butterscotch and sweet brown spice. A lingering finish is accented by clean acidity and citrus zest." },
                { id: 4, grape: "Chardonnay", name: "Columbia Crest H3 Chardonnay, Washington, US", fullBody: true, fruity: null, acidic: null, notDarkFruit: true, advanture: false, bitter: false, url: "https://i.postimg.cc/rp265XSX/chQ.png", img: "https://i.postimg.cc/sfSBkXCd/wine4.png", description: "This wine opens with bright fruit aromas of apple and pear which harmonize gracefully with signature notes of caramelized sugar and butterscotch. Ripe fruit flavors are bolstered by lively acidity, yet balanced deftly with a subtle creaminess." },
                { id: 5, grape: "Pinot Noir", name: "The Pinot Project California Pinot Noir, US", fullBody: null, fruity: true, acidic: null, notDarkFruit: null, advanture: null, bitter: true, url: "https://i.postimg.cc/FRG2tYwN/pnQ.png", img: "https://i.postimg.cc/wMh7LWQT/wine5.png", description: "The Pinot Project has a full and silky mouth feel, with just the right amount of acidity to complement a variety of dishes. The wine is 100% stainless steel fermented with the caps receiving periodic punchdowns, before finishing dry with just a kiss of oak." },
                { id: 6, grape: "Pinot Noir", name: "Oyster Bay Pinot Noir, New Zealand", fullBody: null, fruity: true, acidic: null, notDarkFruit: null, advanture: null, bitter: true, url: "https://i.postimg.cc/FRG2tYwN/pnQ.png", img: "https://i.postimg.cc/NjQr7wVh/wine6.png", description: " Oyster Bay Marlborough Pinot Noir is elegant, cool climate Pinot Noir at its best – sublime, stylish, and silky-smooth. Aromatic cherry, bright red berry, and juicy black plum, with a lingering, smooth, and seductive texture." },
                { id: 7, grape: "Cabernet Sauvignon", name: "Doña Paula Estate Cabernet Sauvignon, Argentina", fullBody: null, fruity: null, acidic: null, notDarkFruit: false, advanture: true, bitter: true, url: "https://i.postimg.cc/LXmr0tCx/csQ.png", img: "https://i.postimg.cc/8c87F8W0/wine7.png", description: "Medium ruby colour; on the nose are notes of blackberry, raspberry, plum, spice and forest floor; on the palate, it is dry and medium-full bodied, with flavours that echo the aromas." },
                { id: 8, grape: "Cabernet Sauvignon", name: "Josh Cellars Cabernet Sauvignon, California, US", fullBody: null, fruity: null, acidic: null, notDarkFruit: false, advanture: true, bitter: true, url: "https://i.postimg.cc/LXmr0tCx/csQ.png", img: "https://i.postimg.cc/Gp28Vxdq/wine8.png", description: "Round and juicy, this Cabernet Sauvignon has flavors of blackberry, toasted hazelnut and cinnamon, complemented by hints of vanilla and toasted oak." },
            ];

            //function
            m.createCard = (cardUrl, pageContent) => {
                m.card = asset(cardUrl).centerReg(pageContent).top().mov(0, -stageH * 0.03);
                m.card.width = stageH * 0.45;
                return m.card;
            }

            m.createLastQ = (sortedGrapes, pageContent) => {
                var grape = sortedGrapes[0];
                var url = grape.url;
                m.card = asset(url).centerReg(pageContent).top().sca(.5).mov(0, -stageH * 0.03);
                return m.card;
            }

            m.filter = (index, answer) => {

                var parameter = m.questions[index];
                zog(parameter, m.wines.length);
                if (m.wines.length == 4) {
                    var parameterNull = m.wines.filter(grape => grape[parameter] == null);
                    if (parameterNull.length === 2) {
                        var wines;
                        var parameterValid = m.wines.filter(grape => grape[parameter] != null);
                        (parameterValid[0][parameter] == answer) ? wines = parameterValid : wines = parameterNull;
                        zog(wines);
                        return wines;
                    }
                }
                m.wines = m.wines.filter(grape => grape[parameter] !== !answer);
                zog(m.wines);
                return m.wines;

            }

            m.createWine = (wine, pageContent) => {
                var image = asset(wine.img).clone().centerReg(pageContent).sca(.5).pos(-stageW / 5, -stageH / 7, CENTER, CENTER);
                wine.height = stageH / 2;
                var wineName = new Label({
                    text: wine.name,
                    size: 24,
                    labelWidth: stageW / 2.2,
                    lineHeight: 28,
                    font: "Futura",
                    color: dark
                }).centerReg(pageContent).mov(stageW / 5, -stageH / 3);
                var wineDescription = new Label({
                    text: wine.description,
                    size: 16,
                    labelWidth: stageW * 0.8,
                    lineHeight: 20,
                    fontOptions: "italic"
                }).centerReg(pageContent).mov(0, stageH / 3.8);
            };
            m.createSwipeIntro = (swipe, pageContent) => {
                swipe.disable();
                m.intro = new Container(stageW, stageH).centerReg(pageContent).top();
                var left = asset("https://i.postimg.cc/L6DxLp9w/swipeleft.png").centerReg(m.intro).mov(0, stageH / 4).top();
                left.height = stageH / 12;
                var intro = new Label({
                    text: "Swipe card to choose your answer",
                    size: 20
                }).centerReg(m.intro).mov(0, stageH / 3);

                left.animate({
                    props: { x: stageW / 10, alpha: 0 },
                    time: 700,
                    loop: true,
                    loopCount: 2,
                    call: () => {
                        var right = asset("https://i.postimg.cc/BnvMCVt6/swiperight.png").centerReg(m.intro).mov(0, stageH / 4).top();
                        right.height = stageH / 12;
                        right.animate({
                            props: { x: stageW * 0.9, alpha: 0 },
                            time: 700,
                            loop: true,
                            loopCount: 2,
                            call: () => {
                                intro.animate({ props: { alpha: 0 }, time: 300 });
                                swipe.enable();
                            }
                        });
                    }
                });
            }
        }
    }

    return app;
}(app || {});
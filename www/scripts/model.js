var app = function (app) {

    app.Model = class {
        constructor() {
            zogr("hi from Model");

            const m = this;
            //data
            // m.colors = series(pink, blue, green);
            // m.objects = {};
            // if (localStorage) {
            //     // localStorage.clear();
            //     if (localStorage.objects) {
            //         m.objects = JSON.parse(localStorage.objects);
            //     }
            // }
            // m.magnify = 3;

            m.cards = [
                "https://i.postimg.cc/0yj6S2Mb/q1.png",
                "https://i.postimg.cc/0y4z0RDZ/q2.png",
                "https://i.postimg.cc/bwYty99c/q3.png",
                "https://i.postimg.cc/SKJY8QPg/q4.png",
                "https://i.postimg.cc/5tTYmddb/q5.png",
                "https://i.postimg.cc/GmMsHTXB/q6.png"];

            m.questions = ["fullBody", "fruity", "acidic", "notDarkFruit", "advanture", "bitter"];
            m.grapes = [
                { name: "Pinot Gris", fullBody: false, fruity: false, acidic: true, notDarkFruit: true, advanture: null, bitter: null },
                { name: "Chardonnay", fullBody: true, fruity: null, acidic: null, notDarkFruit: null, advanture: false, bitter: false },
                { name: "Pinot Noir", fullBody: null, fruity: true, acidic: null, notDarkFruit: null, advanture: null, bitter: true },
                { name: "Cabernet Sauvignon", fullBody: null, fruity: null, acidic: null, notDarkFruit: false, advanture: true, bitter: true },
            ];
            m.wines = [
                { name: "Cantina Riff Pinot Grigio, Delle Venezie, Italy", grape: "Pinot Gris", description: "Mouthwatering aromas of baked apple, ripe white peach and Bartlett pear follow over to the juicy palate alongside tangy acidity. It closes crisp and clean." },
                { name: "Sokol Blosser Willamette Valley Pinot Gris, Oregon, US", grape: "Pinot Gris", description: "On the nose it displays mineral, stony, earth, citrus, and spice aromas, with flavors of apricot, apple, and fig. The mouthfeel is crisp, dry, and refreshing, but also rich, concentrated, and creamy, with a long, lush finish." },
                { name: "Alamos Chardonnay, Mendoza, Argentina", grape: "Chardonnay", description: "On the full and round palate, flavors of pear and pineapple emerge, balanced by subtle notes of vanilla, butterscotch and sweet brown spice. A lingering finish is accented by clean acidity and citrus zest." },
                { name: "Columbia Crest H3 Chardonnay, Washington, US", grape: "Chardonnay", description: "This wine opens with bright fruit aromas of apple and pear which harmonize gracefully with signature notes of caramelized sugar and butterscotch. Ripe fruit flavors are bolstered by lively acidity, yet balanced deftly with a subtle creaminess." },
                { name: "The Pinot Project California Pinot Noir, US", grape: "Pinot Noir", description: "The Pinot Project has a full and silky mouth feel, with just the right amount of acidity to complement a variety of dishes. The wine is 100% stainless steel fermented with the caps receiving periodic punchdowns, before finishing dry with just a kiss of oak." },
                { name: "Oyster Bay Pinot Noir, New Zealand", grape: "Pinot Noir", description: " Oyster Bay Marlborough Pinot Noir is elegant, cool climate Pinot Noir at its best – sublime, stylish, and silky-smooth. Aromatic cherry, bright red berry, and juicy black plum, with a lingering, smooth, and seductive texture. " },
                { name: "Doña Paula Estate Cabernet Sauvignon, Argentina", grape: "Cabernet Sauvignon", description: "Medium ruby colour; on the nose are notes of blackberry, raspberry, plum, spice and forest floor; on the palate, it is dry and medium-full bodied, with flavours that echo the aromas." },
                { name: "Josh Cellars Cabernet Sauvignon, California, US", grape: "Cabernet Sauvignon", description: "Round and juicy, this Cabernet Sauvignon has flavors of blackberry, toasted hazelnut and cinnamon, complemented by hints of vanilla and toasted oak." },
            ];
            m.answer = {};


            //function

            m.createCard = (cardUrl, pageContent) => {
                zog(cardUrl);
                m.card = asset(cardUrl).centerReg(pageContent).top().sca(.5).mov(0, -stageH * 0.03);
                return m.card;
            }

            m.filter = (index, answer) => {
                var parameter = m.questions[index];
                zog(parameter);
                zog(m.grapes[0][parameter]);
                var answer = true;
                if (answer === true) {
                    m.grapes = m.grapes.filter(grape => grape[parameter] !== false);
                    zog(m.grapes);

                }

            }

            // m.setColor = function (color, key) {
            //     m.objects[key] = color;
            //     //
            //     zog(key);
            //     localStorage.objects = JSON.stringify(m.objects);
            // }

            // m.getColor = function (key) {
            //     if (m.objects[key]) {
            //         return m.objects[key];
            //     } else {
            //         return pink;
            //     }
            // }
        }
    }

    return app;
}(app || {});
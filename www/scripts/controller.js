var app = function (app) {

    app.Controller = class {
        constructor(m, v) {
            zogb("hi from Controller");
            //cards swipe
            var index = 0;
            var length = m.cards.length;
            var page = v.page1.content;
            var answer;
            m.cardUrl = m.cards[index];
            m.createCard(m.cardUrl, page);
            var wine;
            var lastCard;
            var sortedGrapes;

            var swipe = v.page1.swipe;
            swipe.on("swipe", () => {
                var dir = swipe.direction;
                var card = m.card;
                zog("dir2", dir);
                if (lastCard) {
                    zog("last card created")
                    if (dir == "up" || dir == "down") { card.animate({ props: { y: stageH * 0.47 - 10 }, time: 100, rewind: true }); return; }
                    if (dir == "left") {
                        card.animate({ x: -250, y: stageH / 2, rotation: 720 }, 100);
                        wine = sortedGrapes[0];
                        zog(wine);
                        m.createWine(wine, page);
                        swipe.disable();
                    }
                    if (dir == "right") {
                        card.animate({ x: -250, y: stageH / 2, rotation: 720 }, 100);
                        wine = sortedGrapes[1];
                        zog(wine);
                        m.createWine(wine, page);
                        swipe.disable();
                    }
                } else {
                    if (dir == "up" || dir == "down") { card.animate({ props: { y: stageH * 0.47 - 10 }, time: 100, rewind: true }); return; }
                    if (dir == "left") {
                        card.animate({ x: -250, y: stageH / 2, rotation: 720 }, 100);
                        //filter grape
                        answer = false;
                        sortedGrapes = m.filter(index, answer);
                        // next card
                        if (sortedGrapes.length === 2) {
                            //create last question
                            lastCard = m.createLastQ(sortedGrapes, page);
                        } else if (sortedGrapes.length > 2) {
                            index += 1;
                            if (index < length) {
                                var cardUrl = m.cards[index];
                                m.createCard(cardUrl, page);
                            }
                        }
                    }
                    if (dir == "right") {
                        card.animate({ x: stageW + 250, y: stageH / 2, rotation: -720 }, 100);
                        //filter grape
                        answer = true; 
                        sortedGrapes = m.filter(index, answer);
                        // next card
                        if (sortedGrapes.length === 2) {
                            //create last question
                            lastCard = m.createLastQ(sortedGrapes, page);
                        } else if (sortedGrapes.length > 2) {
                            index += 1;
                            if (index < length) {
                                var cardUrl = m.cards[index];
                                m.createCard(cardUrl, page);
                            }
                        }
                    }
                }
            });

            frame.on("resize", () => {
                v.manager.resize();
            });
        }
    }

    return app;
}(app || {});
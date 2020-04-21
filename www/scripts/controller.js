var app = function (app) {

    app.Controller = class {
        constructor(m, v) {
            zogb("hi from Controller");
            // v.page1.circle.on("click", () => {
            //     let color = m.colors();
            //     v.page1.circle.color = color;
            //     m.setColor(color, v.page1.circle.objKey); 
            //     zog(v.page1.circle.objKey);               
            //     stage.update();
            // });

            // v.page2.rect.on("click", () => {
            //     let color = m.colors();
            //     v.page2.rect.color = color;
            //     m.setColor(color, v.page2.rect.objKey);                
            //     stage.update();
            // });

            //cards swipe
            var index = 0;
            var length = m.cards.length;
            var page = v.page1.content;
            m.cardUrl = m.cards[index];
            m.createCard(m.cardUrl, page);
            m.filter(index, true);

            var swipe = v.page1.swipe;
            swipe.on("swipe", () => {
                var dir = swipe.direction;
                var card = m.card;
                zog("dir2", dir);
                // var label = new Label().pos(0,200,CENTER,BOTTOM);
                // label.text=dir;

                if (dir == "up" || dir == "down") { card.animate({ obj: { alpha: .1 }, time: 300, rewind: true }); return; }
                if (dir == "left") {
                    card.animate({ x: -250, y: stageH / 2, rotation: 720 }, 100);
                    m.answer[m.questions[index]] = false; zog(m.answer);
                    // next card
                    index += 1;
                    if (index < length) {
                        var cardUrl = m.cards[index];
                        zog(index);
                        m.createCard(cardUrl, page);
                    } else { swipe.disable() }
                }
                if (dir == "right") {
                    card.animate({ x: stageW + 250, y: stageH / 2, rotation: -720 }, 100);
                    m.answer[m.questions[index]] = true; zog(m.answer);
                    // next card
                    index += 1;
                    if (index < length) {
                        var cardUrl = m.cards[index];
                        zog(index);
                        m.createCard(cardUrl, page);
                    } else { swipe.disable() }
                }

            });

            frame.on("resize", () => {
                v.manager.resize();
            });
        }
    }

    return app;
}(app || {});
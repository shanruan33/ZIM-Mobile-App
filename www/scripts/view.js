var app = function (app) {

    app.View = class {
        constructor(m) {
            zogy("hi from View");
            const v = this;

            v.manager = new Manager();

            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
            // PAGE 0
            const page0 = v.page0 = new Container();
            page0.name = "intro";
            page0.header = asset("https://i.postimg.cc/tJ7VJJbt/heading.png").clone().addTo(page0);
            page0.content = new Container(1000, 1000).addTo(page0);

            page0.circle = new Circle(300, '#ffe8da').centerReg(page0.content).mov(0, -50);
            page0.which = new Label({
                text: "Which",
                color: white,
                size: 130
            }).addTo(page0.content).pos(-80, -90, CENTER, CENTER);
            page0.wine = new Label({
                text: "Wine?",
                color: white,
                size: 130
            }).addTo(page0.content).pos(50, 30, CENTER, CENTER);
            page0.which.animate({
                props: { rotation: -20 },
                time: 200,
                call: () => {

                    page0.wine.animate({
                        props: { rotation: 21 },
                        time: 600,
                        call: () => {
                            page0.arrowR = asset("https://i.postimg.cc/vmKWnC8d/arrows.png").clone().centerReg(page0.content).rot(90).mov(0, 330).alp(0).animate({ props: { alpha: 1 }, time: 600, wait: 500, rewind: true, loop: true });
                            page0.arrowL = page0.arrowR.clone().centerReg(page0.content).sca(-1, 1).rot(90).mov(0, -430).alp(0).animate({ props: { alpha: 1 }, time: 600, wait: 500, rewind: true, loop: true });
                        }
                    });
                }
            });




            page0.footer = asset("https://i.postimg.cc/6qS4vK5s/footer.png").clone().addTo(page0);

            v.manager.add(
                new Layout(page0, [
                    { object: page0.header, maxHeight: stageH / 5 },
                    { object: page0.content },
                    { object: page0.footer, maxHeight: stageH / 5 }
                ], 0, white, true, null, stage)
            );


            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
            // PAGE 1 

            const page1 = v.page1 = new Container(stageW, stageH);
            page1.name = "quiz";
            page1.content = new Container(stageW, stageH).addTo(page1);
            page1.back = new Circle(stageH, white).centerReg(page1).mov(-stageH + stageW / 15, stageH / 20).bot();
            page1.swipe = new Swipe(stage, 20, 100);
            page1.swipe.disable();


            //swipe background
            page1.rectangle2 = new Rectangle(stageW * 0.8, stageW * 0.8, white, black)
                .centerReg(page1.content).mov(0, -stageH * 0.03).alp(0);
            page1.rectangle2.cursor = "pointer";

            v.manager.add(
                new Layout(page1, [
                    { object: page1.content },
                ], 0, '#ffe8da', true, null, stage)
            );


            // page transition

            const pages = new Pages([
                { page: page0, swipe: [null, null, page1, page1] },
                { page: page1, swipe: [null, null, null, null] }
            ], "fade").addTo();


            v.manager.add(pages);
            pages.on("page", function () {
                zog(pages.page.name); // now we know which page we are on
                if (pages.page.name == "quiz") {
                    m.createSwipeIntro(page1.swipe,page1.content);
                }
            })

        }
    }

    return app;
}(app || {});







var app = function (app) {

    app.View = class {
        constructor(m) {
            zogy("hi from View");
            const v = this;

            v.manager = new Manager();

            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
            // PAGE 1 

            const page1 = v.page1 = new Container(stageW, stageH);

            //page1.header = new Rectangle(800, 10, white).addTo(page1);
            //   

            page1.content = new Container(stageW, stageH).addTo(page1);
            page1.back = new Circle(stageH, white).centerReg(page1).mov(-stageH + stageW / 15, stageH / 20).bot();
            page1.swipe = new Swipe(stage, 20, 100);


            //swipe 
            page1.rectangle2 = new Rectangle(stageW * 0.8, stageW * 0.8, white, black)
                .centerReg(page1.content).mov(0, -stageH * 0.03).alp(0);
            page1.rectangle2.cursor = "pointer";




            //swipe ------- end


            //page1.footer = asset("footer.png").clone().addTo(page1);

            v.manager.add(
                new Layout(page1, [
                    // { object: page1.header },
                    { object: page1.content },
                    // { object: page1.footer }
                ], 0, '#ffe8da', true, null, stage)
                // ], 0, '#ffe8da', true, new Shape(), stage)
            );


            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
            // PAGE 2 

            const page2 = v.page2 = new Container();

            page2.header = asset("heading.png").clone().addTo(page2);

            page2.content = new Container(500, 500).addTo(page2);

            // key = "rectangle";
            // page2.rect = new Rectangle(100, 100, m.getColor(key), dark)
            //     .center(page2.content);
            // page2.rect.objKey = key; // make our own custom id for data!



            page2.footer = asset("footer.png").clone().addTo(page2);

            v.manager.add(
                new Layout(page2, [
                    { object: page2.header },
                    { object: page2.content },
                    { object: page2.footer, maxWidth: 80 }
                ], 0, '#ffe8da', true, null, stage)
                // ], 5, brown, true, new Shape(), stage)
            );


            const pages = new Pages([
                { page: page1, swipe: [null, null, null, null] },
                { page: page2, swipe: [page1, page1, null, null] }
            ], "slide").addTo();


            v.manager.add(pages);


        }
    }

    return app;
}(app || {});







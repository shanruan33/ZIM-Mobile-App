var app = function(app) {
    
    app.View = class {
        constructor(m) { 
            zogy("hi from View");
            const v = this;     
            
            v.manager = new Manager();    
            
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
            // PAGE 1 
        
            const page1 = v.page1 = new Container();
            
            page1.header = asset("heading.png").clone().addTo(page1);
            
            page1.content = new Container(500,500).addTo(page1);
            
            let id = "circle";
            page1.circle = new Circle(50, m.getColor(id), dark)
                .cur("crosshair")
                .center(page1.content);
            page1.circle.objID = id; // make our own custom id for data!
            
            // page1.circle = new Circle(50, null, dark)
            //     .cur("crosshair")
            //     .center(page1.content);
            // page1.circle.objID = "circle"; // make our own custom id for data!
            // page1.circle.color = m.getColor(page1.circle.objID);
            
            page1.footer = new Label("SHERIDAN IM").addTo(page1);
            
            v.manager.add(
                new Layout(page1, [
                    {object:page1.header}, 
                    {object:page1.content},
                    {object:page1.footer, maxWidth:80}
                ], 5, brown, true, null, stage)
                // ], 5, brown, true, new Shape(), stage)
            );
            
            
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~      
            // PAGE 2 
        
            const page2 = v.page2 = new Container();
            
            page2.header = asset("heading.png").clone().addTo(page2);
            
            page2.content = new Container(500,500).addTo(page2);
            
            id = "rectangle";
            page2.rect = new Rectangle(100, 100, m.getColor(id), dark)
                .center(page2.content);
            page2.rect.objID = id; // make our own custom id for data!
                
            
            page2.footer = new Label("SHERIDAN IM").addTo(page2);
            
            v.manager.add(
                new Layout(page2, [
                    {object:page2.header}, 
                    {object:page2.content},
                    {object:page2.footer, maxWidth:80}
                ], 5, brown, true, null, stage)
                // ], 5, brown, true, new Shape(), stage)
            );
                            
        
                
                
                
                
                
                
            const pages = new Pages([
                {page:page1, swipe:[page2,page2,null,null]},
                {page:page2, swipe:[page1,page1,null,null]}                
            ], "slide").addTo();    
            
            
            v.manager.add(pages);
            
            
        }
    }
    
    return app;
}(app||{});







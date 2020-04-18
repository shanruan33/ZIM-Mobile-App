var app = function(app) {
    
    app.Controller = class {
        constructor(m, v) {               
            zogb("hi from Controller");
            v.page1.circle.on("click", () => {
                let color = m.colors();
                v.page1.circle.color = color;
                m.setColor(color, v.page1.circle.objID);                
                stage.update();
            });
            
            v.page2.rect.on("click", () => {
                let color = m.colors();
                v.page2.rect.color = color;
                m.setColor(color, v.page2.rect.objID);                
                stage.update();
            });
            
            frame.on("resize", () => {
                v.manager.resize();
            });
        }       
    }
    
    return app;
}(app||{});
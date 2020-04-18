var app = function(app) {
    
    app.Model = class {        
        constructor() {
            zogr("hi from Model"); 
            const m = this;
            m.colors = series(pink, blue, green);
            m.objects = {};
            if (localStorage) {
                // localStorage.clear();
                if (localStorage.objects) {
                    m.objects = JSON.parse(localStorage.objects);
                }                 
            }
            m.magnify = 3;   
            
            m.setColor = function(color, id) {  
                m.objects[id] = color; 
                localStorage.objects = JSON.stringify(m.objects);
            }        
            
            m.getColor = function(id) {  
                if (m.objects[id]) {
                    return m.objects[id];
                } else {
                    return pink;
                }
            }               
        }        
    }
    
    return app;
}(app||{});
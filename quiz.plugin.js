(function() {
   this.Quiz = function() {
      let defaults = {
          data: [],
          parentSelector: null
      }

      if (arguments[0] && typeof arguments[0] === 'object') {
          this.options = extendDefaults(defaults, arguments[0]);
      }

       this.init();
   }

   function extendDefaults(source, properties) {
       let property;

       for (property in properties) {
           if (properties.hasOwnProperty(property)) {
               source[property] = properties[property];
           }
       }

       return source;
   }

   Quiz.prototype.init = function() {
       console.log(this.options)
   }

}())
/* 
   Copyright: 2015 Harnisch-Consulting
   License:   Distributable under the same terms as Vis.js
   Authors:   Carsten Harnisch
*/

/**
 * This is the main class of contribution 
 *
 * @ignore(debugger)
 * @lint ignoreUndefined(debugger)
 *  
 * @ignore(vis.Network)
 * @lint ignoreUndefined(vis.Network)
 * 
 * @asset(qxvisjs/vis.min.js)
 * @asset(qxvisjs/vis.min.css)
 * @asset(qxvisjs/img/*)
 */
 
var ID = 0;

qx.Class.define("qxvisjs.Network", {
    extend : qx.ui.core.Widget,

    construct : function() {
        this.base(arguments);
    },

    properties: {
    },

    members: {
        _network: null,

        getNetwork: function(){
            return this._network;
        },
        
        create: function(nodes, edges, options) {
           debugger;
           
           var container = this.getContentElement().getDomElement(); 
           
           var data = {
             nodes: nodes,
             edges: edges
           };
           
           var options = {};
           
           this._network = new vis.Network(container, data, options);
        }
    },
    /**
     * Our destructor takes care of removing the private css styles from the browser
     */
    destruct : function() {
        qx.bom.Stylesheet.removeSheet(this.__globalCssEl);
        this.__cssEl = null;
    }
});
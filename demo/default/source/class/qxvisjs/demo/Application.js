/**
 * This is the main application class of the VIS.js demo
 *
 */
qx.Class.define("qxvisjs.demo.Application",
{
    extend : qx.application.Standalone,

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members :
    {
        /**
         * This method contains the initial application code and gets called
         * during startup of the application
         *
         * @lint ignoreDeprecated(alert)
         */
        main : function()
        {
            this.base(arguments);
            if (qx.core.Environment.get("qx.debug"))
            {
                qx.log.appender.Native;
                qx.log.appender.Console;
            }
            
            var visNetwork = new qxvisjs.Network();
        	visNetwork.addListener("appear", function() { 
            	var nodes = [
	             {id: 1, label: 'Node 1'},
	             {id: 2, label: 'Node 2'},
	             {id: 3, label: 'Node 3'},
	             {id: 4, label: 'Node 4'},
	             {id: 5, label: 'Node 5'}
	           ];

	           // create an array with edges
	           var edges = [
	             {from: 1, to: 2},
	             {from: 1, to: 3},
	             {from: 2, to: 4},
	             {from: 2, to: 5}
	           ];
       		   visNetwork.create(nodes, edges, {});
        	}, this); 
            
            var win = new qx.ui.window.Window('VisJs Demo').set({width: 800, height: 600});
            win.setLayout(new qx.ui.layout.Grow());
            win.addListener('appear', function() {
            	win.center()
            });
            
            win.add(visNetwork);
            win.open();
        },
        
        makeNetworkDemo : function()
        {
        	
        	
        }

    }
});

//<debug>
Ext.Loader.setPath({
    'Ext': '../../src'
});
//</debug>

/**
 * This is a simple demo of the TabPanel component in Sencha Touch.
 *
 * This is similar to the other tabs example, only the tabbar is docked to the bottom.
 */
Ext.application({
    startupImage: {
        '320x460': 'resources/startup/Default.jpg', // Non-retina iPhone, iPod touch, and all Android devices
        '640x920': 'resources/startup/640x920.png', // Retina iPhone and iPod touch
        '640x1096': 'resources/startup/640x1096.png', // iPhone 5 and iPod touch (fifth generation)
        '768x1004': 'resources/startup/768x1004.png', //  Non-retina iPad (first and second generation) in portrait orientation
        '748x1024': 'resources/startup/748x1024.png', //  Non-retina iPad (first and second generation) in landscape orientation
        '1536x2008': 'resources/startup/1536x2008.png', // : Retina iPad (third generation) in portrait orientation
        '1496x2048': 'resources/startup/1496x2048.png' // : Retina iPad (third generation) in landscape orientation
    },

    isIconPrecomposed: false,
    icon: {
        57: 'resources/icons/icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/icon@2x.png',
        144: 'resources/icons/icon@144.png'
    },

    //require any components we use in the application
    requires: [
        'Ext.tab.Panel'
    ],

    /**
     * The launch function is called when the browser and the framework is ready
     * for the application to launch.
     *
     * All we are going to do is create a simple tabpanel with some items, and add
     * it to the global Ext.Viewport instance.
     */
    launch: function() {
        //we send a config block into the Ext.Viewport.add method which will
        //create our tabpanel
        Ext.Viewport.add({
            //first we define the xtype, which is tabpanel for the Tab Panel component
            xtype: 'tabpanel',

            //now we specify the tabBar configuration and give it a docked property of bottom
            //this will dock the tabbar of this tabpanel to the bottom
            tabBar: {
                docked: 'bottom'
            },

            //here we specify the ui of the tabbar to light
            ui: 'light',

            //defaults allow us to add default configuratons for each of the items added into
            //this container. adding scrollable true means that all items in this tabpanel will
            //be scrollable unless otherwise specified in the item configuration
            defaults: {
                scrollable: true
            },

            //next we define the items that will appear inside our tab panel
            items: [
                {
                    //each item in a tabpanel requires the title configuration. this is displayed
                    //on the tab for this item
                    title: 'Home',

                    //specify the html to be displayed in this item
                    html: '<h1>Home</h1>',<script type = "text/javascript">

// Note: Like all Javascript password scripts, this is hopelessly insecure as the user can see 
//the valid usernames/passwords and the redirect url simply with View Source.  
// And the user can obtain another three tries simply by refreshing the page.  
//So do not use for anything serious!

var count = 2;
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;

var unArray = ["admin", "Doug", "Michael", "Customer"];  // as many as you like - no comma after final entry
var pwArray = ["admin", "sausage", "altec121", "test"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
alert ("Login was successful");
window.location = "index5.html";
return false;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.  You have " + count + t + " left.");
document.myform.username.value = "";
document.myform.pword.value = "";
setTimeout("document.myform.username.focus()", 25);
setTimeout("document.myform.username.select()", 25);
count --;
}

else {
alert ("Still incorrect! You have no more tries left!");
document.myform.username.value = "No more tries allowed!";
document.myform.pword.value = "";
document.myform.username.disabled = true;
document.myform.pword.disabled = true;
return false;
}

}

</script>
<div data-role="content" align="center">
<form name = "myform">
<p>Username:<input type="text" name="username"></p>
<p>Password:<input type="password" name="pword">
<br><input type="button" value="Login" name="Submit" onclick= "validate()">
</p>

</form>
</div>

                    //the iconCls is the cls of the icon to be used on the tab (only works when the tab
                    //bar is docked to the bottom)
                    iconCls: 'info',

                    //custom cls to be added to the item
                    cls: 'card1'
                },
                {
                    title: 'Customers',
                    html: '<h1>Customer List</h1>',
                    iconCls: 'favorites',
                    cls: 'card2',

                    //the badgetext configuration allows us to add a badge/tooltip onto the tab
                    //this is useful when you want to notify users of new content in an unactive tab
                    //badgeText: '4'
                },
                {
                    title: 'Tasks',
                    html: '<h1>Task List</h1>',
                    iconCls: 'download',
                    cls: 'card3',
                    //badgeText: 'Text can go here too, but it will be cut off if it is too long.'
                },
                {
                    title: 'Routes',
                    html: '<h1>Route Schedule</h1>',
                    iconCls: 'settings',
                    cls: 'card4'
                },
                {
                    title: 'Items',
                    html: '<h1>Item List</h1>',
                    iconCls: 'user',
                    cls: 'card5'
                }
            ]
        });
    }
});

jQuery Page QR Plugin
=====================

This is a very lightweight and easy to use jQuery plugin which will add a small QR code of the current page url and add it at the corner of the page. This plugin makes it very convenient if you want your visitors to be able to able to open your website/page on their mobile devices. 

The plugin will automatically detect the current url of the page and generate the QR code for that.
##Usage



    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.pageqr.js"></script>

    <script type="text/javascript">
      $(document).ready(function() {
        //use default settings
        $.pageqr();
        //or  
        //provide custom settings
        $.pageqr({'size':150,'border':false});
      });
    </script>

 

##Options

You can control the behavior of the plugin by providing various setting values. You have following options (with default values)

            $.pageqr({                       
            'size':'100',                        //Height and Width of the QR code            
            'showLabel':true,                    //Show/Hide the label at the bottom of QR code           
            'labelText':'Scan to open on phone', //Label Text           
            'vertical':'bottom',                 //If the QR code is to be aligned with the 'top' or 'bottom' edges of the page                
            'horizontal':'right',                //If the QR code is to be aligned with the 'left' or 'right' edges of the page                     
            'border':true,                      //Add a border around the QR code block             
            'error_correction_level':'L',       //QR code error correction level, Options : L,M,Q,H            
            'margin':4                          //Margin on QR code
             });

##ToDo


1. Dont show QR when opened on mobile
2. Maybe add more settings


## Author

[Akhil Gupta](http://geek.akhil.me)

## Other

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2013, Akhil Gupta (htp://akhil.me)

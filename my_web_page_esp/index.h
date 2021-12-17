const char MAIN_page[] PROGMEM = R"=====(
<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Welcome To IOT</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>

            div{
                position: fixed;
                height: 200px;
                width: 250px;
            }
            .div1{   border-radius: 10px;
                     border: solid black 1px;
                     padding: 5px;
                     top: 50px;
                     margin-left: 25%;
            }
            .div2{ border-radius: 10px;
                   border: solid black 1px;
                   padding: 5px;
                   top: 50px;
                   margin-left: 51%;
            }

            img{
                position: fixed;
                height: auto;
                width: 20%;
            }
            .img1{
                margin-left: 0px;
            }
            .img2{

                top: 0px;
                margin-left: 75%;
            }
            input{
                padding: 2px;
            }

        </style>
    </head>
    <body>
       <img border="0" alt="avinash" src="https://firebasestorage.googleapis.com/v0/b/new-js-450b1.appspot.com/o/rock%2Fzzzz.jpg?alt=media&token=9b54986f-f831-48bc-b1fa-dc37bf0f57da" width="240" height="420">
        <div class="div1">
            <h3>ESP PROJECT</h3>
            <p>
                My 1st ESP project work successfully work...
            </p>

        </div>
        <div class="div2">
            <h3>TELL ME ABOUT MY SERVER & WEB SITE </h3>
            <p>
                <input type="text" name="uname" placeholder="Your Name">
                <textarea name="message" rows="3" cols="25" placeholder="COMMENT ! still under maintenance "></textarea><br>
                <button class="but">POST</button>
            </p>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/new-js-450b1.appspot.com/o/rock%2FB612_20180215_134852.jpg?alt=media&token=028753c9-fd6a-4a7f-9050-53f35ce71732" class="img2" alt="my friends">
    </body>
</html>

)=====";
<h1 align="center">Futbol_web</h1>

<p align="center">
  <a href="" rel="noopener">
 <img width=720px height=400px src="https://drive.google.com/uc?export=view&id=15fTHuD76E-N2x137RIWYUp3CCHnRz8RC" alt="Project logo - stable diffusion"></a>
</p>


* * *

*   [Pages](#pages)
    *   [Login](#login)
    *   [Sign up](#signup)
    *   [Home](#homepage)
    *   [Evaluations](#evaluationpage)
*   [Use case](#usecase)
    *   [Home](#homecase)
    *   [Evaluations](#evaluationcase)
*   [Users role](#userrole)
    *   [ROLE\_USER](#user)
    *   [ROLE\_SCOUTER](#scouter)
    *   [ROLE\_ADMIN](#admin)

* * *

Pages<a name = "pages"></a>
=====

Login<a name = "login"></a>
-----

![](https://drive.google.com/uc?export=view&id=1X2wtFBO7qNqG6BE01KQMWadfeb36mhIR)

Sign up<a name = "signup"></a>
-----

![](https://drive.google.com/uc?export=view&id=17if8kdrrWi8VM3CGm0tKb3v7qPwBeJd3)

Home<a name = "homepage"></a>
----

![](https://drive.google.com/uc?export=view&id=122NE99kxZtpsfOmmzMdBn150LEWzVA-a)

Evaluations<a name = "evaluationpage"></a>
----

![](https://drive.google.com/uc?export=view&id=1To5n7nba30txUr-SSbhoEmlI_6CLnVrH)


* * *

Use case<a name = "usecase"></a>
========

Home<a name = "homecase"></a>
----

*   You must be login, otherwise an error will be displayed
    
    ![](https://drive.google.com/uc?export=view&id=1_4rNz2bKsOcvczPy3g1vhizbSp5_XXwq)
    
*   Once you have been login, you can access and this page will be displayed.![](https://drive.google.com/uc?export=view&id=12pOfq59KCrHdOI6UcvRBagj_zAzXmn9T)
*   We have two options

    1.  Add a new player. We have to fill all the required fields if any of the mandatories fields are empty, the player will not be saved.![](https://drive.google.com/uc?export=view&id=1cbxoUQyM0R7sqbn2wQ8NtbyIP6usbiHG)
    2.  Search a player by name. We have to type in the name and select the name of the player we want. Once we have selected the player all the fields will be filled with the information saved in the database. ![](https://drive.google.com/uc?export=view&id=1XSW5HwCs6wClNFya9I3cSCYtdyrA1RqB)

*   After adding the player or choosing one, more options will be available ![](https://drive.google.com/uc?export=view&id=1-RYcUO-EqQaEqT0mpTfbhBc4rRSdzsA5)

    1.  We have the option of editing any of those fields except the name.
    2.  We can add a new evaluation. If a new evaluation is added, it will be displayed in the table (number 3).
    3.  We can see all the evaluations of a player, remove and export.

*   If we want to export all the evaluations, we have to click on the Export button and a preview of the file will be displayed with a download button and the pdf will be downloaded

![](https://drive.google.com/uc?export=view&id=18ANuRiOESaIB1JhIdwbf15XIgkeGkEYW)

Evaluations<a name = "evaluationcase"></a>
-----------

*   You must be login, otherwise an error will be displayed
    
    ![](https://drive.google.com/uc?export=view&id=1_4rNz2bKsOcvczPy3g1vhizbSp5_XXwq)
    
*   Once you have been login, you can access and this page will be displayed.![](https://drive.google.com/uc?export=view&id=1FGeMLXPEZgmIeBNlRYhnUn4jdU-K1qg0)
*   We have 3 options on this page:

    1.  Global search, to filter by all the columns and show the rows that match.
    2.  Remove an evaluation
    3.  Export an evaluation

* * *

Users role<a name = "userrole"></a>
==========

There are 3 roles:

*   ROLE\_USER
*   ROLE\_SCOUTER
*   ROLE\_ADMIN

ROLE\_USER<a name = "user"></a>
----------

This is the default role, once you are “Sign up” your user will have this role. Currently, with this role you don’t have access to any page, you have to contact the admin to upgrade you to ROLE\_SCOUTER. This is a requirement of the client as he wants the web page for him and his networking of scouts

ROLE\_SCOUTER<a name = "scouter"></a>
-------------

The admin must provide this role. With this role, you have access to all the pages and you can your evaluations.

ROLE\_ADMIN<a name = "admin"></a>
-----------

This role has access to all the pages and you can see all the evaluations.
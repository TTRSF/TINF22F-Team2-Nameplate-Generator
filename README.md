# TINF22F_Team2_Nameplate_Generator

![B84G-4GK-AP3-RME](https://github.com/mk28/TINF21C_Team2_AAS_digital_nameplate/assets/96543571/3891a76b-a111-4231-b7fb-fb5489ceb1cf)

The Digital Nameplate as product identification shall represent the Digital Product Passport (DPP) and contains the essential product identification in digital form. This information can be read using smartphones and tablets without the need for an internet connection.
The technological basis was defined in the DIN SPEC 91406 and its international further development IEC 61406 as well as the VDE V 0170-100 as pre-standard for the international IEC 63365 standard.

It is a project created in the scope of the course "Software Engineering" at Baden-Wuerttemberg Cooperative State University (DHBW) Stuttgart. The Goal of this project is to create a nameplate generator for an Asset Administration Shell (AAS). An example of a generated nameplate can be seen above.



## Goals
The main objective of this project is to create a REST-API for the nameplate-generator.

The REST-API should generate and return a nameplate of the requested product. For that the REST-API has to communicate with another API to get relevant data of the product. The API needs the name of the product and returns with that information the nameplate.

The nameplate should contain all labels, for example safety labels, and a QR code which delivers all informations about the product, for example the website, the phone number and the adress of the responible company.

The REST-API should be implemented on the web application for presentation.

Another goal is the fixing of bugs in the generation of the nameplates and some labels should be added.
<!--The main objective of this project is to create a nameplate generator for an Asset Administration Shell, also known as "AAS". The application shall be able to create graphical illustrations based on the properties provided by the AAS as well as the ability to generate QR codes according to the DIN standard.  
Furthermore, a user-friendly front-end application, set up on the host system, shall be designed and implemented utilizing React. This includes a home page where the user can enter a server address. After selecting the server, the user shall be directed to a user interface (UI) listing all the components available on the server. Additionally, the interface shall display the data regarding the asset chosen by the user in an organized and clear structure. The interface allows the communication between any AAS server through REST-API. Additionally, there shall be an option to download the nameplate in SVG or PNG format. The application shall be tested to ensure compatibility with a diverse AAS server infrastructure. Forbye, the project shall provide a [User Manual](https://github.com/mk28/TINF21C_Team2_AAS_digital_nameplate/wiki/User-Manual) documentation online. -->

## Design and Software development by

* Product Manager: Florian Dörr
* Test Manager: Thomas Ekhardt  
* System Architect: Simon Luz
* Software Developer: Robin Ernst
* Technical Documentation: Tristan Kopp


<p align="center">
<img src="https://github.com/mk28/TINF21C_Team2_AAS_digital_nameplate/blob/6e434676f0f8ec56bd9363a70fcf87058b3255a9/PROJECT/Swe_logo.png" width="250" height="250" />
</p>

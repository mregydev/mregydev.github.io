var Controller = function ($scope) {

    $scope.PersonalImage = "img/logo.jpg";

    $scope.FullName = "Alaa Hamed AbdElhamed";

    $scope.JobTitle = "Full Stack (NodeJS) Software developer";

    $scope.NickName = "@egydev";

    $scope.Education = "Computer Science Graduate AinShams University with grade Very Good"
    $scope.Projects = [];

    $scope.Companies = [];

    $scope.ClientSideTechnologies = [];

    $scope.ServerSideTechnologies = [];


    $scope.SelectedProject = {};


    $scope.SelectedImageUrl = "null";

    $scope.HideSelectedImage = function () {
        $scope.SelectedImageUrl = "null";
    }
    $scope.SetSelectedUrl = function (url) {
        $scope.SelectedImageUrl = url;
    }
    $scope.ProjectClicked = function (project) {
        $scope.SelectedProject = project;
    }


    $scope.Init = function () {


        $scope.Certificates = [

            {
                Logo: "http://dev.topheman.com/wp-content/uploads/2013/12/mongodb-university-logo.png",
                Title: "Introduction to MongoDb with Mean Stack",
                Technologies: "Nodejs",
                Url: "https://courses.edx.org/certificates/83e8e93a177f4bb0a57c74cf4116ffa3"
            },
            {
                Logo: "data:image/png;base64,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",
                Title: "Backend development certificate (In progress)",
                Technologies: "Nodejs",
                Url: "https://www.freecodecamp.com/egydev1990"
            },
            {
                Logo: "https://ambassador-api.s3.amazonaws.com/uploads/portal/655/2014_09_16_20_43_07_Logo-horizontal.png",
                Title: "Shaping Up With AngularJs",
                Technologies: "AngularJs",
                Url: "https://www.codeschool.com/users/egydev1990/badges/392"
            },
            {
                Logo: "https://cdn-images-1.medium.com/max/1600/1*BmvPfSSm2G8C-khX1rhCGg.png",
                Title:  "Getting started with Elastic Search",
                Technologies: "Elastic Search",
                Url: "https://www.udemy.com/certificate/UC-9Q6G9U55/"
            }

        ];


        $scope.Projects = [
            {
                Title: "MCQLAB (Web)",
                Description: "Social web based application for building mcq test and sharing them with other",
                WebLink: "http://mcqlab.net/#",
                ScreenShots: ["img/portfolio/geoExp/questionWidget.png", "img/portfolio/geoExp/questions.png"],
                Technologies: "Technologies used are  Mean Stack – Gulp – WebPack – AWS S3 -es6 - etc",
                MainImage: "img/portfolio/geoExp/logo.png",
                UsedPlaces: "Public use project",
                Src: "img/portfolio/geoExp/logo.png"
            },
            {
                Title: "BasketGame (Web)",
                Description: "Real time multiplayer basketball shooting game",
                WebLink: "http://thebasketgame.com",
                ScreenShots: ["https://basketgame.herokuapp.com/file/ball.png"],
                Technologies: "Technologies used are  Express Js – Angular JS – Socket.io – WebPack – ES6 - Babel - etc",
                MainImage: "https://basketgame.herokuapp.com/file/ball.png",
                UsedPlaces: "Public use project",
                Src: "https://basketgame.herokuapp.com/file/ball.png"
            },
            {
                Title: "Geo-Explorer (Web)",
                Description: "This is a web application that provides different geo-spatial functions like searching ,redlining , measuring ,exporting map ,drawing cad , etc....",
                UsedPlaces: "It was used in Hail and Madinah municipalities and also in  Riyadh Agency for Municipal and Rural Affairs and also KSA Ministry of Municipal and Rural Affairs.",
                ScreenShots: ["img/portfolio/geoExp/main.png"],
                WebLink: "http://gmraexplorer.alriyadh.gov.sa/geoexplorer/",
                Technologies: "Technologies used are  Nodejs,HTML5 , CSS3 , JQuery , Arcgis Javascript , Ajax , Web API and SOE.",
                MainImage: "img/portfolio/geoExp/main.png",
                Src:"img/portfolio/geoExp/main.png"
            },
            {
                Title: "Gas Stations App",
                Description: "This is a web application that manage gas stations locations",
                UsedPlaces: "Public use project",
                ScreenShots: ["img/portfolio/gasstation/main.png"],
                WebLink: "http://gmraexplorer.alriyadh.gov.sa/gasstations/",
                Src: "img/portfolio/gasstation/main.png",
                Technologies: "Technologies used are Nodejs,Mongodb HTML5 , CSS3 , React,Bootstrap",
                MainImage: "img/portfolio/gasstation/main.png"
            },
            
            {
                Title: "Coordinates Check Application",
                Description: "This is a web application (that also has restful interface) validate inserted coordinates whether they are in the ubran boundries and prints them on map",
                UsedPlaces: "Public use project",
                ScreenShots: ["img/portfolio/printapp/main.png"],
                WebLink: "http://gmraexplorer.alriyadh.gov.sa/printapp/",
                Src: "img/portfolio/printapp/main.png",
                Technologies: "Technologies used are Nodejs,Mongodb HTML5 , CSS3 , React,Bootstrap",
                MainImage: "img/portfolio/printapp/main.png"
            },

            {
                Title: "Geo-Explorer (Mobile)",
                Description: "This is a mobile application that provides different geo-spatial functions like searching ,redlining , measuring and searching for online building license transaction .",
                AwesomeIcon: "globe",
                UsedPlaces: "It was used in Riyadh Agency for Municipal and Rural Affairs .",
                ScreenShots: ["img/portfolio/mobileExp/logo.png", "img/portfolio/mobileExp/first.png", "img/portfolio/mobileExp/second.png"],
                WebLink: "https://play.google.com/store/apps/details?id=io.cordova.myapp382999",
                Technologies: "Technologies used are Nodejs, HTML5 , CSS3 , JQuery , Arcgis Javascript , Ajax , Web API and Phonegap .",
                MainImage: "img/portfolio/mobileExp/logo.png"

            },

            {
                Title: "License Permits System",
                Description: "This is a web based application used for license permit generation. It handles different types of transactions like survey report , new licnese ,renew license , modify license and other types",
                AwesomeIcon: "building-o",
                UsedPlaces: "It was used in Hail Municipality",
                ScreenShots: ["img/portfolio/licSystem/logo.png", "img/portfolio/licSystem/first.png", "img/portfolio/licSystem/third.png"],
                WebLink: "http://83.101.140.98/hajl",
                Technologies: "Technologies used are HTML5 , CSS3 , JQuery , Arcgis Javascript ,Angular Js , Ajax , Web API and oracle.",
                MainImage: "img/portfolio/licSystem/logo.png"
            },
            {
                Title: "Complaint System (Web,Mobile)",
                Description: "This is a web application that provides governmental facilities managment system using gis based solution through making complaints using mobile application and storing it in a spatial way so that we can do later gis operations on it like spatial search and classification in the web application",
                AwesomeIcon: "bullhorn",
                UsedPlaces: "It was used in Mekkah municipality",
                ScreenShots: ["img/portfolio/complaintsSys/logo.png", "img/portfolio/complaintsSys/fifth.png", "img/portfolio/complaintsSys/sixth.png", "img/portfolio/complaintsSys/seventh.png", "img/portfolio/complaintsSys/first.png", "img/portfolio/complaintsSys/second.png", "img/portfolio/complaintsSys/third.png"],
                WebLink: "http://www.tam-holymakkah.com:70/MakkahComplaintJavaScript/login.html",
                MobileLink: "https://play.google.com/store/apps/details?id=com.phonegap.newmekkaComplaints",
                Technologies: "Technologies used are  HTML5 , CSS3 , JQuery , Arcgis Javascript , Ajax  ,oracle, Web API and Phonegap .",
                MainImage: "img/portfolio/complaintsSys/logo.png"
            },
            {
                Title: "Madinah Building Condtions Managment",
                Description: "This is a web application that provides  ability to insert and edit building condition in a spatail way thrugh feature editing",
                Src: "img/portfolio/Madina/logo.jpg",
                UsedPlaces: "It was used in Madina municipality",
                ScreenShots: ["img/portfolio/Madina/logo.jpg"],
                Technologies: "Technologies used are  HTML5 , CSS , JQuery , Arcgis Javascript , Ajax .",
                MainImage: "img/portfolio/Madina/logo.jpg"
            },
            {
                Title: "DotGeo",
                Description: "This is a web application that provides different geo-spatial functions like searching ,redlining , measuring ,exporting map ,editing,classification , etc.... ",
                Src: "img/portfolio/dotGeo/logo.jpg",
                UsedPlaces: "It was used in Egypt Ministry of planning",
                ScreenShots: ["img/portfolio/dotGeo/logo.jpg"],
                Technologies: "Technologies used are silverlight and oracle",
                MainImage: "img/portfolio/dotGeo/logo.jpg",
                WebLink: "http://www.esrinea.com/Geo_Overview.html"
            },
            {
                Title: "Bajyal",
                Description: "This is a web application that provides different career detection and personality test exams like holland exam for detecting student preferences",
                Src: "img/company/bajyal.png",
                UsedPlaces: "It was used in King AbdElaziz University",
                ScreenShots: ["img/company/bajyal.png"],
                Technologies: "Technologies used are Asp.net Web forms , MVP , Wcf ,MS Testing framework , Sql Server",
                MainImage: "img/company/bajyal.png",
                WebLink: "http://bajyal.com/"
            }

        ];


        $scope.Companies = [
            
            {
                Src: "img/company/medina.jpeg",
                Position: "Full Stack Web Software developer (.NET)",
                Interval: "(Nov 2014 - Jan 2016)",
                Link: "http://www.amana-md.gov.sa/"

            },
            {
                Src: "img/company/gmra.jpg",
                Position: "FullStack Software developer (Node.js)",
                Interval: "(Nov 2014 - Present)",
                Link: "https://www.alriyadh.gov.sa/ar"
            },
            
            {
                Src: "img/company/esrinea.png",
                Position: "Full Stack Web Software developer(.NET)",
                Interval: "(Jan 2013 - Jul 2014)",
                Link: "http://www.esrinea.com/"

            },
            {
                Src: "img/company/bajyal.png",
                Position: "Full Stack Web Software developer",
                Interval: "(Jan 2012 - Jan 2013)",
                Link: "http://www.benaaalajyal.com/"
            }
        ];

        $scope.ClientSideTechnologies = ["Javascript", "ES6","React", "gulp", "webpack", "rollup", "mocha", "Html", "Css3", "JQuery", "Angular Js", "Html5", "Bootstrap", "dojo", "Arcgis Javascript API", "Silverlight", "Phonegap", "AngularJs", "Karma", "Browsify"];

        $scope.ContinousIntegration = ["circle ci"];


        $scope.ServerSideTechnologies = ["Nodejs", "Mongodb", "Aws S3", "Express Js", "Wagner", "Chai", "mocha","nyc","codecov","pm2","RabbitMq","sonarjs","socket.io", "jsonstream", "highland", "PHP", "Asp.net", "Wcf", "MVC", "MVP", "Web API", "CakePhp", "Ado.Net", "Entity framework", "MS Testing", "MongoDb", "NodeJs", "Mongoose", "Mocha-Test", "gulp"];
    }




};




var application = angular.module("app", []);

application.controller("Controller", Controller);

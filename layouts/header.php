<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="author" content=""/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta property="og:url" content=""/>
    <meta property="og:type" content="article"/>
    <meta property="og:title" content=""/>
    <meta property="og:description" content=""/>
    <meta property="og:image" content=""/>
    <title>Generic Theme</title>

    <link rel="shortcut icon" href="SiteAssets/images/favicon.png" sizes="25x25"/>

    <!-- Stylesheets -->
    <!--    bootstrap CDN-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!--    bootstrap icons cdn-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">

    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <link rel="stylesheet" href="SiteAssets/css/owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="SiteAssets/css/owlcarousel/owl.theme.default.min.css">
<!--grid master library-->
    <link rel="stylesheet" type="text/css" href="SiteAssets/gridMasterLib/css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="SiteAssets/gridMasterLib/css/demo.css" />
    <link rel="stylesheet" type="text/css" href="SiteAssets/gridMasterLib/css/component.css" />
    <script src="SiteAssets/gridMasterLib/js/modernizr.custom.js"></script>

    <link rel="stylesheet" href="SiteAssets/css/main.css" type="text/css"/>
</head>

<body>
<header>
    <div class="menu">
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container-xxl">

                <a class="navbar-brand" href="index.html">
                    <img src="SiteAssets/images/logo.png" alt="factoryyard-logo" class="logo">
                    <!-- <span class="logo">Logo</span> -->
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="hotels.html">Hotels</a></li>
                        <!-- Button trigger modal -->
                        <li class="nav-item"><a class="nav-link" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Flights</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="firstNavbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Packages
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="firstNavbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="incoming.html">Incoming</a></li>
                                <li><a class="dropdown-item" href="outcoming.html">Outcoming</a></li>
                                <li><a class="dropdown-item" href="domestic.html">Domestic</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="secondNavbarDropdownMenuLink" role="button"
                               data-bs-toggle="dropdown" aria-expanded="false">
                                Our Services
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="secondNavbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="sightseeing.html">Sightseeing</a></li>
                                <li><a class="dropdown-item" href="transportation.html">Car Rental</a></li>
                                <li><a class="dropdown-item" href="visa.html">Visa</a></li>
                            </ul>
                        </li>


                        <li class="nav-item"><a class="nav-link" href="nileCruse.html">Nile Cruise</a></li>
                        <li class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title green text-center" id="exampleModalLabel">Registration</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label d-none">Password</label>
                            <input type="text" class="form-control" id="name" placeholder="Your Name">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label d-none">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email">
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label d-none">Phone Number</label>
                            <input type="number" class="form-control" id="phone" aria-describedby="emailHelp" placeholder="Phone Number">
                        </div>
                        <div class="mb-3">
                            <label for="guest" class="form-label d-none">No. Guests</label>
                            <input type="number" class="form-control" id="guest" aria-describedby="emailHelp" placeholder="No. Guest">
                        </div>

                        <button type="submit" class="btn btn-success">Book</button>
                    </form>
                </div>
<!--                <div class="modal-footer">-->
<!--                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>-->
<!--                    <button type="button" class="btn btn-success">Book</button>-->
<!--                </div>-->
            </div>
        </div>
    </div>

</header>

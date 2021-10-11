<?php
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: DENY');
header("X-XSS-Protection: 1; mode=block");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Content-Security-Policy: default-src 'self' https://*.google.com/ ;img-src 'self' data:;frame-src 'self' https://*.google.com/  ;font-src 'self' https://use.fontawesome.com https://fonts.googleapis.com ;script-src 'self' 'unsafe-inline' 'sha256-dT5xHKPAHq7TFap2W0i4iHFTbagTLacDDqTR9ciU+Sw=' 'sha256-pcSfKeb5ISc7eSOGHdx8sh+pLkI3fGb8H3Lsz7J45MA=' ;style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://use.fontawesome.com");
header("Permissions-Policy: fullscreen=(), geolocation=(), camera=(), microphone=()");
header('Accept-Encoding: gzip, compress, br');
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport"/>
    <meta content="ie=edge" http-equiv="x-ua-compatible"/>

    <title>Centro Amaï - Centro de Apoyo a la Maternidad - La Serena</title>
    <meta name="description"
          content="Centro de Apoyo a la Maternidad y Alimentación Infantil. Contamos con profesionales altamente capacitadas en lactancia y alimentación."/>
    <link rel="canonical" href="https://www.centroamai.cl/"/>

    <!-- FAVICON -->
    <link href="/img/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
    <link href="/img/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png">
    <link href="/img/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png">
    <link href="/img/site.webmanifest" rel="manifest">
    <link color="#5bbad5" href="/img/safari-pinned-tab.svg" rel="mask-icon">
    <link href="/img/favicon.ico" rel="shortcut icon">
    <meta content="CentroAma&iuml;" name="apple-mobile-web-app-title">
    <meta content="CentroAma&iuml;" name="application-name">
    <meta content="#da532c" name="msapplication-TileColor">
    <meta content="/img/browserconfig.xml" name="msapplication-config">
    <meta content="#ffffff" name="theme-color">

    <style>

        .dark-bg {
            background-color: rgba(0, 0, 0, 0.6);
        }

        #introCarousel,
        .carousel-inner,
        .carousel-item,
        .carousel-item.active {
            height: 100vh;
        }

        .carousel-item:nth-child(1),
        .carousel-item:nth-child(2),
        .carousel-item:nth-child(3) {
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
        }

        .webp .carousel-item:nth-child(1) {
            background-image: url('img/carousel/fotos_portada2.webp');
        }

        .no-webp .carousel-item:nth-child(1) {
            background-image: url('img/carousel/fotos_portada2.jpeg');
        }

        .webp .carousel-item:nth-child(2) {
            background-image: url('img/carousel/fotos_portada1.webp');
        }

        .no-webp .carousel-item:nth-child(2) {
            background-image: url('img/carousel/fotos_portada1.jpeg');
        }

        .webp .carousel-item:nth-child(3) {
            background-image: url('img/carousel/fotos_portada3.webp');
        }

        .no-webp .carousel-item:nth-child(3) {
            background-image: url('img/carousel/fotos_portada3.jpeg');
        }
    </style>

    <!-- Font Awesome -->
    <link href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" rel="preload stylesheet" as="style"
          type="text/css" crossorigin/>
    <!-- Google Fonts Roboto -->
    <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
            rel="preload"
            as="font"
            crossorigin
    />

    <!-- CUSTOM MDB -->
    <link rel="preload stylesheet" href="src/scss/mdb.free.min.css" as="style" type="text/css" crossorigin>
</head>
<body>

<header>
    <!-- Navigation bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" href="https://www.centroamai.cl">

                <picture>
                    <source srcset="img/amai_logo_navbar.webp" type="image/webp">
                    <source srcset="img/amai_logo_navbar.png" type="image/jpeg">
                    <img
                            alt="Centro Amai Logo"
                            height="45"
                            loading="lazy"
                            src="img/amai_logo_navbar.png"
                    />
                </picture>

            </a>
            <button
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    class="navbar-toggler"
                    data-mdb-target="#navbarNavAltMarkup"
                    data-mdb-toggle="collapse"
                    type="button"
            >
                <i class="fas fa-bars"></i>
            </button>

            <!-- Righ Menu -->
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a aria-current="page" class="nav-link active" href="https://www.centroamai.cl/#inicio">Inicio</a>
                    <a class="nav-link" href="https://www.centroamai.cl/#servicios">Servicios</a>
                    <a class="nav-link" href="https://www.centroamai.cl/#especialistas">Especialistas</a>
                    <a class="nav-link" href="https://www.centroamai.cl/#contacto">Contacto</a>
                </div>


                <!-- Left Icons -->
                <ul class="navbar-nav d-flex flex-row ms-auto">
                    <li class="nav-item me-lg-1 me-3"><a class="nav-link" href="https://www.facebook.com/centroamai"
                                                         rel="noopener noreferrer" target="_blank"><i
                                    class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="nav-item me-3"><a class="nav-link" href="https://www.instagram.com/centroamai/"
                                                 rel="noopener noreferrer" target="_blank"><i
                                    class="fab fa-instagram"></i></a>
                    </li>
                </ul>

            </div>


        </div>
    </nav>
</header>

<main id="inicio">

    <!-- Carrousel -->
    <div class="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel" id="introCarousel">

        <!-- Indicadores -->
        <ol class="carousel-indicators">
            <li class="active" data-mdb-slide-to="0" data-mdb-target="#introCarousel"></li>
            <li data-mdb-slide-to="1" data-mdb-target="#introCarousel"></li>
            <li data-mdb-slide-to="2" data-mdb-target="#introCarousel"></li>
        </ol>

        <!-- Imagenes -->
        <div class="carousel-inner">

            <div class="carousel-item active webp" data-mdb-interval="7000">

                <div class="mask dark-bg">
                    <div class="d-flex flex-column justify-content-center align-items-center h-100">

                        <div class="text-white text-center">
                            <h1 class="px-5">Centro Amaï - La Serena</h1>
                            <p class="mb-3">Solicita tu hora con nuestros especialistas</p>

                            <a class="btn btn-outline-primary btn-lg"
                               rel="noopener noreferrer"
                               href="https://www.reservo.cl/makereserva/selecttratamientodisponibilidad/1645/1641/2/0/"
                               target="_blank">Reserva
                                aquí</a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="carousel-item" data-mdb-interval="7000">

                <!-- Mask -->
                <div class="mask dark-bg">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <h1 class="text-white text-center p-5">Centro de Apoyo a la Maternidad y Alimentación
                            Infantil</h1>
                    </div>
                </div>

            </div>

            <div class="carousel-item" data-mdb-interval="7000">

                <!-- Mask -->
                <div class="mask dark-bg">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <h1 class="text-white text-center p-5">Apoyo a la Maternidad y Alimentación Infantil</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="servicios">
        <div class="container mt-5 pt-5 ">
            <div class="row mb-5">
                <div class="col-12">
                    <h3 class="h1 header text-center fw-bold">Nuestros <span>Servicios</span></h3>
                </div>
            </div>

            <div class="row mb-lg-4">

                <div class="col-lg-6 col-md-12 mb-md-4">
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="icon d-flex justify-content-center align-items-center"><i
                                    class="fas fa-baby fa-3x white-icon"></i>
                        </div>
                        <div class="ms-3">
                            <h5 class="h5">Pediatría</h5>
                            <ul>
                                <li class="text-muted">Pro lactancia materna</li>
                                <li class="text-muted">Pro crianza respetuosa</li>
                                <li class="text-muted">Asesores de BLW</li>
                                <li class="text-muted">Uso racional de medicamentos</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 mb-md-4">
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="icon d-flex justify-content-center align-items-center"><i
                                    class="fas fa-baby-carriage fa-3x white-icon"></i></div>
                        <div class="ms-3">
                            <h5 class="h5">Consejería en Lactancia Materna</h5>
                            <ul>
                                <li class="text-muted">Profesionales de la salud certificados en lactancia materna</li>
                                <li class="text-muted">Consejerías pre y post natales</li>
                                <li class="text-muted">Consejería post natales</li>
                                <li class="text-muted">Asesoría en destete repetuoso</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-lg-4">
                <div class="col-lg-6 col-md-12 mb-md-4">

                    <div class="d-flex justify-content-start align-items-start">
                        <div class="icon d-flex justify-content-center align-items-center"><i
                                    class="fas fa-apple-alt fa-3x white-icon"></i></div>
                        <div class="ms-3">
                            <h5 class="h5">Nutrición</h5>
                            <ul class="text-muted">
                                <li>Materno infantil</li>
                                <li>Nutrición vegetariana</li>
                                <li>Consejero de Lactancia</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 mb-md-4">
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="icon d-flex justify-content-center align-items-center"><i
                                    class="fas fa-brain fa-3x white-icon"></i></div>
                        <div class="ms-3">
                            <h5>Psicología</h5>
                            <ul class="text-muted">
                                <li>Psicología infanto-juvenil</li>
                                <li>Expereriencia en TEA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-lg-4 ">
                <div class="col-lg-6 col-md-12 mb-md-4">
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="icon d-flex justify-content-center align-items-center"><i
                                    class="fas fa-assistive-listening-systems fa-3x white-icon"></i></div>
                        <div class="ms-3">
                            <h5>Fonoaudiología</h5>
                            <ul class="text-muted">
                                <li>Consejería en Lactancia Materna</li>
                                <li>Expereriencia en TEA</li>
                                <li>Transtornos de lenguaje, habla y deglución</li>
                                <li>Rechazo alimentario</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 mb-md-4">
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="icon d-flex justify-content-center align-items-center"><i
                                    class="fas fa-book-reader fa-3x white-icon"></i></div>
                        <div class="ms-3">
                            <h5>Terapia Ocupacional</h5>
                            <ul class="text-muted">
                                <li>AVD (actividades de la vida diaria)</li>
                                <li>Integración sensorial</li>
                                <li>Rechazo alimentario</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-lg-4">
                <div class="col-lg-6 col-md-12 mb-md-4">
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="icon d-flex justify-content-center align-items-center"><i
                                    class="fas fa-user-nurse fa-3x white-icon"></i></div>
                        <div class="ms-3">
                            <h5>Matrona</h5>
                            <ul class="text-muted">
                                <li>Ginecología natural</li>
                                <li>Consejería en salud sexual y reproductiva</li>
                                <li>Consejería en anticoncepción</li>
                                <li>Acompañamiento integral (prenatal, parto, postparto)</li>
                                <li>Medicina Placentaria</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 mb-md-4">
                    <div class="d-flex justify-content-start align-items-start">
                        <div class="icon d-flex justify-content-center align-items-center"><i
                                    class="fas fa-user-md fa-3x white-icon"></i></div>
                        <div class="ms-3">
                            <h5>Medicina General</h5>
                            <ul class="text-muted">
                                <li>Medicina en Biorregulación</li>
                                <li>Fisioterapia clínica</li>
                                <li>Medicina Ortomolecular</li>
                                <li>Alimentación y Nutrición Ayurvédica</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section id="galeria">
        <div class="container-fluid mt-5 pt-5">
            <div class="row gx-2">
                <div class="col-lg-3 col-md-6 galeria">

                    <picture>
                        <source srcset="img/galeria/fotos_amai.webp" type="image/webp">
                        <source srcset="img/galeria/fotos_amai.jpeg" type="image/jpeg">
                        <img
                                alt=""
                                class="w-100 shadow-1-strong rounded mb-2"
                                src="img/galeria/fotos_amai.jpeg"
                        />
                    </picture>

                    <picture>
                        <source srcset="img/carousel/fotos_portada3.webp" type="image/webp">
                        <source srcset="img/carousel/fotos_portada3.jpeg" type="image/jpeg">
                        <img
                                alt=""
                                class="w-100 shadow-1-strong rounded mb-2"
                                src="img/carousel/fotos_portada3.jpeg"
                        />
                    </picture>
                </div>

                <div class="col-lg-3 col-md-6 galeria">
                    <picture>
                        <source srcset="img/carousel/fotos_portada1.webp" type="image/webp">
                        <source srcset="img/carousel/fotos_portada1.jpeg" type="image/jpeg">
                        <img
                                alt=""
                                class="w-100 shadow-1-strong rounded mb-2"
                                src="img/carousel/fotos_portada1.jpeg"
                        />
                    </picture>

                    <picture>
                        <source srcset="img/galeria/fotos_amai4.webp" type="image/webp">
                        <source srcset="img/galeria/fotos_amai4.jpeg" type="image/jpeg">
                        <img
                                alt=""
                                class="w-100 shadow-1-strong rounded mb-2"
                                src="img/galeria/fotos_amai4.jpeg"
                        />
                    </picture>

                </div>


                <div class="col-lg-3 col-md-6 galeria">

                    <picture>
                        <source srcset="img/galeria/amai_logo_simplificado.webp" type="image/webp">
                        <source srcset="img/galeria/amai_logo_simplificado.jpg" type="image/jpeg">
                        <img
                                alt=""
                                class="w-100 shadow-1-strong rounded mb-2"
                                src="img/galeria/amai_logo_simplificado.jpg"
                        />
                    </picture>


                    <picture>
                        <source srcset="img/carousel/fotos_portada2.webp" type="image/webp">
                        <source srcset="img/carousel/fotos_portada2.jpeg" type="image/jpeg">
                        <img
                                alt=""
                                class="w-100 shadow-1-strong rounded mb-2"
                                src="img/carousel/fotos_portada2.jpeg"
                        />
                    </picture>
                </div>

                <div class="col-lg-3 col-md-6 galeria">

                    <picture>
                        <source srcset="img/galeria/fotos_amai3.webp" type="image/webp">
                        <source srcset="img/galeria/fotos_amai3.jpeg" type="image/jpeg">
                        <img
                                alt=""
                                class="w-100 shadow-1-strong rounded mb-2"
                                src="img/galeria/fotos_amai3.jpeg"
                        />
                    </picture>


                    <picture>
                        <source srcset="img/galeria/fotos_amai1.webp" type="image/webp">
                        <source srcset="img/galeria/fotos_amai1.jpeg" type="image/jpeg">
                        <img
                                alt=""
                                class="w-100 shadow-1-strong rounded mb-2"
                                src="img/galeria/fotos_amai1.jpeg"
                        />
                    </picture>

                </div>
            </div>
        </div>

    </section>

    <section id="especialistas">

        <div class="container mt-5 pt-5">
            <div class="row mb-5">
                <div class="col-lg-12 mb-4">
                    <h3 class="h1 header text-center fw-bold">Nuestros <span>Especialistas</span></h3>
                </div>
            </div>

            <!-- FILA 1 -->
            <div class="row mb-lg-5 gy-md-4 mb-md-4 gy-sm-4 mb-sm-4">

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/mauro_rivera.webp" type="image/webp">
                                <source srcset="img/funcionarios/mauro_rivera.jpg" type="image/jpeg">

                                <img alt="Mauro Rivera" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/mauro_rivera.jpg">
                            </picture>
                            <div class="mask"></div>

                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Mauro Rivera</h4>
                            <span class="text-center oficio">MÉDICO CIRUJANO</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/carmina_nicolai.webp" type="image/webp">
                                <source srcset="img/funcionarios/carmina_nicolai.jpg" type="image/jpeg">
                                <img alt="Carmina Nicolai" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/carmina_nicolai.jpg">
                            </picture>
                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Carmina Nicolai</h4>
                            <span class="text-center oficio">matrona proparto</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/daniel_oliva.webp" type="image/webp">
                                <source srcset="img/funcionarios/daniel_oliva.jpg" type="image/jpeg">
                                <img alt="Daniel Oliva" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/daniel_oliva.jpg">
                            </picture>
                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Daniel Oliva</h4>
                            <span class="text-center oficio">nutricionista</span>
                        </div>
                    </div>
                </div>


                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/pia_espejo.webp" type="image/webp">
                                <source srcset="img/funcionarios/pia_espejo.jpg" type="image/jpeg">
                                <img alt="Daniel Oliva" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/pia_espejo.jpg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Pía Espejo</h4>
                            <span class="text-center oficio">psicóloga</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fila 2 -->
            <div class="row mb-lg-5 gy-md-4 mb-md-4 gy-sm-4 mb-sm-4">
                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/paulette_toha.webp" type="image/webp">
                                <source srcset="img/funcionarios/paulette_toha.jpeg" type="image/jpeg">
                                <img alt="Paulette Tohá" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/paulette_toha.jpeg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Paulette Tohá</h4>
                            <span class="text-center oficio">PSICÓLOGA INFANTIL</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/karla_lopez.webp" type="image/webp">
                                <source srcset="img/funcionarios/karla_lopez.jpg" type="image/jpeg">
                                <img alt="Karla López" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/karla_lopez.jpg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Karla López</h4>
                            <span class="text-center oficio">FONOAUDIÓLOGA</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/claudia_salas.webp" type="image/webp">
                                <source srcset="img/funcionarios/claudia_salas.jpeg" type="image/jpeg">
                                <img alt="Claudia Salas" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/claudia_salas.jpeg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Claudia Salas</h4>
                            <span class="text-center oficio">MÉDICO INFANTO JUVENIL</span>
                        </div>
                    </div>

                </div>


                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/scarlett_orellana.webp" type="image/webp">
                                <source srcset="img/funcionarios/scarlett_orellana.jpeg" type="image/jpeg">
                                <img alt="Scarlett Orellana" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/scarlett_orellana.jpeg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Scarlett Orellana</h4>
                            <span class="text-center oficio">MÉDICO INFANTO JUVENIL</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- FIla 3 -->
            <div class="row mb-lg-5 gy-md-4 mb-md-4 gy-sm-4 mb-sm-4">

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/fran_gutierrez.webp" type="image/webp">
                                <source srcset="img/funcionarios/fran_gutierrez.jpeg" type="image/jpeg">
                                <img alt="Francisca Gutiérrez" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/fran_gutierrez.jpeg">
                            </picture>
                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Francisca Gutiérrez</h4>
                            <span class="text-center oficio">terapeuta ocupacional</span>
                        </div>
                    </div>

                </div>


                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/stefania_rigotti.webp" type="image/webp">
                                <source srcset="img/funcionarios/stefania_rigotti.jpeg" type="image/jpeg">
                                <img alt="Stefania Rigotti" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/stefania_rigotti.jpeg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Stefania Rigotti</h4>
                            <span class="text-center oficio">Nutricionista infantil</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/fran_munoz.webp" type="image/webp">
                                <source srcset="img/funcionarios/fran_munoz.jpeg" type="image/jpeg">
                                <img alt="Francisca Muñoz" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/fran_munoz.jpeg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Francisca Muñoz</h4>
                            <span class="text-center oficio">Nutricionista adulto</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/m_valentina_olivier.webp" type="image/webp">
                                <source srcset="img/funcionarios/m_valentina_olivier.jpeg" type="image/jpeg">
                                <img alt="Mª Valentina Olivier" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/m_valentina_olivier.jpeg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Mª Valentina Olivier</h4>
                            <span class="text-center oficio">psicóloga infantil</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Fila 4 -->
            <div class="row mb-lg-5 gy-md-4 mb-md-4 gy-sm-4 mb-sm-4">

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/charnelle_galleguillos.webp" type="image/webp">
                                <source srcset="img/funcionarios/charnelle_galleguillos.jpg" type="image/jpeg">
                                <img alt="Francisca Gutiérrez" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/charnelle_galleguillos.jpg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Charnelle Galleguillos</h4>
                            <span class="text-center oficio">fonoaudióloga</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/constanza_retamal.webp" type="image/webp">
                                <source srcset="img/funcionarios/constanza_retamal.jpg" type="image/jpeg">
                                <img alt="Constanza Retamal" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/constanza_retamal.jpg">
                            </picture>
                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Constanza Retamal</h4>
                            <span class="text-center oficio">Terapeuta ocupacional</span>
                        </div>
                    </div>

                </div>


                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/mariflor_martinez.webp" type="image/webp">
                                <source srcset="img/funcionarios/mariflor_martinez.jpg" type="image/jpeg">
                                <img alt="Mariflor Martínez" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/mariflor_martinez.jpg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Mariflor Martínez</h4>
                            <span class="text-center oficio">Endocrinóloga infantil</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">

                            <picture>
                                <source srcset="img/funcionarios/gabriela_araya.webp" type="image/webp">
                                <source srcset="img/funcionarios/gabriela_araya.jpg" type="image/jpeg">
                                <img alt="Gabriela Araya" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/gabriela_araya.jpg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Gabriela Araya</h4>
                            <span class="text-center oficio">Psicopedagoga</span>
                        </div>
                    </div>

                </div>


            </div>

            <!-- Fila 5  (CENTRADA) -->
            <div class="row mb-5 d-flex justify-content-center">
                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">
                            <picture>
                                <source srcset="img/funcionarios/felipe_contreras.webp" type="image/webp">
                                <source srcset="img/funcionarios/felipe_contreras.jpeg" type="image/jpeg">
                                <img alt="Felipe Contreras" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/felipe_contreras.jpeg">
                            </picture>
                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Felipe Contreras</h4>
                            <span class="text-center oficio">Psicólogo</span>
                        </div>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6">

                    <div class="staff">

                        <!-- FOTO -->
                        <div class="bg-image hover-overlay hover-zoom mb-4">

                            <picture>
                                <source srcset="img/funcionarios/valentina_collao.webp" type="image/webp">
                                <source srcset="img/funcionarios/valentina_collao.jpeg" type="image/jpeg">
                                <img alt="Valentina Collao" class="img-fluid rounded-5 w-100"
                                     src="img/funcionarios/valentina_collao.jpeg">
                            </picture>

                            <div class="mask"></div>
                        </div>

                        <!-- Profesion -->
                        <div class="oficio">
                            <h4 class="text-center">Valentina Collao</h4>
                            <span class="text-center oficio">Nutricionista</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </section>

    <section id="mision">

        <div class="bg-image mision mt-5">


            <picture>
                <source srcset="img/foto_mision_vision.webp" type="image/webp">
                <source srcset="img/foto_mision_vision.jpg" type="image/jpeg">
                <img alt="Mision - Vision" class="img-fluid w-100" src="img/foto_mision_vision.jpg">
            </picture>


            <div class="mask dark-bg">

                <div class="d-flex justify-content-center align-items-center h-100">

                    <div class="d-row text-center">
                        <h3 class="h1 text-white px-5 fw-bold">Nuestra <span>Visión</span></h3>
                        <p class="px-5 text-white fw-light">"Ser el primer y mejor centro
                            integral de apoyo <br>
                            a la maternidad y la alimentación infantil de la región de Coquimbo".
                        </p>
                    </div>

                    <div class="d-row text-center">
                        <h3 class="h1 text-white px-5 fw-bold">Nuestra <span>Misión</span></h3>
                        <p class="text-white px-5 fw-light">"Acompañar a las familias en el
                            proceso de maternidad,
                            desarrollo infantil,<br> establecimiento de vínculo afectivo seguro y alimentación,<br>
                            siendo la
                            red de apoyo multidisciplinaria de la región".
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<footer class="footer pt-3 text-white">
    <section id="contacto">

        <div class="container">
            <div class="row mt-5 mb-4">

                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="h5 fw-normal mb-3 text-uppercase">Contacto</h5>
                    <hr class="hr-light mb-lg-5 mb-4">

                    <div class="contacto">
                        <div class="row mb-3">
                            <div class="col-1 text-center">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="col-11 ">Las Rojas Poniente #236, La Serena, Chile.
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1 text-center">
                                <i class="far fa-clock"></i>
                            </div>
                            <div class="col-11 ">
                                <p>Lunes a Viernes<br>
                                    9:00 a 13:00 hrs<br>
                                    14:00 a 19:00 hrs</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1 text-center">
                                <i class="fab fa-whatsapp fa-lg"></i>
                            </div>
                            <div class="col-11 ">
                                <p>+56 9 5990 5385</p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1 text-center">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="col-11 ">
                                <p>amaicentro@gmail.com</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="h5 fw-normal mb-3 text-uppercase">Links</h5>
                    <hr class="hr-light mb-lg-5 mb-4">

                    <div class="links">
                        <div class="row">
                            <div class="col-1 text-center">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="col-11 "><a href="https://www.centroamai.cl/#inicio">Inicio</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1 text-center">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="col-11 "><a href="https://www.centroamai.cl/#servicios">Servicios</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1 text-center">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="col-11 "><a href="https://www.centroamai.cl/#especialistas">Especialistas</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1 text-center">
                                <i class="fas fa-arrow-right"></i>
                            </div>
                            <div class="col-11 "><a href="https://www.centroamai.cl/#contacto">Contacto</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-4 col-md-12 mb-4">
                    <h5 class="h5 fw-normal mb-3 text-uppercase d-none d-lg-block">Redes
                        Sociales</h5>
                    <hr class="hr-light mb-lg-5 mb-4 d-none d-lg-block">

                    <div class="d-flex justify-content-lg-start justify-content-sm-center justify-content-xs-center align-items-center">
                        <!-- Facebook -->
                        <a
                                class="btn btn-floating btn-lg m-1 text-white me-3 shadow-1-strong"
                                href="https://www.facebook.com/centroamai"
                                rel="noopener noreferrer"
                                role="button"
                                style="background-color: #3b5998"
                                target="_blank"

                        ><i class="fab fa-facebook-f fa-lg"></i
                            ></a>

                        <!-- Facebook -->
                        <a
                                class="btn btn-floating btn-lg m-1 text-white shadow-1-strong"
                                href="https://www.instagram.com/centroamai"
                                rel="noopener noreferrer"
                                role="button"
                                style="background-color: #E1306C"
                                target="_blank"
                        ><i class="fab fa-instagram fa-lg"></i
                            ></a>
                    </div>
                </div>
            </div>

            <hr class="hr-light-full-width">

            <div class="my-5 text-center d-flex justify-content-center">
                <iframe allowfullscreen=""
                        title="Centro Amai - Google Maps"
                        aria-hidden="false" height="400"
                        loading="lazy"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1028.1569422444134!2d-71.25612644271442!3d-29.913438628768006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9691cbd655a180cb%3A0xe7db50e14c040b93!2sCentro%20Amai!5e0!3m2!1sen!2scl!4v1609260296618!5m2!1sen!2scl"
                        style="border:0;" tabindex="0"
                        width="1300"></iframe>
            </div>


        </div>

        <div class="text-center p-4 copyright text-white">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            Copyright &copy;
            <script async>
                document.write(new Date().getFullYear().toString());
            </script>
            Centro Amaï<br/>
            <p class="my-0">Diseñado por <a class="fw-bold" href="https://www.figonzal.cl" rel="noopener noreferrer"
                                            target="_blank">figonzal.cl</a></p>
        </div>
    </section>
</footer>


<!-- MDB -->
<script src="js/mdb.min.js" type="text/javascript" async></script>

<script src="js/modernizr-custom.js"></script>
<script>
    Modernizr.on('webp', function (result) {
        if (result) {
            // supported
        } else {
            // not-supported
        }
    });
</script>

</body>
</html>

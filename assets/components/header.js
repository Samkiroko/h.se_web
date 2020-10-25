const headerTemplate = document.createElement('template');
headerTemplate.innerHTML =
    `
     <link rel="canonical" href="index.html"/>
    <link rel="alternate" hreflang="en-US" href="index.html"/>
    <link rel="alternate" hreflang="he" href="he/index.html"/>
    <link rel="shortcut icon" type="image/png" href="assets/img/favicon.png"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;display=swap&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet">    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese" rel="stylesheet">
    <link rel="stylesheet" href="assets/vendor/font-icons/css/font-icons.min.css"/>
    <link rel="stylesheet" href="assets/vendor/bootstrap/css/bootstrap.min.css">
    <link href="assets/vendor/slick/slick.min.css" rel="stylesheet"/>
    <link href="assets/css/magnific-popup.min.css" rel="stylesheet"/>
    <link href="assets/css/style-4.0.min.css" rel="stylesheet"/>
    <link href="assets/css/colors/default.min.css" rel="stylesheet"/>
    <style>body {font-family: "Open Sans", Helvetica, sans-serif}  .widget-title .title, .home-slider-item .title, .home-slider-boxed-item .title, .reactions .title-reactions, .poll .title, .w-popular-list li .title, .random-post-slider .item-info .title, .first-tmp-slider-item .item-info .title, .post-item-horizontal .title, .post-item .title, .footer-widget .title, .f-random-list li .title, .post-content .post-title .title, .related-posts .post-list li .title, .related-posts .related-post-title .title, .comment-tabs a, .page-title, .leave-reply-title, .post-item-boxed .title, .w-our-picks-list li .title, .gallery-category-title {font-family: "Roboto", Helvetica, sans-serif}  .post-item-horizontal .item-image {float: left;}  .post-item-horizontal .item-content {float: left;}.add-to-reading-list{padding: 0 !important}</style>    
    <header id="header">
    <nav class="navbar navbar-inverse" role="banner">
        <div class="container nav-container">
            <div class="navbar-header logo-cnt">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/img/logo.png" alt="logo">
                </a>
            </div>
            <!--navigation-->
<div class="nav-desktop">
    <div class="collapse navbar-collapse navbar-left">
        <ul class="nav navbar-nav">
            <li class="active">
                <a href="index.html">
                    Home                </a>
            </li>
                                           </li>
                                                            <li class="">
                                    <a href="fashion.html">
                                        Health                                    </a>
                                </li>
                                               </li>
                                                            <li class="">
                                    <a href="fashion.html">
                                       Safety                                    </a>
                                </li>
                                                            <li class="">
                                    <a href="fashion.html">
                                        Environment                                    </a>
                                </li>
                                                            <li class="">
                                    <a href="rss-news.html">
                                         News                                    </a>
                                </li>
                                                            <li class="">
                                    <a href="gallery.html">
                                        Magazine                                    </a>
                                </li>
                                                            <li class="active">
                                    <a href="#">
                                       Advertise with us                                  </a>
                                </li>
                            
                            <li class="dropdown">
                    <a class="dropdown-toggle dropdown-more" data-toggle="dropdown" href="#">
                        <i class="icon-ellipsis-h more-sign"></i>
                    </a>
                    <ul class="dropdown-menu top-dropdown">
                                                                    <li>
                                                <a href="contact.html">
                                                    Contact                                                </a>
                                            </li>
                                                                                    <li class="li-sub-dropdown">
                                                <a class="dropdown-toggle disabled" data-toggle="dropdown" href="#">
                                                    More&nbsp;<span class="caret"></span>
                                                </a>
                                                <ul class="dropdown-menu sub-dropdown">
                                                                                                            <li>
                                                            <a role="menuitem" href="#">
                                                                About Us                                                            </a>
                                                        </li>
                                                                                                            <li>
                                                            <a role="menuitem" href="#">
                                                               Jobs                                                            </a>
                                                        </li>
                                                                                                            <li>
                                                            <a role="menuitem" href="#">
                                                                Magazine                                                            </a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                                                    <li class="li-sub-dropdown">
                                                <a class="dropdown-toggle disabled" data-toggle="dropdown" href="#">
                                                    Pages option&nbsp;<span class="caret"></span>
                                                </a>
                                                <ul class="dropdown-menu sub-dropdown">
                                                                                                            <li>
                                                            <a role="menuitem" href="page-no-title.html">
                                                                Page No Title                                                            </a>
                                                        </li>
                                                                                                            <li>
                                                            <a role="menuitem" href="page-with-video.html">
                                                                Page with Video                                                            </a>
                                                        </li>
                                                                                                            <li>
                                                            <a role="menuitem" href="page-with-sidebar.html">
                                                                Page with Sidebar                                                            </a>
                                                        </li>
                                                                                                            <li>
                                                            <a role="menuitem" href="login.html">
                                                                Page Only Registered Users                                                            </a>
                                                        </li>
                                                                                                            <li>
                                                            <a role="menuitem" href="page-with-image.html">
                                                                Page with Image                                                            </a>
                                                        </li>
                                                                                                    </ul>
                                            </li>
                                                            </ul>
                </li>
                    </ul>

        <ul class="nav navbar-nav nav-right">
                                                <li class="nav-item-right ">
                        <a href="login.html">
                            Login                        </a>
                    </li>
                    <li class="nav-item-right ">
                        <a href="register.html">
                            Register                        </a>
                    </li>
                                        <li class="nav-item-right">
                <a href="#" data-toggle="modal-search" id="search_button" class="search-icon"><i class="icon-search"></i></a>
            </li>
        </ul>
    </div>
</div>
        </div>
        <div class="mobile-nav-container">
            <div class="nav-mobile-header">
    <div class="container-fluid">
        <div class="row">
            <div class="mobile-header-container">
                <div class="mobile-menu-button">
                    <a href="javascript:void(0)" class="btn-open-mobile-nav"><i class="icon-menu"></i></a>
                </div>
                <div class="mobile-logo">
                    <a href="index.html"><img src="assets/img/logo-mobile.png" alt="logo"></a>
                </div>
                <div class="mobile-button-buttons">
                    <a href="javascript:void(0)" id="mobile_search_button" class="search-icon"><i class="icon-search"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="navMobile" class="nav-mobile">
    <div class="nav-mobile-logo">
        <a href="index.html"><img src="assets/img/logo.png" alt="logo"></a>
    </div>
    <a href="javascript:void(0)" class="btn-close-mobile-nav"><i class="icon-close"></i></a>
    <div class="nav-mobile-inner">
        <div class="row">
            <div class="col-sm-12">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="index.html" class="nav-link">Home</a>
                    </li>

                                                      </li>
                                                                    <li class="nav-item">
                                        <a href="fashion.html" class="nav-link">
                                            Health                                        </a>
                                    </li>
                                                </li>
                                                                    <li class="nav-item">
                                        <a href="fashion.html" class="nav-link">
                                            Safety                                        </a>
                                    </li>
                                                                    <li class="nav-item">
                                        <a href="fashion.html" class="nav-link">
                                            Environment                                        </a>
                                    </li>
                                                                    <li class="nav-item">
                                        <a href="rss-news.html" class="nav-link">
                                            RSS News                                        </a>
                                    </li>
                                                                    <li class="nav-item">
                                        <a href="gallery.html" class="nav-link">
                                            Gallery                                        </a>
                                    </li>
                                                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Advertise with us                                       </a>
                                    </li>
                                                                    <li class="nav-item">
                                        <a href="contact.html" class="nav-link">
                                            Contact                                        </a>
                                    </li>
                                                                    <li class="nav-item dropdown">
                                        <a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                                            More                                            <i class="icon-arrow-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                                                                            <li class="nav-item">
                                                    <a role="menuitem" href="#" class="nav-link">
                                                        About Us                                                    </a>
                                                </li>
                                                                                            <li class="nav-item">
                                                    <a role="menuitem" href="#" class="nav-link">
                                                        Jobs                                                    </a>
                                                </li>
                                                                                            <li class="nav-item">
                                                    <a role="menuitem" href="https://www.google.com/" class="nav-link">
                                                        Magazine                                                   </a>
                                                </li>
                                                                                    </ul>
                                    </li>
                                                                    <li class="nav-item dropdown">
                                        <a class="dropdown-toggle nav-link" data-toggle="dropdown" href="#">
                                            Page option                                            <i class="icon-arrow-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                                                                            <li class="nav-item">
                                                    <a role="menuitem" href="page-no-title.html" class="nav-link">
                                                        Page No Title                                                    </a>
                                                </li>
                                                                                            <li class="nav-item">
                                                    <a role="menuitem" href="page-with-video.html" class="nav-link">
                                                        Page with Video                                                    </a>
                                                </li>
                                                                                            <li class="nav-item">
                                                    <a role="menuitem" href="page-with-sidebar.html" class="nav-link">
                                                        Page with Sidebar                                                    </a>
                                                </li>
                                                                                            <li class="nav-item">
                                                    <a role="menuitem" href="login.html" class="nav-link">
                                                        Page Only Registered Users                                                    </a>
                                                </li>
                                                                                            <li class="nav-item">
                                                    <a role="menuitem" href="page-with-image.html" class="nav-link">
                                                        Page with Image                                                    </a>
                                                </li>
                                                                                    </ul>
                                    </li>
                                
                                                                        <li class="nav-item">
                                <a href="login.html" class="nav-link">
                                    Login                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="register.html" class="nav-link">
                                    Register                                </a>
                            </li>
                                                            </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                                    <div class="dropdown dropdown-mobile-languages dropup">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            <i class="icon-language"></i>
                            English&nbsp;<span class="icon-arrow-down"></span>
                        </a>
                        <ul class="dropdown-menu dropdown-lang">
                                                            <li>
                                    <a href="index.html" class="selected ">
                                        English                                    </a>
                                </li>
                                                            <li>
                                    <a href="he/index.html" class=" ">
                                        Hebrew                                    </a>
                                </li>
                                                    </ul>
                    </div>
                            </div>
        </div>
    </div>
</div>



        </div>
    </nav>
    
    <div class="modal-search">
        <form action="https://infinite.codingest.com/search" method="get" accept-charset="utf-8">
        <div class="container">
            <input type="text" name="q" class="form-control" maxlength="300" pattern=".*\S+.*"
                   placeholder="Search..." required >
            <i class="icon-close s-close"></i>
        </div>
        </form> 
         </div>
</header>
`;
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);

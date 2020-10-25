const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
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
  
  <footer id="footer">
    <div class="container">
        <div class="row footer-widgets">
            <!-- footer widget about-->
            <div class="col-sm-4 col-xs-12">
                <div class="footer-widget f-widget-about">
                    <div class="col-sm-12">
                        <div class="row">
                            <h4 class="title">About</h4>
                            <div class="title-line"></div>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#039;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#039;t anything embarrassing hidden in the middle of text.                            </p>
                        </div>
                    </div>
                </div>
            </div><!-- /.col-sm-4 -->

            <!-- footer widget random posts-->
            <div class="col-sm-4 col-xs-12">
                <!--Include footer random posts partial-->
                
<!--Partial: Footer Random Posts-->
<div class="footer-widget f-widget-random">
    <div class="col-sm-12">
        <div class="row">
            <h4 class="title">Random Posts</h4>
            <div class="title-line"></div>
            <ul class="f-random-list">

                <!--List random posts-->
                                            <li>
                                <div class="left">
                                    <a href="nasa-is-developing-an-all-electric-x-57-x-plane-a-cleaner-way-to-fly.html">
                                        		<img src="/assets/img/bg_small.png" data-src="https://infinite.codingest.com/uploads/images/202008/image_100x75_5f3f685e57a62.jpg" class="lazyload img-responsive" alt="NASA Is Developing an All-Electric X-57 X-Plane: A Cleaner Way to Fly" onerror="javascript:this.src='assets/img/bg_small.png'">
	                                    </a>
                                </div>
                                <div class="right">
                                    <h5 class="title">
                                        <a href="nasa-is-developing-an-all-electric-x-57-x-plane-a-cleaner-way-to-fly.html">
                                            NASA Is Developing an All-Electric X-57 X-Plane: A Cleaner...                                        </a>
                                    </h5>
                                </div>
                            </li>
                                                    <li>
                                <div class="left">
                                    <a href="station-crew-spots-hurricane-genevieve.html">
                                        		<img src="assets/img/bg_small.png" data-src="https://infinite.codingest.com/uploads/images/202008/image_100x75_5f3f685c6b823.jpg" class="lazyload img-responsive" alt="Station Crew Spots Hurricane Genevieve" onerror="javascript:this.src='assets/img/bg_small.png'">
	                                    </a>
                                </div>
                                <div class="right">
                                    <h5 class="title">
                                        <a href="station-crew-spots-hurricane-genevieve.html">
                                            Station Crew Spots Hurricane Genevieve                                        </a>
                                    </h5>
                                </div>
                            </li>
                                                    <li>
                                <div class="left">
                                    <a href="release-the-wasps-trialling-drones-to-drop-predator-insects-and-reduce-chemical-use.html">
                                        		<img src="assets/img/bg_small.png" data-src="https://infinite.codingest.com/uploads/images/202008/image_100x75_5f3f6847efac7.jpg" class="lazyload img-responsive" alt="Release the wasps: Trialling drones to drop predator insects and reduce chemical use" onerror="javascript:this.src='assets/img/bg_small.png'">
	                                    </a>
                                </div>
                                <div class="right">
                                    <h5 class="title">
                                        <a href="release-the-wasps-trialling-drones-to-drop-predator-insects-and-reduce-chemical-use.html">
                                            Release the wasps: Trialling drones to drop predator insects...                                        </a>
                                    </h5>
                                </div>
                            </li>
                        
            </ul>
        </div>
    </div>
</div>
            </div><!-- /.col-sm-4 -->

            <!-- footer widget follow us-->
            <div class="col-sm-4 col-xs-12">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="footer-widget f-widget-follow">
                            <div class="col-sm-12">
                                <div class="row">
                                    <h4 class="title">Social Media</h4>
                                    <div class="title-line"></div>
                                    <ul>
                                        
    <li>
        <a class="facebook" href="https://www.facebook.com/"
           target="_blank"><i class="icon-facebook"></i></a>
    </li>
    <li>
        <a class="twitter" href="https://twitter.com/"
           target="_blank"><i class="icon-twitter"></i></a>
    </li>
    <li>
        <a class="pinterest" href="https://www.pinterest.com/"
           target="_blank"><i class="icon-pinterest"></i></a>
    </li>
    <li>
        <a class="instgram" href="https://www.instagram.com/"
           target="_blank"><i class="icon-instagram"></i></a>
    </li>
    <li>
        <a class="linkedin" href="https://www.linkedin.com/"
           target="_blank"><i class="icon-linkedin"></i></a>
    </li>
    <li>
        <a class="vk" href="https://vk.com/"
           target="_blank"><i class="icon-vk"></i></a>
    </li>
    <li>
        <a class="youtube" href="https://www.youtube.com/"
           target="_blank"><i class="icon-youtube"></i></a>
    </li>
    <li>
        <a class="telegram" href="https://web.telegram.org/"
           target="_blank"><i class="icon-telegram"></i></a>
    </li>
    <li>
        <a class="rss" href="rss-feeds.html"><i class="icon-rss"></i></a>
    </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- newsletter -->
                <div class="col-sm-12">
                    <div class="row">
                        <p>Subscribe here to get interesting stuff and updates!</p>
                        <form action="https://infinite.codingest.com/home_controller/add_to_newsletter" method="post" accept-charset="utf-8">
<input type="hidden" name="infinite_csrf_token" value="ce83df05a3f93564de1ad3fe0838baf0" />                                                                                                  
                        <div class="newsletter">
                            <div class="left">
                                <input type="email" name="email" id="newsletter_email" maxlength="199" placeholder="Email" required >
                            </div>
                            <div class="right">
                                <button type="submit" class="newsletter-button">Subscribe</button>
                            </div>
                        </div>
                        </form>                    </div>
                    <div class="row">
                        <p id="newsletter">
                                                    </p>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="row">
                        <div class="languages-dropdown">
                                                            <div class="dropdown">
                                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">
                                        <i class="icon-language"></i>English&nbsp;<span class="icon-arrow-down"></span>
                                    </button>
                                    <ul class="dropdown-menu">
                                                                                    <li><a href="index.html" class="selected">English</a></li>
                                                                                    <li><a href="he/index.html" class="">Hebrew</a></li>
                                                                            </ul>
                                </div>
                                                    </div>
                    </div>
                </div>
            </div>
            <!-- .col-md-3 -->
        </div>
        <!-- .row -->

        <!-- Copyright -->
        <div class="footer-bottom">
            <div class="row">
                <div class="col-md-12">
                    <div class="footer-bottom-left">
                        <p>Copyright @ 2020 Infinite - All Rights Reserved.</p>
                    </div>
                    <div class="footer-bottom-right">
                        <ul class="nav-footer">
                                                                    <li>
                                            <a href="terms-conditions.html">Terms &amp; Conditions </a>
                                        </li>
                                                                            <li>
                                            <a href="privacy.html">Privacy </a>
                                        </li>
                                                                            <li>
                                            <a href="support.html">Support </a>
                                        </li>
                                                            </ul>
                    </div>
                </div>
            </div>
            <!-- .row -->
        </div>
    </div>
</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);
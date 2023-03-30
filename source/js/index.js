var _mobileNumber = '8793177331'; // total call : 4
var _mail = 'narayaniinfotech171@gmail.com'; // total call : 4
var _address = '177,1/A sainath park, near raygad colony, pachgaon, kolhapur, MH - 416013'; // total call : 3
var _whatsappLink = 'https://wa.me/message/EOYT7EAMNPNIJ1';
var _instgramId = 'narayaniinfotech';
var _youtube = "https://www.youtube.com/@narayaniinfotech171";
var _formSaveMsg = 'Your Form Submitted Sucesfully.';
var _formErrMsg = 'Error Occured ! \nError : ';
// 0 - image, 1 - name, 2 - comment, 3 - star count 
var _commentData = readComments();

function loadData(__name__){
    if(__name__ == 'index'){

    }
}
function chekWebsite(){
    // false - website works fine
    if(false){
        var body = '' +
        '<h1 style="height:100vh; width:100%; display:flex; justify-content: center; align-items:center;"><span>Temporary Down...</span></h1>';
        document.getElementById("myBody").innerHTML = body;
    }
}
// display preloaader
function displayPreloader(id){
    var section = document.getElementById(id);
    var data = ''+
    '<div id="preloader-active">'+
    '   <div class="preloader d-flex align-items-center justify-content-center bg-back">'+
    '       <div class="preloader-inner position-relative">'+
    '           <div class="preloader-circle shadow-lg"></div>'+
    '           <div class="preloader-img pere-text">'+
    '               <img src="source/logo.png" alt="preloader">'+
    '           </div>'+
    '       </div>'+
    '   </div>'+
    '</div>';
 section.innerHTML += data;
}

//display nav bar 
function navbarDisplay(id, page){
    var section = document.getElementById(id);
    var data = ''+
    '<nav class="navbar navbar-expand-lg sticky-top shadow rounded"'+
    '   style="background-color: rgba(255,255,255,0.2 ); backdrop-filter: blur(15px);">'+
    '   <div class="container-fluid">'+
    '       <a class="navbar-brand text-center text-danger mx-1 animate__animated animate__slow animate__bounceInLeft"'+
    '           href="index.html">'+
    '           <img src="source/logo.png" alt="" width="200" height="100" class="d-inline-block align-text-top">'+
    '       </a>'+
    '       <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"'+
    '           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"'+
    '           aria-label="Toggle navigation">'+
    '           <span class="navbar-toggler-icon"></span>'+
    '       </button>'+
    '       <div class="navbar-collapse collapse" id="navbarSupportedContent">'+
    '           <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end w-100">'+
    '               <li class="nav-item fs-6 fw-bold">'+
    '                   <a class="nav-link ps-5" aria-current="page" href="index.html" style="font-size: 1.2rem;" id="indexHtmlNav">Home</a>'+
    '               </li>'+
    '               <li class="nav-item fs-6 fw-bold">'+
    '                   <a class="nav-link ps-5" aria-current="page" href="contact.html" style="font-size: 1.2rem;" id="contactUsHtmlNav">Contact Us</a>'+
    '               </li>'+
    '               <li class="nav-item fs-6 fw-bold">'+
    '                   <a class="nav-link ps-5" aria-current="page" href="about.html" style="font-size: 1.2rem;" id="aboutUsHtmlNav">About US</a>'+
    '               </li>'+
    '           </ul>'+
    '       </div>'+
    '   </div>'+
    '</nav>';
    section.innerHTML += data;
    if(page == "index.html")
        $("#indexHtmlNav").addClass("active");
    else if(page == "contact.html")
        $("#contactUsHtmlNav").addClass("active");
    else if(page == "about.html")
        $("#aboutUsHtmlNav").addClass("active");
        
}

// dispaly boost pc
function boostPcTag(id){
    var data ;
    var section = document.getElementById(id);
    data = ''+
        '<div class="container-fluid mt-4" style="box-shadow: 0 0 50px #ed8b00;">'+
        '    <marquee behavior="" direction="">'+
        '        <span class="fw-bold fst-italic fs-2 text-capitalize">"Upgrade your old computer with Narayani Infotech - more power, more speed, more productivity."</span>'+
        '    </marquee>'+
        '</div>';
    section.innerHTML += data;
}
// display carousal 
function carousalDisplay(id){
    var section = document.getElementById(id);
    var data = ''+
    '<div class="container-fluid w-100 m-0 p-0" style="overflow-x: hidden;">'+
    '<div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel"'+
    '   style="width: 100%; height: 100%;">'+
    '   <div class="carousel-inner">'+
    '       <div class="carousel-item active">'+
    '           <div class="" style="height: 500px;">'+
    '               <div class="row" id="carousal-narayni-2" style="height: 100%;">'+
    '                   <div class="col-12 d-flex justify-content-center align-items-center p-4">'+
    '                       <div class="text-center">'+
    '                           <img src="source/logo.png" alt="logo.png" class="m-auto">'+
    '                           <h2 class="mt-1" style="color: #212529; text-shadow: 2px 2px 5px orange;">Complete Your IT Resources</h2>'+
    '                       </div>'+
    '                   </div>'+
    '               </div>'+
    '            </div>'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="/source/office/office%20(4).jpeg" class="d-block  " alt="carousel.png" style="width: 100%;"'+
    '               height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/cctv-2417559_640.jpg" class="d-block  " alt="carousel.png"'+
    '               style="width: 100%;" height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/cctv-2417559_640.jpg" class="d-block  " alt="carousel.png"'+
    '               style="width: 100%;" height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/computer-3174729_640.jpg" class="d-block  " alt="carousel.png"'+
    '               style="width: 100%;" height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/computer-414059_640.jpg" class="d-block  " alt="carousel.png"'+
    '               style="width: 100%;" height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/computers-332238_640.jpg" class="d-block  " alt="carousel.png"'+
    '               style="width: 100%;" height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/e-waste.jpg" class="d-block  " alt="carousel.png" style="width: 100%;"'+
    '               height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/fan-5694566_640.jpg" class="d-block  " alt="carousel.png"'+
    '               style="width: 100%;" height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/gaming.jpg" class="d-block  " alt="carousel.png" style="width: 100%;"'+
    '               height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/keyboard-mouse-printer-computer-accessories-500x500.jpg" class="d-block  "'+
    '               alt="carousel.png" style="width: 100%;" height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/offices-1181385_640.jpg" class="d-block  " alt="carousel.png"'+
    '               style="width: 100%;" height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/share-market.jpg" class="d-block  " alt="carousel.png" style="width: 100%;"'+
    '               height="500px">'+
    '       </div>'+
    '       <div class="carousel-item">'+
    '           <img src="source/service/storage-870713_640.jpg" class="d-block  " alt="carousel.png"'+
    '               style="width: 100%;" height="500px">'+
    '       </div>'+
    '   </div>'+
    '   <button class="carousel-control-prev visually-hidden" type="button" data-bs-target="#carouselFade"'+
    '       data-bs-slide="prev">'+
    '       <span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
    '       <span class="visually-hidden">Previous</span>'+
    '   </button>'+
    '   <button class="carousel-control-next visually-hidden" type="button" data-bs-target="#carouselFade"'+
    '       data-bs-slide="next">'+
    '       <span class="carousel-control-next-icon" aria-hidden="true"></span>'+
    '       <span class="visually-hidden">Next</span>'+
    '   </button>'+
    '</div>'+
    '</div>'
    section.innerHTML += data;
}
// open dialer to call on number
function dialMobileNumber() {
    window.location = 'tel:' + _mobileNumber;
}

//open instagram
function openInstgram() {
    window.location = "https://www.instagram.com/" + _instgramId + "/";
}
//open whatsapp
function openWhatsapp() {
    window.location = _whatsappLink;
}
// open mail
function openMail() {
    window.location = "mailto:" + _mail;
}
// open youtube
function openYoutube() {
    window.location = _youtube;
}
// add address in tag using id
// total : 1
function officeAddressDisplay(office_address_display) {
    document.getElementById(office_address_display).innerHTML += _address;
}

// add mobile in tag using id
// total : 2
function officeMobileDisplay(office_mobile_display) {
    document.getElementById(office_mobile_display).innerHTML += "+91 " + _mobileNumber;
}

// add mail in tag using id
// total : 2
function officeMailDisplay(office_mail_display) {
    document.getElementById(office_mail_display).innerHTML += _mail;
} 

// read comments from bd (cuurrently its static)
function readComments() {
    commentData = [
        ["https://shubhams1401-sawant.github.io/author.jpeg",
            "shubham sawant",
            "My experience with Narayani Infotech has been excellent. The company's team of skilled professionals provided top-notch service and helped me achieve all of my technology-related goals. I highly recommend Narayani Infotech to anyone in need of reliable and trustworthy IT solutions.",
            5],
        ["", "Ranjit Patil", "I was really impressed by how professional and knowledgeable the team at Narayani Infotech was. They were able to handle everything I needed for my IT, from installing CCTV to providing antivirus solutions, without any difficulty. I would definitely use their services again in the future and recommend them to anyone who needs excellent IT support", 4],
        ["", "Arun Kamble", "I was unsure about using a new IT company, but Narayani Infotech exceeded my expectations. They fixed my tech problems and provided great customer service. I recommend Narayani Infotech to anyone who needs dependable IT solutions", 5],
        ["", "Abhjit Borude", "I bought a second-hand desktop from Narayani Infotech and I'm very happy with it. The team at the company was very helpful in guiding me through my decision-making process, and the desktop has been running smoothly since I received it. I'm very satisfied with my experience and recommend Narayani Infotech to anyone who needs a new or second-hand desktop.", 5],
        ["", "Ajinkya Sutar", "As an active trader, it's important to have a reliable and efficient setup for success. Narayani Infotech helped me create the perfect multi-screen setup for my needs. The team was knowledgeable and professional, and the final result exceeded my expectations. I'm very satisfied with my experience and highly recommend Narayani Infotech to anyone who needs a share market setup.", 4]
    ];
    return commentData;
}
// display comments
function commentsDisplay(id) {
    var noImg = "source/user.png ";
    var section = document.getElementById(id);
    var mainData = '' +
    '<div class="container-fluid p-3">'+
        '<div class="fs-2 fw-semibold ms-3 mb-2">'+
        '    <span class="underline"> Our Customer Say\'s</span>'+
        '</div>';
    var data;

    for (var i = 0; i < _commentData.length; i++) {
        data = '';
        data += '<div class="row">' +
            '<div class="col-12 p-2">' +
            '<div class="card">' +
            '<div class="card-body">' +
            '<div class="media">' +
            '<div class="d-flex justify-content-center align-items-center">' +
            '<div class="text-center">' +
            '<img src="';
        if (_commentData[i][0] != "")
            data += _commentData[i][0] + '" ';
        else
            data += noImg + '" ';

        data += 'class="mr-3 rounded-circle" alt="comment-person.jpg" width="70" height="70">' +
            '<h5 class="mt-0 text-capitalize fw-bold">' + _commentData[i][1] + '</h5>' +
            '</div>' +
            '</div>' +
            '<div class="media-body" style="text-align: justify;">' +
            _commentData[i][2] +
            '<div class="star-rating d-flex justify-content-end align-items-center">';
        var j = 0
        for (j = 0; j < _commentData[i][3]; j++) {
            data += '<i class="fa fa-star" style="color: #ed8b00"></i>'
        }
        for (j; j < 5; j++) {
            data += '<i class="fa fa-star" ></i>'
        }

        data += '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'

        mainData+=data;
    }
    
    section.innerHTML += mainData + '</div>';

}

// add service list or cards
function serviceCardsDisplay(id){
    var section = document.getElementById(id);
    var data = '' ;
    // 0-image name
    const serviceDetails = [
        ['cctv-2417559_640.jpg', 'CCTV Installation', 'We offer top-quality CCTV systems and unparalleled maintenance services. Trust us to keep your property secure and protected. <i><b>"CCTV is like having a time machine, it records what happened in the past and helps to solve mysteries of the present."</b></i>'],
        ['computer-414059_640.jpg', 'Import / Second Hand Desktop', 'We provide the best quality second-hand desktop computers. Our selection is always up-to-date and ready for use.'],
        ['computer-3174729_640.jpg', 'Import / Second Hand Laptop', 'Get the best quality second-hand laptops at affordable prices at our business. Don\'t miss out on this great deal!'],
        ['storage-870713_640.jpg', 'Hard Disk / SSD', 'Our business offers top-quality hard drives and SSD\'s at unbeatable prices. Upgrade your storage today! <br><i><b>Boost Your PC Today !</i></b>'],
        ['share-market.jpg', 'Share Market Multi-Screen Setup', 'Get your share trading at our business. We offer top-quality equipment and expert assistance.'],
        ['gaming.jpg', 'Gaming Setups', 'Our business provides top-quality gaming setups for the ultimate gaming experience. Visit us to upgrade your setup today. <br><i>(Also Second Hand Setups Available.)</i>'],
        ['fan-5694566_640.jpg', 'PC Bulding', 'Our business specializes in building custom PC\'s to meet the unique needs and preferences of each client. Contact us to get started today.'],
        ['antivirus.jpg', 'Antivirus', 'Protect your PC with our high-quality antivirus software. Visit our business for all your antivirus needs. <i><b>"An antivirus is a necessary tool to safeguard your computer and its data from malicious software and hackers."</b></i>'],
        ['computers-332238_640.jpg', 'AMC Services', 'Our business offers AMC (Annual Maintenance Contract) services for both government and non-government clients. Trust us to keep your systems running smoothly.'],
        ['keyboard-mouse-printer-computer-accessories-500x500.jpg', 'Accessories', 'Our business offers a wide range of computer and laptop accessories, including LED/LCD monitors, keyboards, mouse, and more. Visit us to find the perfect accessories for your device.'],
        ['computers-332238_640.jpg', 'College Computer Lab Development', 'We specialize in developing computer labs for educational institutions. Contact us to set up a state-of-the-art lab for your college or school.'],
        ['e-waste.jpg', 'E-Waste Collection', 'Our business is licensed to collect E-waste. Help the environment by properly disposing of your electronic waste with us.'],

    ];

    data +=
    '<div class="container-fluid mb-4 p-0">'+
    '<div class="fs-2 fw-semibold ms-3 p-3">'+
    '    <span class="underline"> Our Services</span>'+
    '</div>'+
    '<br>'+
    '<marquee class="w-100" direction="left" scrollamount="10" behavior="scroll" onmouseover="this.stop();"'+
    '    onmouseout="this.start();" style="box-shadow: 0 0 50px #ed8b00;">'+
    '    <div class="d-flex" id="serviceCardScroll" style="width :' + (serviceDetails.length * 250) +'px;">'
    ;
    // photo size = 250*157
        // var serviceCardScroll = document.getElementById(id);
        // serviceCardScroll.style.width = (serviceDetails.length * 250) + "px";
    for (var i = 0; i < serviceDetails.length; i++) {
        data +=
            '<div class="card m-2" style="width:250px; box-shadow:0 0 20px black;"> <img src="source/service/' + serviceDetails[i][0] + '" class="card-img-top" alt="...">' +
            '<div class="card-body">' +
            '<h5 class="card-title text-wrap">' + serviceDetails[i][1] + '</h5>' +
            '<div class="card-text text-wrap">' + serviceDetails[i][2] + '</div>' +
            '</div>' +
            '</div>'
        // serviceCardScroll.innerHTML = "shubham";
    }

    data += '</div>'+
    '    </marquee>'+
    '</div>';
    section.innerHTML += data;
}

// display main goal of comapany
function mainGoalDisplay(id){
    var section = document.getElementById(id);
    var data = ''+
    '<div class="container-fluid mt-3 ">'+
     '   <div class="row mt-2 ms-lg-2 me-lg-2">'+
     '      <div class="col-lg-6 col-xs-12 d-flex justify-content-center align-items-center p-0">'+
     '          <img src="source/goal.jpg" alt="source/goal.jpg" class="" style="border-radius: 5px; width: 90%;">'+
     '      </div>'+
     '      <div class=" col-lg-6 col-xs-12">'+
     '          <span class="underline p-0">'+
     '              <span class="fs-2 fw-semibold">Main Goal Of </span>'+
     '              <Span class="narayniFont fs-2 text-danger text-uppercase ms-1"'+
     '                  style="text-shadow: 0px 0px 2px black;">Narayani <span class="ms-1 me-1"></span>Infotech</Span>'+
     '          </span>'+
     '          <p class="ps-lg-3" id="main-goal-text">'+
     '              The main goal of <b>Narayani Infotech </b>is to provide its clients with the best technology '+
     '              solutions and '+
     '              services to help them succeed in today\'s fast-paced digital world. The company offers a range of '+
     '              services including CCTV installation, antivirus solutions, and AMC services to help its clients '+
     '              achieve their technology-related goals. <b>Narayani Infotech</b> is committed to staying at the forefront '+
     '              of the industry and continuously investing in research and development to ensure that it is able to '+
     '              offer the latest and most innovative products and services to its clients. The company\'s team of '+
     '              skilled professionals is dedicated to delivering the best possible results for its clients. '+
     '          </p>'+
     '      </div>'+
     '  </div>'+
     '</div>';
     section.innerHTML += data;
}
// display get a call back slider
function getCallBackSliderDisplay(id){
    var section = document.getElementById(id);
    var data = ' '+
    '<button class="btn position-fixed bottom-50 fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" style="transform: rotateZ(90deg); right: -55px; box-shadow: 0 0 15px black; background-color: #ed8b00; color: white; z-index: 999999;">'+
        'Get A Call Back'+
    '</button>'+
    '<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"'+
        'style="background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(20px);">'+
        '<div class="offcanvas-header">'+
         '   <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>'+
        '</div>'+
        '<div class="offcanvas-body">'+
         '   <div class="w-100 p-3" style="background-color: #e6eaed85;">'+
         '      <p class="text-center fs-2">Get a Call Back</p>'+
         '      <div class="container-fluid mt-4">'+
         '          <form method="post" name="name-get-a-call-back" id="id-get-a-call-back">'+
         '              <input type="text" class="form-control visually-hidden" placeholder="DateTime" name="DateTime" id="id-dateTime-get-a-call-back" value="" tabindex="-1">'+
         '              <input class="form-control form-control-md mt-3" type="text" placeholder="Full Name *" required '+
         '                  name="ClientName">'+
         '              <input class="form-control form-control-md mt-3" type="text" placeholder="Mobile *" required '+
         '                  name="Phone">'+
         '              <input class="form-control form-control-md mt-3" type="text" placeholder="City *" required '+
         '                  name="City">'+
         '              <select class="form-select form-control form-control-md mt-3" aria-label=""'+
         '                  name="Required">'+
         '                  <option value="-- For --" class="form-control form-control-md mt-3">-- For '+
         '                      --</option>'+
         '                  <option value="Help / Support" class="form-control form-control-md mt-3">Help / Support'+
         '                  </option>'+
         '                  <option value="Software Purchase" class="form-control form-control-md mt-3">Software '+
         '                      Purchase</option>'+
         '                  <option value="Hardware Purchase" class="form-control form-control-md mt-3">Hardware '+
         '                      Purchase'+
         '                  </option>'+
         '                  <option value="AMC Service" class="form-control form-control-md mt-3">'+
         '                      AMC Service</option>'+
         '                  <option value="Desktop / Laptop / Accessories" class="form-control form-control-md mt-3">'+
         '                      Desktop / Laptop / Accessories</option>'+
         '                  <option value="Other" class="form-control form-control-md mt-3">'+
         '                      Other</option>'+
         '              </select>'+
         '              <button'+
         '                  class="btn btn-outline-danger mt-3 w-100 btn-lg d-flex justify-content-center align-items-center">'+
         '                   <div class="spinner-grow  me-2 visually-hidden"'+
         '                               id="id-getCallBackSubmitSpinner" role="status"></div>'+
         '                                <span class="fw-bold fs-5">Submit</span>'+
         '                            </button>'+
         '          </form>'+
         '      </div>'+
         '  </div>'+
         '  <div>'+
         '      <hr style="color: white;">'+
         '      <h5 class="text-center text-dark">Narayani Infotech</h5>'+
         '      <div class="d-flex align-items-center text-dark" style="width: 100%;">'+
         '          <i class="fa-solid fa-phone me-2 fs-4"></i>'+
         '          <div>'+
         '              <span>Sales & Support : <span id="office_mobile_display1"></span> <br></span>'+
         '              <!-- mobile here through function dynamically -->'+
         '          </div>'+
         '      </div><br>'+
         '      <div class="d-flex align-items-center text-dark" style="width: 100%;">'+
         '          <i class="fa-regular fa-comments me-2 fs-3"></i>'+
         '          <div><span id="office_mail_display1"></span></div>'+
         '          <!-- mail here through function dynamically -->'+
         '      </div>'+
         '  </div>'+
         '</div>'+
         '</div>';
         section.innerHTML += data;
}

// display 24x7 button
function _24x7Display(id){
    var section = document.getElementById(id);
    var data = ''+
    '<div class="position-fixed bottom-0 start-0 p-1 m-2 _24x7" onclick="dialMobileNumber()">'+
    '   <img src="source/telephone.png" alt="24x7-support.png" class="img-fluid"'+
    '       style="width: 3rem; border-radius: 50%; box-shadow: 0 0 10px black;">'+
    '   <span class="fs-5 fw-bold ms-2 me-2" style="color: white;"><span class="fst-italic">24x7'+
    '       </span>Support</span>'+
    '</div>';
    section.innerHTML += data;
}
//display footer
function footerDisplay(id) {
    var section = document.getElementById(id);
    var data = '' +
        '<footer class="bg-dark text-white ">' +
        '<div class="container">' +
        '<div class="row">' +
        '<div class="col-md-4 p-2">' +
        '<h4 class="underline">Contact Us</h4>' +
        '<ul class="list-unstyled p-3">' +
        '<li class="d-flex align-items-center" id="office_mobile_display3"><i class="fa fa-phone mr-2 me-2"></i></li>' +
        '<li class="d-flex align-items-center" id="office_mail_display3"><i class="fa fa-envelope mr-2 me-2"></i></li>' +
        '<li class="d-flex align-items-center" id="office_address_display2"><i class="fa fa-map-marker mr-2 me-2"></i></li>' +
        '</ul>' +
        '</div>' +
        '<div class="col-md-4 p-2">' +
        '<h4 class="underline">Follow Us</h4>' +
        '<ul class="list-inline p-3">' +
        '<li class="list-inline-item"> <a class="text-decoration-none" onclick="openInstgram();">' +
        '<i class="fa-brands fa-instagram text-light" style="font-size: 30px;"></i>' +
        '</a></li>' +
        '<li class="list-inline-item"><a class="text-decoration-none" onclick="openWhatsapp();">' +
        '<i class="fa-brands fa-whatsapp text-light" style = "font-size: 30px;" ></i >' +
        '</a ></li >' +
        '<li class="list-inline-item"><a class="text-decoration-none" onclick="openMail();">' +
        '<i class="fa-regular fa-envelope text-light" style="font-size: 30px;"></i>' +
        '</a></li>' +
        '<li class="list-inline-item"><a class="text-decoration-none" onclick="openYoutube();">' +
        '<i class="fa-brands fa-youtube text-light" style="font-size: 30px;"></i>' +
        '</a></li>' +
        '</ul >' +
        '</div >' +
        '<div class="col-md-4 p-2">' +
        '<h4 class="underline">Newsletter</h4>' +
        '<form id="id-newsletterForm" name="name-newsletterForm">' +
        '<div class="form-group p-3">' +
        '<label for="email">Sign up for our newsletter</label>' +
        '<div class="row d-flex justify-content-center align-items-center">' +
        '<div class="col-lg-8 p-0">' +
        '<input type="text" class="form-control visually-hidden" placeholder="DateTime" name="DateTime" id="id-dateTime-newsletter" value="" readonly tabindex="-1">'+
        ' <input type="email" class="form-control w-100" id="" name="Newsletter" placeholder="Enter email" required>' +
        '</div>' +
        '<div class="col-lg-4 ps-1 pe-1 p-3">' +
        '<button type="submit" class="btn btn-danger d-flex">'+
        '<div class="spinner-grow  me-2 visually-hidden" id="id-newsletterSpinner"'+
        'role="status">'+
        '</div>'+
        '<span class="fs-5">Subscribe</span></button>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</form>' +
        '</div>' +
        '</div >' +
        '<div class="row p-3">' +
        '<iframe class="p-0" ' +
        ' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1659.799187958373!2d74.2248627553375!3d16.663557531000983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a96a6e6083d3570!2sNARAYANI%20INFOTECH!5e1!3m2!1sen!2sin!4v1672475436823!5m2!1sen!2sin"' +
        ' style="width: 100%; height: 50vh; box-shadow: 0 0 20px orange; border-radius: 5px;"' +
        ' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">' +
        '</iframe>' +
        '</div>' +
        '</div >' +
        '<hr class="text-light">' +
        // for mobile
        '<div class="text-center text-light">© All rights reserved. <br> Developed by <a' +
        ' class="text-light" href="https://sawant-infotech.github.io/" target="_blank" rel="noopener">Sawant Infotech</a>' +
        '</div>' +
        '</footer>'

    section.innerHTML += data;
}

// stop preloader
function stopPreloader(){
    /* 1. Proloder */
    $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });
}

// display need consulation
function needConsultationDisplay(id){
    var section = document.getElementById(id);
    var data = ''+
    '<div class="fs-2 fw-semibold ms-3 p-3">'+
    '       <span class="underline">Need a Consultation?</span>'+
    '   </div>'+
    '   <div class="container-fluid p-0 pt-3">'+
    '       <div class="container-fluid ps-lg-5 pe-lg-5">'+
    '           <div class="row ps-lg-5 pe-lg-5">'+
    '               <div class="col-md-4">'+
    '                   <div class="w-100 text-center mb-2"><i class="fa-solid fa-location-dot me-2 fs-4"></i> <span'+
    '                           class="fs-5">Visit Us</span></div>'+
    '                   <div class="text-capitalize mb-4" id="office_address_display1">'+
    '                       <!-- address here through function dynamically -->'+
    '                   </div>'+
    '               </div>'+
    '               <div class="col-md-4">'+
    '                   <div class="w-100 text-center mb-2"><i class="fa-solid fa-phone me-2 fs-4"></i> <span'+
    '                           class="fs-5">Call'+
    '                           Us</span></div>'+
    '                   <div class="text-center mb-4" id="office_mobile_display2">'+
    '                       <!-- mobile here through function dynamically -->'+
    '                   </div>'+
    '               </div>'+
    '               <div class="col-md-4">'+
    '                    <div class="w-100 text-center mb-2"><i class="fa-solid fa-envelope me-2 fs-4"></i> <span'+
    '                            class="fs-5">Mail Us </span></div>'+
    '                    <div class="text-center mb-4" id="office_mail_display2">'+
    '                        <!-- mail here through function dynamically -->'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '        <div class="container mt-2">'+
    '            <form method="post" id="id-needConsultation" name="name-needConsultation">'+
    '                <div class="row" style="display: none !important;">'+
    '                    <div class="col-md-6 p-2">'+
    '                        <input type="text" class="form-control" placeholder="DateTime" name="DateTime" id="id-dateTime-needConsultation" value="" tabindex="-1">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="row">'+
    '                    <div class="col-md-6 p-2">'+
    '                        <input type="text" class="form-control" placeholder="Your Name *" required name="ClientName">'+
    '                    </div>'+
    '                    <div class="col-md-6 p-2">'+
    '                        <input type="text" class="form-control" placeholder="Company Name *" required'+
    '                            name="CompanyName">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="row">'+
    '                    <div class="col-md-6 p-2">'+
    '                        <input type="text" class="form-control" placeholder="Phone Number *" required name="Phone">'+
    '                    </div>'+
    '                    <div class="col-md-6 p-2">'+
    '                        <input type="email" class="form-control" placeholder="Email Address *" required'+
    '                            name="Mail">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="row">'+
    '                    <div class="col-md-6 p-2">'+
    '                        <input type="text" class="form-control" placeholder="Your City *" required name="City">'+
    '                    </div>'+
    '                    <div class="col-md-6 p-2">'+
    '                        <input type="text" class="form-control" placeholder="Your State *" required name="State">'+
    '                    </div>'+
    '                </div>'+
    '                <div class="row">'+
    '                    <div class="col-12 p-2">'+
    '                        <select class="form-select form-control form-control-md" aria-label="" name="ConsultationType">'+
    '                            <option value="-- Select Consultation --" class="form-control form-control-md mt-3">-- Select Consultation'+
    '                                --</option>'+
    '                            <option value="Help / Support" class="form-control form-control-md mt-3">Help / Support'+
    '                            </option>'+
    '                            <option value="Software Purchase" class="form-control form-control-md mt-3">Software'+
    '                                Purchase</option>'+
    '                            <option value="Hardware Purchase" class="form-control form-control-md mt-3">Hardware'+
    '                                Purchase'+
    '                            </option>'+
    '                            <option value="AMC Service" class="form-control form-control-md mt-3">'+
    '                                AMC Service</option>'+
    '                            <option value="Desktop / Laptop / Accessories"'+
    '                                class="form-control form-control-md mt-3">'+
    '                                Desktop / Laptop / Accessories</option>'+
    '                            <option value="Other" class="form-control form-control-md mt-3">'+
    '                                Other</option>'+
    '                        </select>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="row">'+
    '                    <div class="col-12 p-2">'+
    '                        <textarea rows="3" class="form-control w-100" placeholder="Message"'+
    '                            name="Message"></textarea>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="row">'+
    '                    <div class="col-12 d-flex justify-content-center">'+
    '                        <div class="d-grid col-4"><button'+
    '                                class="btn btn-outline-warning btn-lg d-flex justify-content-center align-items-center">'+
                                    '<div class="spinner-grow  me-2 visually-hidden"'+
                                    'id="id-NeedConsultationSubmitSpinner" role="status"></div>'+
                                    '<span class="fw-bold fs-5">Submit</span>'+
    '                            </button>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '            </form>'+
    '        </div>'+
    '    </div>';
    section.innerHTML += data;
}

// display about company
function aboutCompanyDisplay(id){
    var section = document.getElementById(id);
    var data = ''+
            '    <div class="container-fluid mb-4 p-0">'+
            '       <div class="fs-2 fw-semibold ms-3 p-3">'+
            '    <span class="underline p-0"> <span class="fs-2 fw-semibold">About The </span> <span'+
            '            class="narayniFont fs-2 text-danger text-uppercase"'+
            '            style="text-shadow: 0px 0px 2px black;">Narayani <span class="ms-1 me-1"></span> Infotech</span>'+
            '    </span>'+
            '</div>'+
            '<div class="container" style="text-align: justify;" id="main-text">'+
            '    <span class="m-5"></span><span class="narayniFont text-danger fs-2 text-uppercase"'+
            '        style="text-shadow: 0px 0px 2px black;">Narayani<span class="ms-1 me-1"></span> Infotech</span> is a technology solutions company that was founded in July 2016. We provide a wide '+
            '    range of technology services, including CCTV installation, sales of new and refurbished desktop/laptops '+
            '    and their accessories, antivirus software, AMC services for both government and non-government '+
            '    organizations, bulk purchase of HDD\'s and SSD\'s, 24x7 technical support, gaming and share market '+
            '    multi-screen setup building, office and college lab setups development and E-waste collection with '+
            '    government licenses.'+
            '    <div class="mt-3 mb-2"></div>'+
            '    <span class="m-3"></span>Our team of experts is dedicated to delivering high-quality products and '+
            '    services that meet the evolving '+
            '    needs of our customers. We specialize in CCTV installation, and our systems use the latest technology to '+
            '    ensure that our clients receive the highest level of protection and surveillance. We also provide a '+
            '    range of technology products including new and refurbished desktop and laptops, along with their '+
            '    accessories, we also repair and give new look to the laptops. '+
            '    <div class="mt-3 mb-2"></div>'+
            '    <span class="m-3"></span>We understand the importance of protecting your computer from malware and '+
            '    viruses, which is why we offer '+
            '    a variety of antivirus software options to help keep your computer safe. We also provide AMC services '+
            '    for both government and non-government organizations, ensuring that their technology is always working '+
            '    at optimal levels. We also offer bulk purchase of HDD\'s and SSD\'s. We have a wide range of storage options '+
            '    that are perfect for businesses, individuals, and organizations of all sizes. '+
            '    <div class="mt-3 mb-2"></div>'+
            '    <span class="m-3"></span>In addition to our core services, we also specialize in advanced services such '+
            '    as gaming and share '+
            '    market multi-screen setup building, office and college lab setups development. This allows our clients '+
            '    to experience the latest in technology and to have the tools they need to stay ahead of the curve. As a '+
            '    responsible E-waste collector company, we have government licenses and committed to the responsible '+
            '    disposal of electronic waste. '+
            '    <div class="mt-3 mb-2"></div>'+
            '    <span class="m-3"></span>We understand the importance of having support when you need it, which is why '+
            '    we offer 24x7 technical '+
            '    support. Our team of experienced technicians and engineers are available to assist you whenever you need '+
            '    it, providing you with the peace of mind that comes from knowing that you have support when you need it. '+
            '    <div class="mt-3 mb-2"></div>'+
            '    <span class="m-3"></span>At Narayani Infotech, we pride ourselves on building long-term relationships '+
            '    with our customers by '+
            '    providing exceptional service and support. We look forward to the opportunity to work with you and '+
            '    provide the technology solutions that your business requires. '+
            '</div>'+
        '</div>'
        section.innerHTML += data;
}

// display carousal about company
function carousalAboutCompanyDisplay(id){
    var section = document.getElementById(id);
    var data = ''+
        '<div class="container-fluid w-100 m-0 p-0" style="overflow-x: hidden;">'+
        '<div id="carouselFade" class="carousel slide carousel-fade" data-bs-ride="carousel"'+
        '    style="width: 100%; height: 100%;">'+
        '    <div class="carousel-inner">'+
        '        <div class="carousel-item active" data-bs-interval="2000">'+
        '            <div class="" style="height: 500px;">'+
        '                <div class="row" id="carousal-narayni-2" style="height: 100%;">'+
        '                    <div class="col-12 d-flex justify-content-center align-items-center p-4">'+
        '                        <div class="text-center"> <img src="source/logo.png" alt="logo.png" class="m-auto">'+
        '                            <h2 class="mt-1" style="color: #212529; text-shadow: 2px 2px 5px orange;">'+
        '                                Complete Your IT Resources</h2>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
        '            </div>'+
        '        </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (1).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (3).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (4).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (5).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (2).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (6).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (7).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (8).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '        <div class="carousel-item" data-bs-interval="2000"> <img src="source/office/office (1).jpeg"'+
        '                class="d-block  " alt="carousel.png" style="width: 100%;" height="500px"> </div>'+
        '    </div> <button class="carousel-control-prev visually-hidden" type="button"'+
        '        data-bs-target="#carouselFade" data-bs-slide="prev"> <span class="carousel-control-prev-icon"'+
        '            aria-hidden="true"></span> <span class="visually-hidden">Previous</span> </button> <button'+
        '        class="carousel-control-next visually-hidden" type="button" data-bs-target="#carouselFade"'+
        '        data-bs-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span'+
        '            class="visually-hidden">Next</span> </button>'+
        '</div>'+
    '</div>';
    section.innerHTML += data;
}

// display contact us
function contactUsFormDisplay(id){
    var section = document.getElementById(id);
    var data = ''+
    '<div class="container-fluid">'+
    '        <div class="row">'+
    '            <div class="col-md-6 col-sm-6 p-0 d-flex justify-content-center align-items-center"'+
    '                style="height: 35rem;">'+
    '                <div class="w-100 p-0" style="height: 80%;">'+
    '                    <div class="bg-light w-100 d-flex justify-content-center align-items-center"'+
    '                        style="height: 100%;">'+
    '                        <div>'+
    '                            <h2 class="text-center underline-center" style="font-size: 5rem; color: #212529;">Get In'+
    '                                Touch</h2>'+
    '                            <p class="ps-4 pe-4" style="font-size: 1.3rem !important; color: #212529;">'+
    '                                Want to find out how <span class="narayniFont text-uppercase text-danger"'+
    '                                    style="font-size: 1.6rem;">Narayani <span class="ms-1 me-1"></span>'+
    '                                    Infotech</span> can solve problems specific'+
    '                                to your business? Let\'s'+
    '                                talk.'+
    '                            </p>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="col-md-6 col-sm-6 text-light p-lg-5 p-sm-2 d-flex justify-content-center align-items-center"'+
    '                style="background-color: rgb(237, 138, 0); height: 35rem; border-bottom-left-radius: 50px;">'+
    '                <div class="w-100 p-0 m-0">'+
    '                    <h2 class="ps-3 fw-bold underline-dark" style="font-size: 2.5rem;">Contact Sales</h2>'+
    '                    <form class="ps-lg-5 pe-lg-5 ps-sm-3 pe-sm-3" name="name-contactSaleForm"'+
    '                        id="id-contactSaleForm">'+
    '                        <input type="text" class="form-control visually-hidden" placeholder="DateTime" name="DateTime"'+
    '                            id="id-dateTime-contactSale" value="" readonly tabindex="-1">'+
    '                        <label for="" class="form-label">Your Name*</label>'+
    '                        <input type="text" class="form-control" placeholder="Shubham Sawant" required'+
    '                            name="ClientName">'+
    '                        <label for="" class="form-label">City*</label>'+
    '                        <input type="text" class="form-control" placeholder="Kolhapur" required name="City">'+
    '                        <label for="" class="form-label">State*</label>'+
    '                        <input type="text" class="form-control" placeholder="Maharashtra" required name="State">'+
    '                        <label for="" class="form-label">Contact*</label>'+
    '                        <input type="text" class="form-control" placeholder="1234567890" required name="Contact">'+
    '                        <label for="" class="form-label">How Can We Help You?*</label>'+
    '                        <input type="text" class="form-control"'+
    '                            placeholder="I Have Intrsted In Your Service. Can You..." required name="Help">'+
    '                        <input type="text" class="form-control visually-hidden" readonly value="Sales" tabindex="-1"'+
    '                            name="Type">'+
    '                        <button'+
    '                            class="btn btn-outline-light d-flex justify-content-center align-items-center w-50 mt-2 mb-2"'+
    '                            style="border-radius: 0;">'+
    '                            <div class="spinner-grow  me-2 visually-hidden" id="id-ContactSaleSpinner"'+
    '                                role="status">'+
    '                            </div>'+
    '                            <span class="fs-5">Submit</span>'+
    '                        </button>'+
    '                    </form>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>'+
    '    <div class="container-fluid mt-contact-form">'+
    '        <div class="row">'+
    '            <div class="col-md-6 col-sm-6 text-light p-lg-5 p-sm-2 d-flex justify-content-center align-items-center"'+
    '                style="background-color: rgb(237, 138, 0); height: 35rem; border-top-right-radius: 50px;">'+
    '                <div class="w-100 p-0 m-0">'+
    '                    <h2 class="ps-3 fw-bold underline-dark" style="font-size: 2.5rem;">Contact Support</h2>'+
    '                    <form class="ps-lg-5 pe-lg-5 ps-sm-3 pe-sm-3" name="name-contactSupportForm"'+
    '                        id="id-contactSupportForm">'+
    '                        <input type="text" class="form-control visually-hidden" placeholder="DateTime" name="DateTime"'+
    '                            id="id-dateTime-contactSupport" value="" readonly tabindex="-1">'+
    '                        <label for="" class="form-label">Your Name*</label>'+
    '                        <input type="text" class="form-control" placeholder="Shubham Sawant" required'+
    '                            name="ClientName">'+
    '                        <label for="" class="form-label">City*</label>'+
    '                        <input type="text" class="form-control" placeholder="Kolhapur" required name="City">'+
    '                        <label for="" class="form-label">State*</label>'+
    '                        <input type="text" class="form-control" placeholder="Maharashtra" required name="State">'+
    '                        <label for="" class="form-label">Contact*</label>'+
    '                        <input type="text" class="form-control" placeholder="1234567890" required name="Contact">'+
    '                        <label for="" class="form-label">How Can We Help You?*</label>'+
    '                        <input type="text" class="form-control"'+
    '                            placeholder="I Have Intrsted In Your Service. Can You..." required name="Help">'+
    '                        <input type="text" class="form-control visually-hidden" value="Support" readonly tabindex="-1"'+
    '                            name="Type">'+
    '                        <button'+
    '                            class="btn btn-outline-light d-flex justify-content-center align-items-center w-50 mt-2 mb-2"'+
    '                            style="border-radius: 0;">'+
    '                            <div class="spinner-grow  me-2 visually-hidden" id="id-ContactSupportSpinner"'+
    '                                role="status">'+
    '                            </div>'+
    '                            <span class="fs-5">Submit</span>'+
    '                        </button>'+
    '                    </form>'+
    '                </div>'+
    '            </div>'+
    '            <div class="col-md-6 col-sm-6 p-0 d-flex justify-content-center align-items-center"'+
    '                style="height: 35rem;">'+
    '                <div class="w-100 p-0" style="height: 80%;">'+
    '                    <div class="bg-light w-100 d-flex justify-content-center align-items-center"'+
    '                        style="height: 100%;">'+
    '                        <div>'+
    '                            <h2 class="text-center narayniFont text-danger text-uppercase underline-center"'+
    '                                style="font-size: 3rem; color: #212529;">Narayani <span class="ms-1 me-2"></span>'+
    '                                Infotech</h2>'+
    '                            <h3 class="text-center fw-bold" style="font-size: 1.8rem;">Get Help On Social</h3>'+
    '                            <div class="d-flex justify-content-center align-items-center">'+
    '                                <ul class="list-inline p-3">'+
    '                                    <li class="list-inline-item"> <a class="text-decoration-none"'+
    '                                            onclick="openInstgram();">'+
    '                                            <i class="fa-brands fa-instagram text-dark"'+
    '                                                style="font-size: 30px;"></i>'+
    '                                        </a></li>'+
    '                                    <li class="list-inline-item"><a class="text-decoration-none"'+
    '                                            onclick="openWhatsapp();">'+
    '                                            <i class="fa-brands fa-whatsapp text-dark" style="font-size: 30px;"></i>'+
    '                                        </a></li>'+
    '                                    <li class="list-inline-item"><a class="text-decoration-none"'+
    '                                            onclick="openMail();">'+
    '                                            <i class="fa-regular fa-envelope text-dark"'+
    '                                                style="font-size: 30px;"></i>'+
    '                                        </a></li>'+
    '                                    <li class="list-inline-item"><a class="text-decoration-none"'+
    '                                            onclick="openYoutube();">'+
    '                                            <i class="fa-brands fa-youtube text-dark" style="font-size: 30px;"></i>'+
    '                                        </a></li>'+
    '                                </ul>'+
    '                            </div>'+
    '                            <ul class="list-unstyled p-3" style="font-size: 1.3rem;">'+
    '                                <li class="d-flex align-items-center" id="office_mobile_display4"><i'+
    '                                        class="fa fa-phone mr-2 me-2" aria-hidden="true"></i></li>'+
    '                                <li class="d-flex align-items-center" id="office_mail_display4"><i'+
    '                                        class="fa fa-envelope mr-2 me-2" aria-hidden="true"></i></li>'+
    '                                <li class="d-flex align-items-center" id="office_address_display3"><i'+
    '                                        class="fa fa-map-marker mr-2 me-2" aria-hidden="true"></i></li>'+
    '                            </ul>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>';
    section.innerHTML += data;
}

function aboutCeoDisplay(id){
    var section = document.getElementById(id);
    var data = ''+
        '<div class="container-fluid mb-4 p-0"> '+
        '        <div class="fs-2 fw-semibold ms-3 p-3"> '+
        '            <span class="underline p-0"> <span class="fs-2 fw-semibold">About Tushar Lohar, CEO Of</span> <span '+
        '                    class="narayniFont fs-2 text-danger text-uppercase" '+
        '                    style="text-shadow: 0px 0px 2px black;">Narayani <span class="ms-1 me-1"></span> Infotech</span> </span> '+
        '        </div> '+
        '        <div class="container"> '+
        '            <div class="container d-flex justify-content-center align-items-center"> '+
        '                <span class="glowbutton"> <img src="https://narayaniinfotech.github.io/source/author.jpg" alt="ceo" '+
        '                        class="img-fluid " width="150" height="150" style="border-radius: 50%;"> '+
        '                </span> '+
        '            </div> '+
        '            <div style="text-align: justify;" id="main-text"> '+
        '                <span class="m-3"></span>Tushar Lohar is the CEO of Narayani Infotech, a leading provider of '+
        '                technology solutions. He is a '+
        '                Marathian, hailing from the state of Maharashtra in India, known for its rich cultural heritage '+
        '                and '+
        '                contributions to the field of science and technology. Being a Marathian, Tushar possesses unique '+
        '                perspective on the industry and has brought many innovative ideas to the company. '+
        '                <div class="mt-3 mb-2"></div> '+
        '                <span class="m-3"></span>Tushar brings a wealth of experience and expertise to the company. He '+
        '                has a deep understanding of '+
        '                the technology industry and a passion for driving innovation and growth. He is known for his '+
        '                ability '+
        '                to provide the best service and be friendly with the customers. Tushar is highly skilled in '+
        '                developing and nurturing customer relationships, which is reflected in the long-term '+
        '                partnerships '+
        '                that Narayani Infotech has built with its customers. '+
        '                <div class="mt-3 mb-2"></div> '+
        '                <span class="m-3"></span>Under Tushar\'s leadership, Narayani Infotech has become a leader in the '+
        '                field and has established a '+
        '                reputation for excellence. He is dedicated to fostering a culture of collaboration and '+
        '                innovation '+
        '                within the company, which has been instrumental in driving the company\'s success. He is '+
        '                committed to '+
        '                providing the highest level of service and support to our customers, and that is one of his top '+
        '                priorities. '+
        '                <div class="mt-3 mb-2"></div> '+
        '                <span class="m-3"></span>Tushar has a clear vision for the company\'s future, and he is dedicated '+
        '                to driving the company '+
        '                forward. With his leadership, Narayani Infotech is well-positioned to continue delivering '+
        '                cutting-edge technology solutions to its customers. Tushar\'s dedication to providing the best '+
        '                service, friendly approach and being a marathian makes him an effective leader, who is able to '+
        '                inspire and motivate his team to achieve great success. '+
        '            </div> '+
        '        </div> '+
        '    </div> ';
    section.innerHTML += data;
}

function SHSpinner(spinnerId, showHide){
    if(showHide == 'show'){
        $('#' + spinnerId).removeClass('visually-hidden');
    }
    else if(showHide == 'hide'){
        $('#' + spinnerId).addClass('visually-hidden');
    }
}
function fillFormData(formName){
    if(formName == 'needConsultation'){
        const scriptURL_NeedConsultation = 'https://script.google.com/macros/s/AKfycbxMkkywikL_QMI8JJ6zHukshG884pNi31jpNb0fNL1ezwEKe5WaIagi4646rWt0_dPe/exec';
        const form_NeedConsultation = document.forms['name-needConsultation'];
        document.getElementById('id-dateTime-needConsultation').value = Date();
        form_NeedConsultation.addEventListener('submit', e => {
            SHSpinner('id-NeedConsultationSubmitSpinner', 'show');
            e.preventDefault();
            fetch(scriptURL_NeedConsultation, { method: 'POST', body: new FormData(form_NeedConsultation) })
                .then(response =>  (SHSpinner('id-NeedConsultationSubmitSpinner', 'hide'), alert(_formSaveMsg), $('#id-needConsultation')[0].reset(), document.getElementById('id-dateTime-needConsultation').value = Date()))
                .catch(error => (SHSpinner('id-NeedConsultationSubmitSpinner', 'hide'),alert(_formErrMsg + error.message), document.getElementById('id-dateTime-needConsultation').value = Date()))
        })
    }
    else if(formName == 'getCallBack'){
        const scriptURL_GetCallBack = 'https://script.google.com/macros/s/AKfycbxoZqlnEZ0JMx7hnOHjAAwpmz488KTURfe00BhL8WIjSMKSDHnkDRobOcBxigWJVjan/exec';
        const form_GetCallBack = document.forms['name-get-a-call-back'];
        document.getElementById('id-dateTime-get-a-call-back').value = Date();
        form_GetCallBack.addEventListener('submit', e => {
            SHSpinner('id-getCallBackSubmitSpinner', 'show');
            e.preventDefault()
            fetch(scriptURL_GetCallBack, { method: 'POST', body: new FormData(form_GetCallBack) })
            .then(response =>  (SHSpinner('id-getCallBackSubmitSpinner', 'hide'), alert(_formSaveMsg), $('#id-get-a-call-back')[0].reset(),  document.getElementById('id-dateTime-get-a-call-back').value = Date()))
            .catch(error => (SHSpinner('id-getCallBackSubmitSpinner', 'hide'),alert(_formErrMsg + error.message),  document.getElementById('id-dateTime-get-a-call-back').value = Date()))
        })
    }
    else if(formName == 'contactSaleForm'){
        const scriptURL_contactSales = 'https://script.google.com/macros/s/AKfycbyIH7MYHGiUqpOd-LF7qOoCOBVCmGp3PIwZYG-AnVdiOy3xQ75M-D0zIRHyh2i0hrJ4/exec';
        const form_contactSales = document.forms['name-contactSaleForm'];
        document.getElementById('id-dateTime-contactSale').value = new Date();
        form_contactSales.addEventListener('submit', e => {
            SHSpinner('id-ContactSaleSpinner', 'show');
            e.preventDefault()
            fetch(scriptURL_contactSales, { method: 'POST', body: new FormData(form_contactSales) })
            .then(response =>  (SHSpinner('id-ContactSaleSpinner', 'hide'), alert(_formSaveMsg), $('#id-contactSaleForm')[0].reset(),  document.getElementById('id-dateTime-contactSale').value = new Date()))
            .catch(error => (SHSpinner('id-ContactSaleSpinner', 'hide'),alert(_formErrMsg + error.message),  document.getElementById('id-dateTime-contactSale').value = new Date()))
        })
    }
    else if(formName == 'contactSupportForm'){
        const scriptURL_contactSupport = 'https://script.google.com/macros/s/AKfycbyIH7MYHGiUqpOd-LF7qOoCOBVCmGp3PIwZYG-AnVdiOy3xQ75M-D0zIRHyh2i0hrJ4/exec';
        const form_contactSupport = document.forms['name-contactSupportForm'];
        document.getElementById('id-dateTime-contactSupport').value = new Date();
        form_contactSupport.addEventListener('submit', e => {
            SHSpinner('id-ContactSupportSpinner', 'show');
            e.preventDefault()
            fetch(scriptURL_contactSupport, { method: 'POST', body: new FormData(form_contactSupport) })
            .then(response =>  (SHSpinner('id-ContactSupportSpinner', 'hide'), alert(_formSaveMsg), $('#id-contactSupportForm')[0].reset(),  document.getElementById('id-dateTime-contactSupport').value = new Date()))
            .catch(error => (SHSpinner('id-ContactSupportSpinner', 'hide'),alert(_formErrMsg + error.message),  document.getElementById('id-dateTime-contactSupport').value = new Date()))
        })
    }
    else if(formName == 'newsletterForm'){
        const scriptURL_newsletter = 'https://script.google.com/macros/s/AKfycbwCHFN1Q8mfRpDWQwk6Mw3HGWpuJt95QqiVHwbxyfKxkkKTvP67x99RgOn9_yldUvM/exec';
        const form_newsletter = document.forms['name-newsletterForm'];
        document.getElementById('id-dateTime-newsletter').value = new Date();
        form_newsletter.addEventListener('submit', e => {
            SHSpinner('id-newsletterSpinner', 'show');
            e.preventDefault()
            fetch(scriptURL_newsletter, { method: 'POST', body: new FormData(form_newsletter) })
            .then(response =>  (SHSpinner('id-newsletterSpinner', 'hide'), alert(_formSaveMsg), $('#id-newsletterForm')[0].reset(),  document.getElementById('id-dateTime-newsletter').value = new Date()))
            .catch(error => (SHSpinner('id-newsletterSpinner', 'hide'),alert(_formErrMsg + error.message),  document.getElementById('id-dateTime-newsletter').value = new Date()))
        })
    }
}

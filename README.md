# Dopefolio 🔥

## A Blazing Fast Multipage Portfolio Template for Developers 🚀

## [Demo Link](https://dopefolio.netlify.app) 🔗

<div align="center">
  <img src="https://i.postimg.cc/CxZXqhWM/ezgif-com-video-to-gif-1.gif" alt="Dopefolio Demo" width="100%" />
  <br>
</div>

<br/>
<br/>

## Features

- ### **Easy to Setup 💯**
- ### **Free to Use ( OpenSource ) 🥳**
- ### **No Additional Frameworks 🤘**
- ### **No Additional Libraries 🙌**
- ### **Multi Page 💎**
- ### **Fully Responsive 🚀**
- ### **Super Fast and Optimized for SEO ⚡**
- ### **Great Audits Score 🎖️**

<img src="https://i.ibb.co/1dD8Mky/Screenshot-from-2021-08-28-14-38-30.png" alt="Dopefolio Audits" width="100%" />

<br/>
<br/>

## Test the template with different colors on the playground link 🚀

## [Playground Link](https://dopefolio-playground.netlify.app) 🔗

<div align="center">
  <img src="https://i.postimg.cc/xjsqN9GG/ezgif-com-gif-maker-2.gif" alt="Dopefolio Playground" width="100%" />
  <br>
</div>

<br/>

---

<br/>

## Technologies used 🛠️

- **HTML** 🚀
- **CSS** 🚀
- **JavaScript** 🚀
- **SASS** 🚀

---

<br/>

## How To Use 🔧

From your command line, first clone Dopefolio:

```bash
# Clone this repository
$ git clone https://github.com/rammcodes/dopefolio

# Go into the repository
$ cd dopefolio

# Remove current origin repository
$ git remote remove origin
```

<br/>

Then you can install the dependencies

Using NPM:

```bash
# Install dependencies
$ npm install

# Listen to changes in CSS Preprocessor files ( SASS files )
$ npm run compile:scss
```

Once you run `npm run compile:scss`, then open the `index.html` inside your favorite browser or using the live server extension.

<br>

---

<br>

## Template Instructions:

## Step 1 - STYLES

Make sure you have started the SASS to CSS compilation by running

```bash
$ npm run compile:scss
```

Change the color theme of the website.

Go to `sass/abstracts/_variables.scss` and change the value of this sass variable called `$themeClrPrimary` to your preferred HEX color.

```scss
// Default value
$themeClrPrimary: #0062b9;
```

**NOTE**: I highly recommend to checkout the [Dopefolio Playground Link](https://dopefolio-playground.netlify.app) to test the template with different colors and see which color do you like the most.

<br/>

---

<br/>

## Step 2 - Homepage

Go to `/index.html` and fill your information, there are 6 sections:

### Header of Homepage

- On `.header_logo-img`, Add your own Image, Better if the background of the image is transparent so the background can match the theme color. To remove the background of your image, you can visit remove.bg where you can upload your image and it will remove the background of it.
- On `.header_logo-sub`, Add your own Name.

```html
<!-- **** Header of Homepage **** -->
<header class="header">
  <div class="header_content">
    <div class="header_logo-container">
      <div class="header_logo-img-cont">
        <img
          src="./assets/png/sobhan.png"
          alt="Ram Maheshwari Logo Image"
          class="header_logo-img"
        />
      </div>
      <span class="header_logo-sub">John Doe</span>
    </div>
    <div class="header_main">
      <ul class="header_links">
        <li class="header_link-wrapper">
          <a href="./" class="header_link"> Home </a>
        </li>
        <li class="header_link-wrapper">
          <a href="./#about" class="header_link">About </a>
        </li>
        <li class="header_link-wrapper">
          <a href="./#projects" class="header_link"> Projects </a>
        </li>
        <li class="header_link-wrapper">
          <a href="./#contact" class="header_link"> Contact </a>
        </li>
      </ul>
      <div class="header_main-ham-menu-cont">
        <img
          src="./assets/svg/ham-menu.svg"
          alt="hamburger menu"
          class="header_main-ham-menu"
        />
      </div>
    </div>
  </div>
  <div class="header_sm-menu">
    <div class="header_sm-menu-content">
      <ul class="header_sm-menu-links">
        <li class="header_sm-menu-link">
          <a href="./"> Home </a>
        </li>

        <li class="header_sm-menu-link">
          <a href="./#about"> About </a>
        </li>

        <li class="header_sm-menu-link">
          <a href="./#projects"> Projects </a>
        </li>

        <li class="header_sm-menu-link">
          <a href="./#contact"> Contact </a>
        </li>
      </ul>
    </div>
  </div>
</header>
<!-- END Header -->
```

### Hero Section of Homepage

- On `.heading-primary`, put your custom title.
- On `.text-primary`, put a short description about yourself.
- On `.home-hero_social-icon-link`, fill the href attribute with a link related to your social media account.

```html
<!-- **** Hero Section of Homepage **** -->
<section class="home-hero">
  <div class="home-hero_content">
    <h1 class="heading-primary">Hey, My name is John Doe</h1>
    <div class="home-hero_info">
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente solutions for complex
        problems
      </p>
    </div>
    <div class="home-hero_cta">
      <a href="./#projects" class="btn btn--bg">Projects</a>
    </div>
  </div>
  <div class="home-hero_socials">
    <div class="home-hero_social">
      <a href="#" class="home-hero_social-icon-link">
        <img
          src="./assets/png/linkedin-ico.png"
          alt="icon"
          class="home-hero_social-icon"
        />
      </a>
    </div>
    <div class="home-hero_social">
      <a href="#" class="home-hero_social-icon-link">
        <img
          src="./assets/png/github-ico.png"
          alt="icon"
          class="home-hero_social-icon"
        />
      </a>
    </div>
    <div class="home-hero_social">
      <a href="#" class="home-hero_social-icon-link">
        <img
          src="./assets/png/twitter-ico.png"
          alt="icon"
          class="home-hero_social-icon"
        />
      </a>
    </div>
    <div class="home-hero_social">
      <a href="#" class="home-hero_social-icon-link">
        <img
          src="./assets/png/yt-ico.png"
          alt="icon"
          class="home-hero_social-icon"
        />
      </a>
    </div>
    <div class="home-hero_social">
      <a
        href="#"
        class="home-hero_social-icon-link home-hero_social-icon-link--bd-none"
      >
        <img
          src="./assets/png/insta-ico.png"
          alt="icon"
          class="home-hero_social-icon"
        />
      </a>
    </div>
  </div>
  <div class="home-hero_mouse-scroll-cont">
    <div class="mouse"></div>
  </div>
</section>
<!-- /END Hero Section -->
```

### About Section

- On `.heading-sec_sub`, put a short description about the section.
- On `.about_content-details-para`, put your details here and use `<strong></strong>` tag to highlight specific keywords.
- On `.skills_skill`, mention your skill one by one.

```html
<!-- **** About Section of Homepage **** -->
<section id="about" class="about sec-pad">
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec_mb-med">
      <span class="heading-sec_main">About Me</span>
      <span class="heading-sec_sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>
    <div class="about_content">
      <div class="about_content-main">
        <h3 class="about_content-title">Get to know me!</h3>
        <div class="about_content-details">
          <p class="about_content-details-para">
            Hey! It's
            <strong>John Doe</strong>
            and I'm a <strong> Frontend Web Developer </strong> located in Los
            Angeles. I've done
            <strong> remote </strong>
            projects for agencies, consulted for startups, and collaborated with
            talented people to create
            <strong>digital products </strong>
            for both business and consumer use.
          </p>
          <p class="about_content-details-para">
            I'm a bit of a digital product junky. Over the years, I've used
            hundreds of web and mobile apps in different industries and
            verticals. Feel free to
            <strong>contact</strong> me here.
          </p>
        </div>
        <a href="./#contact" class="btn btn--med btn--theme dynamicBgClr"
          >Contact</a
        >
      </div>
      <div class="about_content-skills">
        <h3 class="about_content-title">My Skills</h3>
        <div class="skills">
          <div class="skills_skill">HTML</div>
          <div class="skills_skill">CSS</div>
          <div class="skills_skill">JavaScript</div>
          <div class="skills_skill">React</div>
          <div class="skills_skill">SASS</div>
          <div class="skills_skill">GIT</div>
          <div class="skills_skill">Shopify</div>
          <div class="skills_skill">Wordpress</div>
          <div class="skills_skill">Google ADS</div>
          <div class="skills_skill">Facebook Ads</div>
          <div class="skills_skill">Android</div>
          <div class="skills_skill">IOS</div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- END About Section -->
```

### Projects

- On `.heading-sec_sub`, put a short description about the section.
- `.projects_row` is the row for each project in your portfolio.
- One `.projects_row` for each project in your portfolio ( so for example, if you have 3 projects then you need 3 `.projects_row` one by one).

- Inside each `projects_row`, there are 4 main elements.

  - Project Image is located at `.projects_row-img` where you can add the URL for your project mockup/image. You can use websites like [Media Modifier](https://mediamodifier.com/) and [SmartMockups](https://smartmockups.com) to generate mockups for free. Just make sure to crop the extra white space around your mockup so the mockups can look bigger and the size of the mockup file will be less.

  - `.projects_row-content-title` is where you need to add your Project title.
  - `.projects_row-content-desc` is where you need to add a short 2-3 lines description of your project. As there's going to be a separate page for each project so there you can add all the details for each project on the specific project page.
  - The Anchor tag ( **Case Study** button) on press will take you to the details page for each project ( For example: If you click the **Case Study** button of Project 1 then it will take you to the `project-1.html` file where you will have all the details about that particular project).

Currently, I have already added a separate for each project ( considering there are 3 projects ) the file names are `project-1.html`, `project-2.html`, and `project-3.html`. They all contain the same code only the project title, description and image will change. If you like to add more projects then you can just create a new file for it and paste the same code that we have in `project-1.html` as the code is going to be the same and the only thing that you need to change is the data inside each project.

```html
<!-- **** Projects Section of Homepage **** -->
<section id="projects" class="projects sec-pad">
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec_mb-bg">
      <span class="heading-sec_main">Projects</span>
      <span class="heading-sec_sub">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>

    <div class="projects_content">
      <div class="projects_row">
        <div class="projects_row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects_row-img"
            loading="lazy"
          />
        </div>
        <div class="projects_row-content">
          <h3 class="projects_row-content-title">Project 1</h3>
          <p class="projects_row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-1.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
      <div class="projects_row">
        <div class="projects_row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects_row-img"
            loading="lazy"
          />
        </div>
        <div class="projects_row-content">
          <h3 class="projects_row-content-title">Project 2</h3>
          <p class="projects_row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-2.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
      <div class="projects_row">
        <div class="projects_row-img-cont">
          <img
            src="./assets/jpeg/project-mockup-example.jpeg"
            alt="Software Screenshot"
            class="projects_row-img"
            loading="lazy"
          />
        </div>
        <div class="projects_row-content">
          <h3 class="projects_row-content-title">Project 3</h3>
          <p class="projects_row-content-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
            tempora, explicabo quae quod deserunt eius sapiente praesentium.
          </p>
          <a
            href="./project-3.html"
            class="btn btn--med btn--theme dynamicBgClr"
            target="_blank"
            >Case Study</a
          >
        </div>
      </div>
    </div>
  </div>
</section>
<!-- END Projects Section -->
```

### Contact Section

- On `.heading-sec_sub`, put a short description about the section.
- `.contact_form-field` is the field inside form. Currently, there are 3 fields but you can add more fields as per your need but just make sure to change the name of **label** and **input/textarea** inside it.

If you like to know how to submit forms so you can receive the form details in your email then highly recommend using **formspree.io** as it's easier to set up and free to use. If you are using **Netlify** to host the site then Netlify has an inbuilt form receiver which you can use instead of **formspree**.

```html
<!-- **** Contact Section of Homepage **** -->
<section id="contact" class="contact sec-pad dynamicBg">
  <div class="main-container">
    <h2 class="heading heading-sec heading-sec_mb-med">
      <span class="heading-sec_main heading-sec_main--lt">Contact</span>
      <span class="heading-sec_sub heading-sec_sub--lt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis
        tempora explicabo quae quod deserunt eius sapiente
      </span>
    </h2>
    <div class="contact_form-container">
      <form action="#" class="contact_form">
        <div class="contact_form-field">
          <label class="contact_form-label" for="name">Name</label>
          <input
            required
            placeholder="Enter Your Name"
            type="text"
            class="contact_form-input"
            name="name"
            id="name"
          />
        </div>
        <div class="contact_form-field">
          <label class="contact_form-label" for="email">Email</label>
          <input
            required
            placeholder="Enter Your Email"
            type="text"
            class="contact_form-input"
            name="email"
            id="email"
          />
        </div>
        <div class="contact_form-field">
          <label class="contact_form-label" for="message">Message</label>
          <textarea
            required
            cols="30"
            rows="10"
            class="contact_form-input"
            placeholder="Enter Your Message"
            name="message"
            id="message"
          ></textarea>
        </div>
        <button type="submit" class="btn btn--theme contact_btn">Submit</button>
      </form>
    </div>
  </div>
</section>
<!-- END Contact Section -->
```

### Footer Section

- Inside h4 tag with the class `heading heading-sm text-lt` add your name.
- On `.main-footer_short-desc` put a short description about yourself.
- On Anchor tag inside `.main-footer_social-cont`, fill the href attribute with a link related to your social media account.

```html
<!-- **** Footer Section **** -->
<footer class="main-footer">
  <div class="main-container">
    <div class="main-footer_upper">
      <div class="main-footer_row main-footer_row-1">
        <h2 class="heading heading-sm main-footer_heading-sm">
          <span>Social</span>
        </h2>
        <div class="main-footer_social-cont">
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer_icon"
              src="./assets/png/linkedin-ico.png"
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer_icon"
              src="./assets/png/github-ico.png"
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer_icon"
              src="./assets/png/twitter-ico.png"
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer_icon"
              src="./assets/png/yt-ico.png"
              alt="icon"
            />
          </a>
          <a target="_blank" rel="noreferrer" href="#">
            <img
              class="main-footer_icon main-footer_icon--mr-none"
              src="./assets/png/insta-ico.png"
              alt="icon"
            />
          </a>
        </div>
      </div>
      <div class="main-footer_row main-footer_row-2">
        <h4 class="heading heading-sm text-lt">John Doe</h4>
        <p class="main-footer_short-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit facilis
          tempora explicabo quae quod deserunt
        </p>
      </div>
    </div>

    <div class="main-footer_lower">
      &copy; Copyright 2021. Made by
      <a rel="noreferrer" target="_blank" href="https://rammaheshwari.com"
        >Ram Maheshwari</a
      >
    </div>
  </div>
</footer>
<!-- END Footer Section -->
```

<br/>

---

<br/>

## Step 3 - Project Page

Each project will have its own Page. The project page will have important details about the project like the Project Title, Description, Technologies, Project Links, etc.

### Project Hero Section

- On `.heading-primary` add the Project Title.
- On `.text-primary` add a short description about the Project.
- On Anchor Tag that says **Live Link** with class `btn btn--bg`, add the Project Live Link as the value for the href attribute.

<!-- **** Project Section **** -->

```html
<section class="project-cs-hero">
  <div class="project-cs-hero_content">
    <h1 class="heading-primary">Project 1</h1>
    <div class="project-cs-hero_info">
      <p class="text-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in
        numquam incidunt earum quaerat cum fuga, atque similique natus nobis
        sit.
      </p>
    </div>
    <div class="project-cs-hero_cta">
      <a href="#" class="btn btn--bg" target="_blank">Live Link</a>
    </div>
  </div>
</section>
```

<!-- **** END Project Hero Section **** -->

### Project Details Section

- On `.project-details_showcase-img`, change the value of **src** to the location/link of Project Mockup.
- On `.project-details_desc-para` to add a detailed paragraph describing your project. Use multiple `.project-details_desc-para` elements for multiple paragraphs.
- On `.skills` mention the skills that were used to build the project inside `.skills_skill` to mention each skill.
- On Anchor Tag that says **Live Link** with class `btn btn--med btn--theme project-details_links-btn`, add the Project Live Link as the value for the href attribute.
- On Anchor Tag that says **Code Link** with class `btn btn--med btn--theme-inv project-details_links-btn`, add the Project's Code Link ( Repository Link ) as the value for the href attribute.

<!-- **** Project Details Section **** -->

```html
<section class="project-details">
  <div class="main-container">
    <div class="project-details_content">
      <div class="project-details_showcase-img-cont">
        <img
          src="./assets/jpeg/project-mockup-example.jpeg"
          alt="Project Image"
          class="project-details_showcase-img"
        />
      </div>
      <div class="project-details_content-main">
        <div class="project-details_desc">
          <h3 class="project-details_content-title">Project Overview</h3>
          <p class="project-details_desc-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias
            tenetur minus quaerat aliquid, aut provident blanditiis, deleniti
            aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia
            laborum corrupti ullam rem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque alias tenetur minus quaerat aliquid, aut
            provident blanditiis, deleniti aspernatur ipsam eaque veniam
            voluptatem corporis vitae mollitia laborum corrupti ullam rem?
          </p>
          <p class="project-details_desc-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias
            tenetur minus quaerat aliquid, aut provident blanditiis, deleniti
            aspernatur ipsam eaque veniam voluptatem corporis vitae mollitia
            laborum corrupti ullam rem?
          </p>
        </div>
        <div class="project-details_tools-used">
          <h3 class="project-details_content-title">Tools Used</h3>
          <div class="skills">
            <div class="skills_skill">HTML</div>
            <div class="skills_skill">CSS</div>
            <div class="skills_skill">JavaScript</div>
            <div class="skills_skill">React</div>
            <div class="skills_skill">SASS</div>
            <div class="skills_skill">GIT</div>
            <div class="skills_skill">Shopify</div>
            <div class="skills_skill">Wordpress</div>
            <div class="skills_skill">Google ADS</div>
            <div class="skills_skill">Facebook Ads</div>
            <div class="skills_skill">Android</div>
            <div class="skills_skill">IOS</div>
          </div>
        </div>
        <div class="project-details_links">
          <h3 class="project-details_content-title">See Live</h3>
          <a
            href="#"
            class="btn btn--med btn--theme project-details_links-btn"
            target="_blank"
            >Live Link</a
          >
          <a
            href="#"
            class="btn btn--med btn--theme-inv project-details_links-btn"
            target="_blank"
            >Code Link</a
          >
        </div>
      </div>
    </div>
  </div>
</section>
```

<!-- **** END Project Details Section **** -->

<br>

---

<br>

## Deployment 📦

Once you have done with your setup. You need to put your website online!

I highly recommend to use [Netlify](https://netlify.com) to achieve this on the EASIEST WAY

Whenever you wanna host a new site on Netlify. You will need to press the **Create New Site** button from the Netlify's dashboard once you login into Netlify.

Once you press the **Create Site Button** then you will have to follow the 3 steps:

1. You will have to select your Github account.

2. Then select the Repository which you wanna host, in this case its your Portfolio website ( Clone of Dopefolio )

3. In the 3rd step, you will have to modify the **Site settings and deploy**, keep everything as it is but just make sure to modify the **Build command** and set its value to **npm run build** and then modify the **Publish directory** and set its value to **/** as shown in the **image** below

<div align="center">
  <img src="https://i.ibb.co/hDTTrPB/Set-Build-Command-to.png" alt="Dopefolio Build Command Example and Publish Directory Value" width="100%" />
  <br>
</div>

<br>

Then hit the **Deploy site** button and your **Portfolio Site** is live 🥳

<br>

---

<br>

## Support 😇

If you find this project to be useful then please **support** me by donating some **Money** on the **Buy Me a Coffee** link below so I can continue chasing my dream of building useful **Open Source projects** that will help the developer community and the general audience and will allow me to change my life as well 😇

### **[Buy Me A Coffee](https://www.buymeacoffee.com/rammcodes)** ❤️

<br>

---

<br>

## Give a Star ⭐

If you like this project then give it a **Github** star by pressing the **Star** button ⭐

<br>

---

<br>

## Author 👨‍💻

- **Ram Maheshwari** - **[Linkedin](https://linkedin.com/in/rammcodes)**, **[Twitter](https://twitter.com/rammcodes)**, **[Github](https://github.com/rammcodes)**, **[Portfolio](https://rammaheshwari.com)**

<br>

#### Note:

I'm currently looking for good **Job Opportunities** both **Remote ( Worldwide )** and **On-Site ( Anywhere in India )**. So, if you have a good opportunity that matches my skills experience then you can contact me on my **[Linkedin](https://linkedin.com/in/rammcodes)** or my email id **rammcodes@gmail.com** 🙌

<br>

---

<br>

## Special Thanks ❤️

Special thanks to [Jacobo Martínez](https://github.com/cobidev) for inspiring me to create something useful for the Developer Community. **Jacobo** is the creator of [Simplefolio](https://github.com/cobidev/simplefolio) which is another great Portfolio website Template for Developers. Check it out and show him some love ❤️

<br>

---

<br>

## License 📄

This project is licensed under the **GPL-3.0** License - see the [LICENSE](LICENSE) file for details

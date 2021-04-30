import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
    return (
        <section className="about__us">
            <div className="about__us__left">
               <h4>Welcome</h4>
               <h2>Al Manahil Foundation</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a aspernatur ea, corporis quaerat voluptates odio soluta. Enim nulla similique, repudiandae sed alias delectus iusto est quaerat repellendus suscipit unde.</p>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet iste blanditiis vel sed, repellendus reprehenderit.</p>
               <div className="our__services">
                <h2>Our Services</h2>
                <a href="">&raquo; Charity for Children & Education</a>
                <a href="">&raquo; Setting up a charitable trust</a>
                <a href="">&raquo; Services for Charities and Groups</a>
                <a href="">&raquo; Planning to donate to good causes in your will</a>

               </div>
            </div>
            <div className="about__us__right">
                <img src="https://www.macleans.ca/wp-content/uploads/2019/01/charities-istock-october18.jpg" alt=""/>
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, neque? Voluptatum delectus reprehenderit quo amet sapiente inventore quos reiciendis ipsam. Iusto eos atque, distinctio explicabo saepe fuga a recusandae maiores.</p>
            </div>
        </section>
    );
};

export default AboutUs;
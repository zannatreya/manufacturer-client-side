import React from 'react';
import { MdQuestionAnswer } from 'react-icons/md';
import { BsQuestionOctagonFill } from 'react-icons/bs'
import './Blogs.css';


const Blogs = () => {
    return (
        <div>
            <h3 className='text-center m-12 text-3xl font-bold uppercase'>Question & Answer<MdQuestionAnswer className='answer' /></h3>


            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application<BsQuestionOctagonFill className='question' /></div>
                <div class="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application<BsQuestionOctagonFill className='question' />
                </div>
                <div class="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="3" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="4" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?                </div>
                <div class="collapse-content">
                    <p> </p>
                </div>
            </div>

            <div tabindex="5" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>Unit testing is a type of software testing where individual units or components of a software are tested. Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
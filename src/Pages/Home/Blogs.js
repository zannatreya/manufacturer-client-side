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
                    <p> Optimizing performance in a React application:
                        Keeping component state local where necessary
                        Memoizing React components to prevent unnecessary re-renders
                        Code-splitting in React using dynamic import()
                        Windowing or list virtualization in React
                        Lazy loading images in React</p>
                </div>
            </div>

            <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application<BsQuestionOctagonFill className='question' />
                </div>
                <div class="collapse-content">
                    <p>There are four main types of state you need to properly manage in your React apps: </p>
                    <p>
                        1.Local state.
                        2.Global state.
                        3.Server state.
                        4.URL state.
                    </p>
                </div>
            </div>

            <div tabindex="2" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.</p>
                </div>
            </div>

            <div tabindex="3" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?                </div>
                <div class="collapse-content">
                    <p> </p>
                </div>
            </div>

            <div tabindex="4" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
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
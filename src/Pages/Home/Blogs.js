import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center m-12 text-4xl font-bold uppercase'>Blogs</h1>

            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?                </div>
                <div class="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="1" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
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
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>

            <div tabindex="5" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p> attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';

const Blogs = () => {
  return (
    <div class=" text-center  bg-base-200">
      <div class=" bg-inherit">
        <h1 class="text-2xl font-bold "> What are the different ways to manage a state in a React application?</h1>
        <p class="py-6">There are four main types of state you need to properly manage in your React apps Local state,Global state,Server state,URL state</p>
      </div>
      <div class=" bg-inherit">
        <h1 class="text-2xl font-bold">  How does prototypical inheritance work?</h1>
        <p class="py-6">When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype . That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p>
      </div>
      <div class=" bg-inherit">
        <h1 class="text-2xl font-bold">What is a unit test? Why should write unit tests?</h1>
        <p class="py-6">Unit testing is a software development process that examines the smallest testable components of an application, known as units, individually and independently for proper operation. This testing methodology is carried out by software developers and, on occasion, QA personnel during the development process. Unit tests have the advantage of isolating a function, class, or method and testing only that piece of code. Individual components of higher quality contribute to overall system resilience. As a result, the code is reliable. Unit tests alter the nature of the debugging process as well.</p>
      </div>
      <div class=" bg-inherit">
        <h1 class="text-2xl font-bold">How will you improve the performance of a React Application?</h1>
        <p class="py-6">During the initial rendering process, React builds a DOM tree of components. So, when data changes in the DOM tree, we want React to re-render only those components that were affected by the change, skipping the other components in the tree that were not affected.
          However, React could end up re-rendering all components in the DOM tree, even though not all are affected. This will result in longer loading time, wasted time, and even wasted CPU resources. We need to prevent this from happening. So, this is where we will focus our optimization effort.
          In this situation, we could configure every component to only render or diff when necessary, to avoid wasting resources and time.</p>
      </div>
      <div class=" bg-inherit">
        <h1 class="text-2xl font-bold">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
        <p class="py-6">If i have an array of products i need to use find.</p>
      </div>
    </div>
  );
};

export default Blogs;
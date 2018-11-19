# Frontend Team Lead Challenge

## Question 1

#### What are your thoughts about advantages and disadvantages of using CSS in JS approach?

As a big fan of CSS in JS, in particular Styled Components, I'd like to start advocating the issues it solves in small to large codebases:

- Component styles are scoped to the single component, making it reusable and customisable without interfering with the rest of the application
- CSS properties can be actually tested
- Style and state of the component can be bound directly
- No unused CSS to mantain, no loading of all stylesheets/rules on every page, the loaded style is just the one of the loaded components

There are some cons in using this approach though, which in my opinion are not as strong as the pros, but still they have to be considered:

- CSS in JS is not natively implementable, so a dependancy is needed to handle it
- Layouting the page needs a Layout Component to wrap the components cols, rows, etc..., and handling this is not as easy as using global classes
